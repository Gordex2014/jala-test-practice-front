import React, { useContext } from "react";
import { Redirect } from "react-router";

import { RestaurantContext } from "../store/restaurant-context";
import { NoItemsInCart } from "./NoItemsInCart";

export const Cart: React.FC = () => {
  const {
    cart,
    hasOrdered,
    removeItemFromCart,
    changeOrderStatus,
  } = useContext(RestaurantContext);

  const handleItemDelete = (_0: React.MouseEvent, uid: string) => {
    removeItemFromCart(uid);
  };

  if (hasOrdered) {
    return <Redirect to="/rate" />;
  }
  if (cart.length === 0) {
    return <NoItemsInCart />;
  }
  return (
    <React.Fragment>
      {cart.map((product) => {
        return (
          <div className="card" key={product.uid}>
            <div className="card-body my-4">
              <h5 className="card-title">{product.name}</h5>
              <div className="row">
                <div className="col-8">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    height="130px"
                  />
                </div>
                <div className="col-4">
                  <p className="card-text">Quantity: {product.quantity}</p>
                  <p className="card-text">
                    Total: {product.price * product.quantity}
                  </p>
                  <button
                    onClick={(event) => handleItemDelete(event, product.uid)}
                    className="btn btn-outline-danger"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="row">
        <div className="offset-3 my-3">
          <button
            onClick={changeOrderStatus}
            className="btn btn-outline-success"
          >
            Complete order
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
