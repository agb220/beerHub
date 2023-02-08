import React, { useState } from "react";

import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

type BrandsProps = {
  // label: string;
  onSelectedBrand: (brand: string) => void;
};

const Brands: React.FC<BrandsProps> = ({ onSelectedBrand }) => {
  const brands = useSelector((state: RootState) => {
    const brands = state.productsSlice.products.map((item) => item.brand);
    return brands.filter((item, index) => brands.indexOf(item) === index);
  });
  const [checked, setChecked] = useState(false);

  const handleSelectedBrand = () => {
    setChecked(!checked);
    console.log("work selectedType", checked);
  };

  return (
    <div className="sidebar-filter__items">
      {brands &&
        brands.map((brand, index) => (
          <div className="sidebar-filter__item" key={brand + index.toString()}>
            <label className="sidebar-filter__label" htmlFor={brand}>
              <input
                className="sidebar-filter__checkbox"
                type="checkbox"
                name={brand}
                checked={checked}
                onClick={() => onSelectedBrand(brand)}
                //value={brand}
                onChange={handleSelectedBrand}
              />
              {brand}
            </label>
          </div>
        ))}
    </div>
  );
};

export default Brands;
function useCallback(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
