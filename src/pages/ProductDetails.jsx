import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { WishContext } from "../contexts/WishContext";
import { useParams } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { removeFromWish, addToWish, wish } = useContext(WishContext);
  const chkWish = wish.find((item) => {
    return item.id === parseInt(id);
  });
  const [inWish, setInWish] = useState(chkWish);

  console.log(wish);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product)
    return (
      <section className="h-screen flex justify-center items-center">
        Loading....
      </section>
    );

  const { title, description, price, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center min-h-[900px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto">
              {title}
            </h1>
            <div className="text-xl text-gray-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <div className="flex gap-8 items-center justify-center lg:justify-start">
              <button
                className="bg-primary py-4 px-8 text-white"
                onClick={() => addToCart(product, product.id)}
              >
                Add to Cart
              </button>
              {!inWish ? (
                <button
                  className=" text-black text-3xl"
                  onClick={() => {
                    addToWish(product);
                    setInWish(product.id);
                  }}
                >
                  <AiOutlineHeart />
                </button>
              ) : (
                <button
                  className="text-red-500 text-3xl"
                  onClick={() => {
                    removeFromWish(product.id);
                    setInWish(null);
                  }}
                >
                  {" "}
                  <AiFillHeart />{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
