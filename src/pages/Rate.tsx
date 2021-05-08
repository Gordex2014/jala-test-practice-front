import React, { useContext } from "react";
import { Redirect } from "react-router";
import { RateCard } from "../components/RateCard";

import { RestaurantContext } from "../store/restaurant-context";

export const Rate: React.FC = () => {
  const { cart, hasOrdered } = useContext(RestaurantContext);

  if (!hasOrdered) {
    return <Redirect to="/" />;
  }
  return (
    <React.Fragment>
      {cart.map((product) => {
        return (
          <RateCard
            key={product.uid}
            name={product.name}
            uid={product.uid}
            imageUrl={product.imageUrl}
          />
        );
      })}
    </React.Fragment>
  );
};
