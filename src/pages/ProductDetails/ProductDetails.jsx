import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { name, brandName, price, shortDescription, photo, rating } =
    product;
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  return (
    <div className="my-16 container mx-auto px-4 md:px-32">
      <div className="card lg:card-side bg-base-300 shadow-sm rounded-none p-10">
        <figure className="w-1/2 p-10">
          <img className="w-full" src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <div>
          <h2 className="card-title font-rancho text-2xl font-bold p-5">{name}</h2>
          <p className="pl-5 font-raleway text-yellow-500">Rating {rating} out of 5</p>
          </div>
          <div className="pl-5 mt-5">
          <p className="font-rancho font-bold text-2xl mb-2">£{price}</p>
          <p className="font-raleway">Brand: {brandName}</p>
          </div>
          <div className="pl-5 mb-10">
          <p className="font-raleway text-xl text-gray-400">{shortDescription}</p>
          </div>
          <div className="card-actions justify-center w-1/2 flex">
            <button className="btn btn-info w-full">Add to card</button>
            <button className="btn btn-info w-full">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
