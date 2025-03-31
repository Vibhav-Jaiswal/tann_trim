import React from "react";

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { name: "Men's Clothing", value: "men's clothing" },
    { name: "Women's Clothing", value: "women's clothing" },
    { name: "Jewelry", value: "jewelery" },
    { name: "Electronics", value: "electronics" },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-8 py-6 flex-wrap sticky md:top-14 lg:top-16 bg-black md:z-50">
      <button
        onClick={() => setSelectedCategory("all")}
        className={`text-sm px-4 py-2 rounded-md ${
          selectedCategory === "all" ? "bg-white text-black" : ""
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => setSelectedCategory(category.value)}
          className={`text-sm px-4 py-2 rounded-md outline-none ${
            selectedCategory === category.value
              ? "bg-white text-black"
              : ""
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
