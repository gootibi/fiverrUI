import React from 'react'
import './Slide.scss'
import Slider from 'infinite-react-carousel'; // https://www.npmjs.com/package/infinite-react-carousel - infinite-react-carousel


const Slide = ({children, slidesToShow, arrowsScroll}) => {
    return (
        <div className='slide'>
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

export default Slide