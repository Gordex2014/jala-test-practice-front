import CSS from "csstype";
import React, { useContext, useRef } from "react";
import StarRating from "react-simple-star-rating";
import Swal from "sweetalert2";
import { CartProduct } from "../models/products.models";
import { RestaurantContext } from "../store/restaurant-context";

type FoodCardProps = {
  uid: string;
  description: string;
  imageUrl: string;
  ratesAverage: number;
  name: string;
  price: number;
  typeOfFood: string;
};

const cardStyle: CSS.Properties = {
  width: "18rem",
};

export const FoodCard: React.FC<FoodCardProps> = ({
  imageUrl,
  name,
  price,
  typeOfFood,
  ratesAverage,
  description,
  uid,
}) => {
  const restaurantContext = useContext(RestaurantContext);
  const quantityTextInputRef = useRef<HTMLInputElement>(null);

  const starsClickHandler = () => {};

  const addToCartHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredQuantity = quantityTextInputRef.current!.value;
    if (enteredQuantity.trim().length === 0) {
      return Swal.fire("Error", "Quantity must be filled", "error");
    }
    const prevCart = restaurantContext.cart.filter((product) => {
      return product.uid === uid;
    });
    if (prevCart.length === 0) {
      restaurantContext.addItemToCart(
        new CartProduct(name, uid, Number(enteredQuantity), imageUrl, price)
      );
    } else {
      restaurantContext.addQuantityToProduct(uid, Number(enteredQuantity));
    }
    return Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to your cart",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="col-6">
      <div className="card text-center" style={cardStyle}>
        <img src={imageUrl} height="300px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">{typeOfFood}</h6>
          <p className="card-text">{description}</p>
          <StarRating ratingValue={ratesAverage} onClick={starsClickHandler} />
          <p className="mt-2">Price: {price}</p>
          <form onSubmit={addToCartHandler}>
            <div className="form-group mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Quantity to order"
                ref={quantityTextInputRef}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
