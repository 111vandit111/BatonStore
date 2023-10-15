import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(ProductContext);

  const [sortedProducts, setSortedProducts] = useState(null);
  const [priceRange, setPriceRange] = useState(1000);

  const filteredProducts = sortedProducts
    ? sortedProducts.filter((item) => {
        return item.price >= 0 && item.price <= priceRange;
      })
    : products.filter((item) => {
        return item.price >= 0 && item.price <= priceRange;
      });

  const sortAscending = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const sortDescending = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
  };

  const handlePriceRangeChange = (event) => {
    const range = event.target.value;
    console.log(range);
    setPriceRange(range);
  };

  const resetSort = () => {
    setSortedProducts(null);
    setPriceRange(1000);
  };

  return (
    <div>
      <Hero />
      <div className="text-center mt-8">
        <button
          onClick={sortAscending}
          className="bg-primary py-4 px-3 text-white mr-2"
        >
          Sort Ascending
        </button>
        <button
          onClick={sortDescending}
          className="bg-primary py-4 px-3 text-white mr-2"
        >
          Sort Descending
        </button>
        <button onClick={resetSort} className="bg-primary py-4 px-3 text-white">
          Reset
        </button>
      </div>
      <div className="w-full flex justify-center items-center gap-4 mt-20 mb-4">
        <div className="flex gap-3">
          <span className="text-gray-600 text-xl">0</span>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange}
            onChange={handlePriceRangeChange}
          />
          <span className="text-gray-600 text-xl">1000</span>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product key={product.id} product={product} fromHome={true} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
