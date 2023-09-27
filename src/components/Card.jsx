import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


// const Card= ({ }) => {
//   const dispatch = useDispatch();

// const hadlerfavourite = () => {
//   dispatch(hadlerfavourite());
// };
// }

// const Card=({,hadlerfavourite})=>{
  
export default function Card(props) {
  const state = useSelector((state) => state);
  console.log (state)
  return (
    <div className="col-3">
      <div className="card " >
        <img className="card-img-top" src={props.thumbnail} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <Link to={`/productdetails/${props.id}`} className="btn btn-primary">
            Go somewhere
          </Link>
          <button onClick={(e)=>props.hadlerfavourite(e.prod)} > fav</button>
        </div>
      </div>
    </div>
  );
}
