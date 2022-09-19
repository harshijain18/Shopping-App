import axios from "axios";
import React from "react";
// import axios from 'axios';
import { useEffect, useState } from "react";
import { ActionAreaCard } from "../../shared/widgets/Card";
import "../../shared/styles/product.css";

export function Products(props) {
  const [trending, setTrending] = useState([]);
  const ProductsData = () => {
    // const promise = API_CLIENT.get("http://localhost:5000/api/product/");
    // promise.then(result=>{
    //     console.log(result);
    //     // setProducts(result.data)
    // }).catch(err=> console.log(err))
    axios
      .get("http://localhost:5000/api/product/")
      .then((res) => {
        // console.log(res.data);
        setTrending(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ProductsData();
  });

  return (
    <>
      <h2 className="row_title">{props.title}</h2>

      <div className="row">
        {trending?.map((tr) => (
          <>
            <ActionAreaCard tr={tr} />
          </>
        ))}
      </div>
      {/* <div className="row">
      <h2>{props.title}</h2>
      <br></br>
      <div className="row_posters">
      {trending?.map(tr=>
                    <>
                        <ActionAreaCard tr={tr}/>

                    </>)}
                     
          
    
      </div>
    </div>  */}
    </>
  );
}
