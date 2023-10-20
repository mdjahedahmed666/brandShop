import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id,name, brandName, type, price, shortDescription, photo, rating } =
    product;
  return (
    <div>
      <div className="bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="items-center text-center">
          <div className="flex justify-around items-center my-4">
            <div>
            <h2 className="card-title">{name}</h2>
            <p>{type}</p>
            </div>
            <p>Rating: {rating}</p>
          </div>
          <hr />
          <p>{shortDescription}</p>
          <div className="flex justify-around items-center my-4">
            <p>£{price}</p>
            <p>{brandName}</p>
          </div>
          <div className="card-actions flex justify-center py-5">
            <button className="btn btn-primary">Update</button>
            <Link to={`/productDetails/${_id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
