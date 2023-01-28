import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Products } from "../../redux/slices/productsSlice";
import { RootState } from "../../redux/store";

type FiltersProps = {
  label: string;
  onSelectedType: (type: string) => void;
  activeType: string;
};

const Filters: React.FC<FiltersProps> = ({ onSelectedType, activeType }) => {
  //const { products } = useSelector((state: RootState) => state.productsSlice);
  //const type = products.length !== 0 ? products.type : [];
  //console.log("products", products.type);
  const types = useSelector((state: RootState) => state.productsSlice.products);
  const [selectedType, setSelectedType] = useState(false);
  //console.log("type", type);
  // const productType = useSelector((state: RootState) =>
  //   state.productsSlice.products.find((obj: any) => obj.type === type)
  // );
  // let productType: Products[] = type.filter((el, i, a) => a.indexOf(el) !== i);
  // console.log("productType", productType);

  // const checkedProductType = productType ? productType : type;

  // console.log("productType", productType);
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
                onClick={() => onSelectedType(type.type)}
                checked={selectedType}
                onChange={handleOnChange}
              />
              {type.type}
            </label>
          ))}
      </div>
    </div>
  );
};

export default Filters;
