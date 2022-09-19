import React from 'react'
import "../styles/footer.css"
export function Footer () {
  return (<>
 
    <div className="container " >
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
        <div className="row">
        <div className="col-6 col-lg-3">
    <h4>Products</h4>
    <ul className="list-unstyled">
      <li>Biozyme Performance Whey</li>
      <li>Fuel One Whey Protein</li>
      <li>High Protein Muesli</li>
      <li>Creatine</li>
      </ul></div>
      
   <div className="col-6 col-lg-3">
    <h4>Categories</h4>
    <ul className="list-unstyled">
      <li> Proteins</li>
      <li>Gainers</li>
      <li>Fit Foods</li>
      <li>Pre/Post Workout</li>
      </ul></div>
     
   {/* <div className="col-6 col-lg-3">
    <h4>Contact Us</h4>
    <ul className="list-unstyled">
      <li>Biozyme Performance Whey</li>
      <li>Fuel One Whey Protein</li>
      <li>High Protein Muesli</li>
      <li>Creatine</li> */}
    {/* </ul>
   </div> */}
   </div>
    <hr className='line'/>
   <div className="mt-5">
    <p className="main-hero-para text-center w-100">&copy; ALL Rights Reserved | All products manufactured are FSSAI approved</p>
   </div> 
           
        </div>
      </div>
    </div>

 
   
   </>
  );
};





