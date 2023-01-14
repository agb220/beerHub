import React from "react";
import { useSelector } from "react-redux";

import Categories from "../Components/filters/Categories";

import sidebar from "./sidebar.css";

function Sidebar() {
  const { category } = useSelector(({ filtersReducer }) => {
    return {
      category: filtersReducer.category,
    };
  });

  return (
    <aside className="sidebar">
      <div className="sidebar-range">
        <div className="range-controls">
          <span>від</span>
          <div className="range-interval">
            <input className="range-interval__input" type="number" />
          </div>
          <span>до</span>
          <div className="range-interval">
            <input className="range-interval__input" type="number" />
          </div>
          <button className="range-btn" type="reset">
            Ok
          </button>
        </div>
        <div className="sidebar-range__block">
          <input className="range" type="range" min="0" max="1000" step="10" />
        </div>
      </div>
      <div className="sidebar-filter __brand">
        <h3 className="sidebar-filter__title __brand">Бренд</h3>
        <div className="sidebar-filter__list __brand">
          <div className="sidebar-filter__item">
            <label className="sidebar-filter__label __brand" htmlFor="brand">
              <input
                className="sidebar-filter__checkbox"
                type="checkbox"
                name="brand"
              />
              Дідько
            </label>
          </div>
          <div className="sidebar-filter__item">
            <label className="sidebar-filter__label __brand" htmlFor="brand">
              <input
                className="sidebar-filter__checkbox"
                type="checkbox"
                name="brand"
              />
              TenMan
            </label>
          </div>
          <div className="sidebar-filter__item">
            <label className="sidebar-filter__label __brand" htmlFor="brand">
              <input
                className="sidebar-filter__checkbox"
                type="checkbox"
                name="brand"
              />
              Hoppy Hog
            </label>
          </div>
          <div className="sidebar-filter__item">
            <label className="sidebar-filter__label __brand" htmlFor="brand">
              <input
                className="sidebar-filter__checkbox"
                type="checkbox"
                name="brand"
              />
              Varvar
            </label>
          </div>
          <div className="sidebar-filter__item">
            <label className="sidebar-filter__label __brand" htmlFor="brand">
              <input
                className="sidebar-filter__checkbox"
                type="checkbox"
                name="brand"
              />
              But Beer
            </label>
          </div>
        </div>
      </div>
      <label className="sidebar-filter__label __red" htmlFor="other">
        <input
          className="sidebar-filter__checkbox"
          type="checkbox"
          name="other"
        />
        !!!lactose-free
      </label>
    </aside>
  );
}

export default Sidebar;
