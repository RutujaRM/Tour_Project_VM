import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';

import './tourcard.css';


const TourCard = ({ tour }) => {
    //Fetching this variables from tour.js file
    const { id, title, city, photo, price, featured, reviews } = tour

    const { totalRating, avgRating } = calculateAvgRating(reviews)


    return (
        <div className='tour__card'>
            <Card>
                <div className='tour__img'>
                    <img src={photo} alt="tour-image not found" srcset="" />

                    {featured && <span>Featured</span>}
                </div>

                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">

                        <span className="tour__location d-flex align-items-center gap-1">
                            <i class="ri-map-pin-fill"></i>{city}
                        </span>

                        <span className="tour__rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? (
                                'Not rated') : (
                                <span> ({reviews.length}) </span>
                            )}

                        </span>
                    </div>

                    <h5 className="tour__title"> <Link to={`/tours/${id}`}>{title}</Link></h5>

                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5> ${price} <span>/per person</span> </h5>
                        <button className="booking__btn btn">
                            <Link to={`/tours/${id}`}>Book Now</Link>
                        </button>
                    </div>
                </CardBody>

            </Card>


        </div>
    )
}

export default TourCard