import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { WishContext } from "../contexts/WishContext";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
const Product = ({ product, fromHome }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);
  const { removeFromWish } = useContext(WishContext);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center">
          <div className="w-[200px] mx-aut0 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        <div className="absolute top-3 -right-11 group-hover:right-3 flex flex-col gap-6 p-2 opacity-0 group-hover:opacity-100 transition-all duration-600">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center bg-red-500 text-white w-12 h-12 border-[1px] border-black">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="flex justify-center items-center bg-white w-12 h-12 border-[1px] border-black"
          >
            <BsEyeFill />
          </Link>
          {!fromHome && (
            <button onClick={() => removeFromWish(id)}>
              <div className="flex justify-center items-center bg-red-500 text-white w-12 h-12 border-[1px] border-black">
                <MdDeleteForever className="text-3xl" />
              </div>
            </button>
          )}
        </div>
      </div>

      <div className="text-black">
        <div className="text-sm capitalize text-gray-500 mb-1"> {category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <div className="">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
