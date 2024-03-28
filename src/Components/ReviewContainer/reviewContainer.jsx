import React from 'react'
import './reviewContainer.css';
import { testReview } from '../../Data/data';
import StarContainer from '../StarContainer/starContainer';
import review from '../../Assets/review.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewContainer = () => {

    const reviewDisplay = testReview.map(rvw => <div className="reviews">
        <div className="headerCircle">
            <img src={review} alt="review" className="reviewImg" />
        </div>
        <div className="ratingBody">
            <p className="text">{rvw.comment}</p>
            <div className="starContainer">
                <StarContainer star={rvw.rating} />
            </div>
            <div className="userContainer">
                <p className="user">{rvw.name}</p>
            </div>
        </div>
    </div>)

    return (
        <div className="reviewContainer">
            <Carousel>
                {reviewDisplay}
            </Carousel>
        </div>
    )
}

export default ReviewContainer;
