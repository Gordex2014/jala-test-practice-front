import React, { useState } from "react";

import { CartProduct } from "../models/products.models";

export type RestaurantContextTypes = {
  cart: CartProduct[];
  hasOrdered: boolean;
  addItemToCart: (item: CartProduct) => void;
  removeItemFromCart: (itemId: string) => void;
  addQuantityToProduct: (itemId: string, quantity: number) => void;
  changeOrderStatus: () => void;
};

export const RestaurantContext = React.createContext<RestaurantContextTypes>({
  cart: [],
  hasOrdered: false,
  addItemToCart: () => {},
  addQuantityToProduct: () => {},
  removeItemFromCart: () => {},
  changeOrderStatus: () => {},
});

export const RestaurantContextProvider: React.FC = (props) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [hasOrdered, setHasOrdered] = useState(false);

  const addItemToCartHandler = (item: CartProduct) => {
    setCart((prevState) => {
      return prevState.concat(item);
    });
  };

  const addQuantityToCartProduct = (uid: string, quantity: number) => {
    const productToUpdate = cart.filter((product) => {
      return product.uid === uid;
    });
    productToUpdate[0].quantity += quantity;
    const cartWithoutUpdate = cart.filter((product) => {
      return product.uid !== uid;
    });
    setCart(cartWithoutUpdate.concat(productToUpdate));
  };

  const removeItemToCartHandler = (itemId: string) => {
    setCart((prevState) => {
      return prevState.filter((item) => {
        return item.uid !== itemId;
      });
    });
  };

  const changeOrderStatusHandler = () => {
    setHasOrdered(true);
  };

  const restaurantProvidedValue = {
    cart,
    hasOrdered,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemToCartHandler,
    changeOrderStatus: changeOrderStatusHandler,
    addQuantityToProduct: addQuantityToCartProduct,
  };

  return (
    <RestaurantContext.Provider value={restaurantProvidedValue}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
