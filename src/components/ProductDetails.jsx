import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../axios';

export default function ProductDetails() {

  const [prodDetails, setProdDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setProdDetails(res);
        console.log(res.data.id);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);
  
  return (
    <>
      {console.log(prodDetails)}
      {prodDetails ? (
        <div className="container">
          <div className="row w-75 mx-auto">
            <h1>{prodDetails?.data?.title}</h1>
            <h3>Price : {prodDetails?.data?.price }$</h3>
            {prodDetails?.data?.images.map((imge,index)=>(
                <img key={index} src={[imge]} alt='hee' className='w-75 h-75'/>
                
            ))}
            
            <div className="col-4">
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading ...</h3>
      )}
    </>
  );
}
  