import React from "react";

function Brands() {
  return (
    <div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Лагери
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          IPA/APA
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Stout/Porter
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Sour/Gose
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Пшеничне
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Бельгійське міцне
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Барлівайн
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Інше
        </label>
      </div>
      <div className="sidebar-filter__item">
        <label className="sidebar-filter__label" htmlFor="categories">
          <input
            className="sidebar-filter__checkbox"
            type="checkbox"
            name="categories"
          />
          Безалкогольне
        </label>
      </div>
    </div>
  );
}

export default Brands;
