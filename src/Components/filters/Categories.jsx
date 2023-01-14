import React from "react";

import filters from "./filters.css";

const Categories = React.memo(function Categories({
  activeCategory,
  categories,
  onClickCategory,
}) {
  return (
    <nav className="sidebar-filter">
      <ul className="sidebar-filter__list">
        {/* <li
          className={
            activeCategory === null
              ? "sidebar-filter__title __active"
              : "sidebar-filter__title"
          }
          onClick={() => onClickCategory(null)}
        >
          Пиво
        </li> */}
        {categories &&
          categories.map((name, index) => (
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
