import React from 'react'
import './reviewContainer.css';
import { testReview } from '../../Data/data';
import StarContainer from '../StarContainer/starContainer';
import user from '../../Assets/user.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewContainer = () => {

    const reviewDisplay = testReview.map(rvw => <div className="reviews">
        <div className="avatar-container">
            <img src={user} alt="user" className="avatar-img" />
        </div>
        <div className="ratingBody">
            <div className="userContainer">
                <p className="user">{rvw.name}</p>
            </div>
            <div className="star-container">
                <StarContainer star={rvw.rating} />
            </div>
            <p className="text">{rvw.comment}</p>
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
