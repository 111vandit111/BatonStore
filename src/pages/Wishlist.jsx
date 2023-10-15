import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { WishContext } from "../contexts/WishContext";

const Wishlist = () => {
  const { wish, emptyWish } = useContext(WishContext);
  return (
    <div className=" min-h-[80vh]">
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {wish.map((product) => {
              return (
                <Product key={product.id} product={product} fromHome={false} />
              );
            })}
          </div>
        </div>
      </section>
      <div className="w-full m-auto">
        {wish.length < 1 ? (
          <div className=" w-fit m-auto"> No item In WishList </div>
        ) : (
          <div className="w-full flex mb-5">
            <button
              className="bg-primary py-4 px-8 text-white m-auto"
              onClick={() => emptyWish()}
            >
              Empty List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
