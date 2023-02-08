import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/api';
import { ListStyled } from './Review.styled';

const Review = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(res => setReviews(res));
  }, [movieId]);

  if (reviews.length === 0) {
    return 'We do not have any reviews for this movie.';
  }
  return (
    <ListStyled>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ListStyled>
  );
};

export default Review;
