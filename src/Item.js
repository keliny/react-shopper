import React from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ item, onAddToCart }) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-image" />
      <div className="Item-title">{item.name}</div>
      <div className="Item-right">
        <div className="Item-price">${item.price}</div>
        <button className="Item-addToCart" onClick={onAddToCart}>
          Add to cart.
        </button>
      </div>
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Item;
