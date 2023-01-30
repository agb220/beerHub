import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

type FiltersProps = {
  label: string;
  onSelectedType: (index: number) => void;
  isChecked: boolean;
  handleOnChange: (selected: boolean) => void;
  types: string[];
};

const Filters: React.FC<FiltersProps> = ({
  onSelectedType,
  isChecked,
  handleOnChange,
  types,
}) => {
  // const types = useSelector((state: RootState) => {
  //   const types = state.productsSlice.products.map((item) => item.type);
  //   return types.filter((item, index) => types.indexOf(item) === index);
  // });

  return (
    <div>
      <div className="sidebar-filter__items">
        {types &&
          types.map((type, index) => (
            <label
              className="sidebar-filter__label"
              htmlFor="categories"
              key={type + index.toString()}
            >
              <input
                className="sidebar-filter__checkbox"
                type="checkbox"
                name="categories"
                onClick={() => onSelectedType(index)}
                checked={isChecked}
                onChange={(selected) => handleOnChange(true)}
                value={type}
              />
              {type}
            </label>
          ))}
      </div>
    </div>
  );
};

export default Filters;
