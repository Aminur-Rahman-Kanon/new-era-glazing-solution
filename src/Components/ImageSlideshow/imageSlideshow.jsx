import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import './imageSlideshow.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const ImageSlideshow = ({ img }) => {
    if (!img) return;

    const imgs = img.map((i, idx) => <CCarouselItem key={idx}>
        <CImage className='d-block w-100' src={i}/>
    </CCarouselItem>)

    return (
        <div className='carousel-wrapper'>
            <CCarousel controls transition='crossfade'>
                {imgs}
            </CCarousel>
        </div>
    )
}

export default ImageSlideshow;
