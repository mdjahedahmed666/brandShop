import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCategory = () => {
  const [category, setCategory] = useState([]);
  const { brandName } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products/${brandName}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [brandName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three images at a time
    slidesToScroll: 1,
  };

  return (
    <div>
       <div className="flex justify-center">
      <Slider className="h-full w-3/4" {...sliderSettings}>
          {category.map((product, index) => (
            <div key={index} className="w-full h-40 md:h-96">
              <img src={product.photo} className="w-full h-full" alt={`Product ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto px-4 md:px-32 mt-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductCategory;
