import React from "react";
import { FaRegBookmark, FaShoppingBag } from "react-icons/fa";

const Products = ({ products, selectedCategory }) => {
  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-lg font-semibold text-center md:text-left">
        Products - {selectedCategory}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="py-10 px-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-contain"
                />
                <button className="absolute top-4 right-4 text-gray-600 text-xl">
                  <FaRegBookmark />
                </button>
              </div>
              <div className="px-4 py-6 bg-gray-700 text-white">
                <p className="font-medium truncate mb-4">{product.title}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold">
                      ₹ {Math.round(product.price * 0.5)}
                    </span>
                    <span className="line-through text-gray-500">
                      ₹ {product.price}
                    </span>
                    <span className="text-green-600 font-semibold">
                      (50% Off)
                    </span>
                  </div>
                  <button className="text-3xl p-2 rounded-full">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No products found
          </p>
        )}
      </div>
    </section>
  );
};

export default Products;
