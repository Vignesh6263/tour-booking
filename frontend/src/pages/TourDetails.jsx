import React, { useState, useRef, useEffect, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import tourImg02 from '../assets/images/tour-img02.jpg'; // Import directly

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo = '',
    title = '',
    desc = '',
    price = 0,
    reviews = [],
    city = '',
    address = '',
    distance = 0,
    maxGroupSize = 0,
  } = tour || {};

  // Use imported image if photo matches the local path, otherwise handle as before
  const imageSrc = photo === "C:\\Users\\Windows 11\\Desktop\\Project\\frontend\\src\\assets\\images\\tour-img02.jpg"
    ? tourImg02
    : photo.startsWith('/tour-images/')
      ? `${BASE_URL}${photo}`
      : photo;

  console.log('TourDetails Image Src Attempted:', imageSrc);

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    if (!user) {
      alert('Please sign in');
      return;
    }

    const userHasReviewed = reviews.some((review) => review.username === user.username);
    if (userHasReviewed) {
      alert('You have already reviewed this tour');
      return;
    }

    try {
      const reviewObj = {
        username: user.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      alert('Review submitted successfully');
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <section className="tour-details-section">
      <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && tour && (
          <Row className="align-items-start">
            <Col lg="8" className="tour-content-col">
              <div className="tour__content">
                <div className="tour-image-container">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="tour-image"
                    onError={(e) => {
                      console.log(`Image failed to load for "${title}":`, imageSrc);
                      e.target.src = '/default-tour.jpg';
                    }}
                  />
                </div>
                <div className="tour__info">
                  <h2 className="tour-title">{title}</h2>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                      {avgRating || 'Not rated'} ({reviews.length})
                    </span>
                    <span className="tour-location">
                      <i className="ri-map-pin-fill"></i> {address}
                    </span>
                  </div>
                  <div className="tour__extra-details d-flex flex-wrap gap-3 mt-2">
                    <span><i className="ri-map-pin-2-line"></i> {city}</span>
                    <span><i className="ri-money-dollar-circle-line"></i> ${price}/ per person</span>
                    <span><i className="ri-map-pin-time-line"></i> {distance} k/m</span>
                    <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                  </div>
                  <h5 className="mt-4">Description</h5>
                  <p className="tour-description">{desc}</p>
                </div>
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <span
                          key={rating}
                          onClick={() => setTourRating(rating)}
                          className="rating-star"
                        >
                          <i
                            className={tourRating >= rating ? 'ri-star-fill' : 'ri-star-line'}
                            style={{ color: 'var(--secondary-color)' }}
                          ></i>
                        </span>
                      ))}
                    </div>
                    <div className="review__input d-flex gap-2">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                        className="form-control"
                      />
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews mt-3">
                    {reviews?.map((review, index) => (
                      <div className="review__item d-flex align-items-start gap-3" key={index}>
                        <img src={avatar} alt="" className="review-avatar" />
                        <div className="review-content w-100">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h5 className="review-username">{review.username}</h5>
                              <p className="review-date">
                                {new Date(review.createdAt).toLocaleDateString('en-US', options)}
                              </p>
                            </div>
                            <span className="review-rating d-flex align-items-center">
                              {[...Array(Math.round(review.rating))].map((_, i) => (
                                <i
                                  key={i}
                                  className="ri-star-fill"
                                  style={{ color: 'var(--secondary-color)' }}
                                ></i>
                              ))}
                            </span>
                          </div>
                          <h6 className="review-text">{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4" className="booking-col">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        )}
      </Container>
      <Newsletter />
    </section>
  );
};

export default TourDetails;