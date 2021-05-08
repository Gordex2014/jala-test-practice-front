import React, { useEffect, useState } from "react";

import { Product } from "../models/products.models";
import { FoodCard } from "../components/FoodCard";

export const Menu: React.FC = () => {
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL!}/products`
      );
      const JSONResponse = await response.json();
      if (JSONResponse.body) {
        setFetchedProducts(JSONResponse.body);
      } else {
        setFetchedProducts([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {fetchedProducts.map((product) => {
          return (
            <FoodCard
              key={product.uid}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              typeOfFood={product.typeOfFood}
              ratesAverage={product.ratesAverage}
              description={product.description}
              uid={product.uid}
            />
          );
        })}
      </div>
    </div>
  );
};
