import React from "react";

import emptyCar from "../assets/images/empty-car.png";

export const NoItemsInCart: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-5">
          <img src={emptyCar} alt="No items in cart" />
        </div>
      </div>
    </div>
  );
};
