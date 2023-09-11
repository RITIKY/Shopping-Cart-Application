import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import "./products.css";
import data from "../../database.json";

const Products = ({ addtocart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [quantityvalue, setquantityvalue] = useState(null);
  const [editingId, setEditingId] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(data?.products);
  });
  const resetInput = () => {
    setEditingId(null);
  };

  const getAvailableQty = (product) => {
    if (cartItems == null || cartItems.length === 0) {
      return product.rating.count;
    }

    const storeItem = cartItems.filter((item) => item.id === product.id);
    if (storeItem.length > 0) {
      return product.rating.count - storeItem[0].cartQuantity;
    } else {
      return product.rating.count;
    }
  };
  return (
    <div className="wrapper">
      <div className="products-container">
        {product?.map((current) => {
          return (
            <div className="content">
              <div className="p-image">
                <img src={current.image} width={40} height={40}></img>
              </div>
              <div className="info">
                <h5 className="desp">{current.title} </h5>
                <h5>Price: {current.price} </h5>
                <h5>Available Quantity: {getAvailableQty(current)}</h5>
                <h7>Rating : {current.rating.rate}</h7>
              </div>
              <div className="btn">
                <input
                  type="number"
                  placeholder="Qty"
                  min={1}
                  className="imp"
                  id={current.id}
                  value={editingId == current.id ? quantityvalue : ""}
                  onChange={(e) => {
                    setquantityvalue(e.target.value);
                    setEditingId(e.target.id);
                  }}
                />
                <button
                  onClick={() => {
                    if (quantityvalue) {
                      addtocart(current);
                      dispatch(add({ current, quantityvalue }));
                      resetInput();
                    }
                  }}
                  data-testid="cartButton"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
