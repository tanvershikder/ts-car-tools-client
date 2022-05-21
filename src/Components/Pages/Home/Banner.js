import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wrenches-set-in-the-workshop-royalty-free-image-1625006357.jpg" className="w-full"/> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.industrybuying.com/wp-content/uploads/2016/12/car-tool-kit-640x300.jpg" className="w-full"/> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://st2.depositphotos.com/3765753/6935/i/950/depositphotos_69357071-stock-photo-different-car-repair-tools-set.jpg" className="w-full"/> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;