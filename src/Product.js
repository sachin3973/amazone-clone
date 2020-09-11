import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket, wishlist }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch some action into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const addToWishList = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  console.log(addToBasket);

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <div className="product__buttons">
        <button onClick={addToBasket}>Add to Basket</button>
        <FavoriteBorderIcon
          onClick={addToWishList}
          className="product__wishlist"
        />
      </div>
    </div>
  );
};

export default Product;
