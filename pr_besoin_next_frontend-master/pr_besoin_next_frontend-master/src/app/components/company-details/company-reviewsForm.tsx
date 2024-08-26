"use client";
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './FormReview.module.css';

const FormReview = () => {
  const [rating, setRating] = useState(0);
  const [opinion, setOpinion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (index: number) => {
    setRating(index + 1);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (opinion.trim() === '') {
      toast.error('Please provide your opinion.');
      return;
    }
    // Here you would submit form data to API or backend
    setSubmitted(true);
    setOpinion(''); 
    toast.success('Review submitted successfully!');
  };

  const handleReset = () => {
    setRating(0);
    setOpinion('');
    setSubmitted(false);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingClick(i)}
          style={{
            fontSize: '24px', 
            color: 'yellow',
            cursor: 'pointer', 
          }}
        >
          {i < rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px dotted #ccc', padding: '20px', borderRadius: '5px' }}>
      <fieldset>
        <legend className={styles.legend}>
          <h3>Company Reviews Form</h3>
        </legend>
        <div className={styles.ratingContainer}>
          <span>Rating: {rating}/5</span>
          <div className={styles.stars}>{renderStars()}</div>
        </div>
        <textarea
          className={styles.textarea3}
          name="opinion"
          value={opinion}
          onChange={(event) => setOpinion(event.target.value)}
          placeholder="Your opinion..."
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}
        />
        <div className={styles.btnGroup}>
          <button type="submit" className="btn-ten fw-500 text-white text-center tran3s mt-25">
            Submit
          </button>
          <button type="button" onClick={handleReset} className="btn-ten fw-500 text-white text-center tran3s mt-25">
            Reset
          </button>
        </div>
      </fieldset>
      <ToastContainer />
    </form>
  );
};

export default FormReview;