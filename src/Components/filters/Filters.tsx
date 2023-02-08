import React from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../redux/store";

import { setSelectedType } from "../../redux/slices/filterSlice";

type FiltersProps = {
  // label: string;
  onSelectedType: (index: number) => void;
  // isChecked: boolean;
  // handleOnChange: (selected: boolean) => void;
  types: string[];
  onChange?: (selectedType: boolean) => void;
};

const Filters: React.FC<FiltersProps> = ({
  onSelectedType,
  // isChecked,
  // handleOnChange,
  types,
}) => {
  const dispatch = useAppDispatch();
  const { selectedType } = useSelector((state: RootState) => state.filterSlice);
  // const types = useSelector((state: RootState) => {
  //   const types = state.productsSlice.products.map((item) => item.type);
  //   return types.filter((item, index) => types.indexOf(item) === index);
  // });

  const handleSelectedType = () => {
    dispatch(setSelectedType(!selectedType));
    console.log("work selectedType", selectedType);
  };

  return (
    <div>
      <div className="sidebar-filter__items">
        {types &&
          types.map((type, index) => (
            <div className="sidebar-filter__item" key={type + index.toString()}>
              <label className="sidebar-filter__label" htmlFor={type}>
                <input
                  className="sidebar-filter__checkbox"
                  type="checkbox"
                  name={type}
                  onClick={() => onSelectedType(index)}
                  checked={selectedType}
                  onChange={handleSelectedType}
                  // value={type}
                />
                {type}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filters;
