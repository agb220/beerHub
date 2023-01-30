import { indexOf } from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Products } from "../../redux/slices/productsSlice";
import { RootState } from "../../redux/store";

type FiltersProps = {
  label: string;
  onSelectedType: (type: string) => void;
};

const Filters: React.FC<FiltersProps> = ({ onSelectedType }) => {
  const types = useSelector((state: RootState) => {
    const types = state.productsSlice.products.map((item) => item.type);
    return types.filter((item, index) => types.indexOf(item) === index);
  });

  const [selectedType, setSelectedType] = useState(false);

  const handleOnChange = () => {
    setSelectedType(!selectedType);
    console.log("selectedType", selectedType);
  };

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
                onClick={() => onSelectedType(type)}
                checked={selectedType}
                onChange={handleOnChange}
              />
              {type}
            </label>
          ))}
      </div>
    </div>
  );
};

export default Filters;
