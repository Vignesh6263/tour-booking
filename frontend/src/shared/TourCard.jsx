import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './tour-card.css';
import calculateAvgRating from '../utils/avgRating';
import { BASE_URL } from '../utils/config';
import tourImg02 from '../assets/images/tour-img02.jpg'; // Import directly

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured, reviews, distance } = tour;

  // Use imported image if photo matches the local path, otherwise handle as before
  const imageSrc = photo === "C:\\Users\\Windows 11\\Desktop\\Project\\frontend\\src\\assets\\images\\tour-img02.jpg" 
    ? tourImg02 
    : photo.startsWith('/tour-images/') 
      ? `${BASE_URL}${photo}` 
      : photo;

  console.log('TourCard Image Src Attempted:', imageSrc);

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className='tour__card'>
      <Card>
        <div className="tour__img">
          <img
            src={imageSrc}
            alt={title}
            onError={(e) => {
              console.log(`Image failed to load for "${title}":`, imageSrc);
              e.target.src = '/default-tour.jpg';
            }}
          />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className='ri-map-pin-line'></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className='ri-star-fill'></i> {avgRating === 0 ? null : totalRating || 5}
              {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length || 5})</span>)}
            </span>
          </div>
          <h5 className='tour__title'><Link to={`/tours/${_id}`}>{title}</Link></h5>
          <h5 className='tour__title' style={{ color: "red" }}>{distance} k/m <span>Distance</span></h5>
          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price} <span>/per person</span></h5>
            <Link to={`/tours/${_id}`}>
              <button className='booking__btn'>Book Now</button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;