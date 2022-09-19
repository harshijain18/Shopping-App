import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export function Banner() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img5.hkrtcdn.com/21391/bnr_2139064_o.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img7.hkrtcdn.com/21389/bnr_2138846_o.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img5.hkrtcdn.com/21383/bnr_2138244_o.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src="https://img7.hkrtcdn.com/21383/bnr_2138226_o.jpg" alt="Fourth Slide"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100' src="https://img3.hkrtcdn.com/21389/bnr_2138842_o.jpg" alt="Fifth slide"/>
      </Carousel.Item>
    </Carousel>


    </>)
}
