import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Products from "../components/Products";
import Carousel from "../components/Carousel";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Carousel />
      <Products
        products={filteredProducts}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Home;
