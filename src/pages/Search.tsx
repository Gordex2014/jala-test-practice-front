import React, { useState } from "react";
import Swal from "sweetalert2";
import { FoodCard } from "../components/FoodCard";
import { useForm } from "../hooks/useForm";
import { Product } from "../models/products.models";

interface FormData {
  name: string;
  typeOfFood: string;
  description: string;
}

export const Search: React.FC = () => {
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);
  const { formValues, handleInputChange } = useForm<FormData>({
    name: "",
    description: "",
    typeOfFood: "",
  });

  const { name, typeOfFood, description } = formValues;

  const searchProducts = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products?name=${name}&typeOfFood=${typeOfFood}&description=${description}`
      );
      const jsonResponse = await response.json();
      if (jsonResponse.body) {
        setFetchedProducts(jsonResponse.body);
      } else {
        Swal.fire("Error", "Error while fetching data", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Network error", "error");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <form autoComplete="off" onSubmit={searchProducts}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Type of food</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type of food"
              name="typeOfFood"
              value={typeOfFood}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
      <div className="row">
        {fetchedProducts ? (
          fetchedProducts.map((product) => {
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
          })
        ) : (
          <hr />
        )}
      </div>
    </div>
  );
};
