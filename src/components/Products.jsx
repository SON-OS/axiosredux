import React, { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../axios";
import { useDispatch } from "react-redux";
import Card from "./Card";

export default function Products() {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");
  const [prodList, setProdList] = useState([]);




  let handleChange=(e)=>{
    setSearchVal(e.target.value)
  }


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    searchProd();
  }, [searchVal]);

 
  const searchProd = () => {
    axiosInstance
      .get(`/products/search?q=${searchVal}`)
      .then((response) => {
        setProdList(response.data.products);
        // console.log(response.data.products)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const getProducts = () => {
    axiosInstance
      .get(`/products`)
      .then((res) => {
        // console.log(res.data);
        setProdList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
        
      });
// const hadlerfavourite=(e,prod)=> {
//   // dispatch ({type:''})
// }

  };
  return (
    <>
      <h3 className="text-info">Search</h3>

      {/* {console.log(searchVal)} */}
      <input type="text" className="p-2 m-5" placeholder="Search here .." onChange={handleChange} />
      <div className="container d-flex">
        <div className="row justify-content-center align-items-center">
          {/* {console.log(prodList)} */}
          {/* {console.log(searchVal)} */}
          {prodList
            ? prodList.map((prod) => (
                <Card
                  key={prod.id}
                  description={prod.description}
                  title={prod.title}
                  thumbnail={prod.thumbnail}
                  id={prod.id}
                />
              ))
            : "Loading ...."}
        </div>
      </div>
    </>
  );
}
