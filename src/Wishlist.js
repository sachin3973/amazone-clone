import React from "react";
import "./Wishlist.css";
import { useStateValue } from "./StateProvider";
import WishlistProduct from "./WishlistProduct";
import FlipMove from "react-flip-move";

const Wishlist = () => {
  const [{ basket, user, wishlist }, dispatch] = useStateValue();
  return (
    <div className="wishlist">
      <img
        className="wishlist__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />

      <div>
        <h3>Hello, {user?.email || `Guest`}</h3>
        <h2 className="wishlist__title">Your Wishlist</h2>
        <FlipMove>
          {wishlist?.map((item) => {
            return (
              <WishlistProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </FlipMove>
      </div>
    </div>
  );
};

export default Wishlist;
