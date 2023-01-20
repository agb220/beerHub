import React from "react";

import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

import "./filters.css";

type CategoriesProps = {
  activeCategory: number;
  categories: string[];
  onClickCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(function Categories({
  activeCategory,
  categories,
  onClickCategory,
}) {
  // useWhyDidYouUpdate("Categories", {
  //   activeCategory,
  //   categories,
  //   onClickCategory,
  // });

  return (
    <nav className="sidebar-filter">
      <ul className="sidebar-filter__list">
        {categories &&
          categories.map((name: string, index: number) => (
            <li
              className={
                activeCategory === index
                  ? "sidebar-filter__item __active"
                  : name === "SALE!"
                  ? "sidebar-filter__item __red"
                  : "sidebar-filter__item"
              }
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </nav>
  );
});

export default Categories;
