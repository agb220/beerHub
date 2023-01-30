import React from "react";
import { useCallback, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import qs from "qs";

import { RootState, useAppDispatch } from "../redux/store";
import {
  setCurrentPage,
  setCategoryIndex,
  setFilters,
  setType,
  setSelectedType,
} from "../redux/slices/filterSlice";
import { fetchProducts } from "../redux/slices/productsSlice";
import { addProductToCart, CartProduct } from "../redux/slices/cartSlice";

import Product from "../Components/product/Product";
import Categories from "../Components/filters/Categories";
import Filters from "../Components/filters/Filters";
import Range from "../Components/filters/Range";
import Brands from "../Components/filters/Brands";
import LoaderBlock from "../Components/product/LoaderBlock";
import Pagination from "../Components/pagination/Pagination";

import "./main.css";

const categoryNames = ["Пиво", "На розлив", "В пляшці", "Колекції", "SALE!"];
const typeNames = [
  "IPA/APA",
  "Stout/Porter",
  "Інше",
  "Безалкогольне",
  "Барлівайн",
  "Пшеничне",
  "Бельгійське міцне",
  "Sour/Gose",
  "Лагери",
];

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const { categoryIndex, currentPage, searchValue, type, selectedType } =
    useSelector((state: RootState) => state.filterSlice);
  const { products, status } = useSelector(
    (state: RootState) => state.productsSlice
  );

  const OnSelectCategory = useCallback((index: number) => {
    dispatch(setCategoryIndex(index));
  }, []);

  const OnSelectType = useCallback((index: number) => {
    dispatch(setType(index));
    console.log("select index", index);
  }, []);

  const handleSelectedType = useCallback((selected: boolean) => {
    dispatch(setSelectedType(!selected));
    console.log("work selectedType", !selected);
  }, []);

  const handleAddProductToCart = (obj: CartProduct) => {
    dispatch(addProductToCart(obj));
    //console.log("work");
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getProducts = async () => {
    const search = searchValue ? `search=${searchValue}` : "";
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
    const typeSelected = type !== null ? `type=${type}` : "";

    dispatch(fetchProducts({ search, category, currentPage, typeSelected }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (
      isMounted.current &&
      (categoryIndex > 0 || currentPage > 0 || type !== null)
    ) {
      const queryString = qs.stringify({
        categoryIndex,
        currentPage,
        type,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [currentPage, categoryIndex, type]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
          searchValue: "",
          categoryIndex: 0,
          currentPage: 1,
          type,
          selectedType: false,
        })
      );
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [categoryIndex, searchValue, currentPage, type]);

  //console.log(OnSelectCategory);

  return (
    <main className="main">
      <div className="main-content _container">
        <aside className="main-content__sidebar">
          <Categories
            activeCategory={categoryIndex}
            onClickCategory={OnSelectCategory}
            categories={categoryNames}
          />
          <div className="sidebar-filter __filters">
            <div className="sidebar-filter">
              <h3 className="sidebar-filter__title">Категорії</h3>
              <Filters
                label={""}
                types={typeNames}
                onSelectedType={OnSelectType}
                isChecked={selectedType}
                handleOnChange={handleSelectedType}
              />
            </div>
          </div>
          <div className="sidebar-range__title">Міцність</div>
          <Range />
          <div className="sidebar-range__title">Ціна</div>
          <Range />
          <div className="sidebar-filter __filters">
            <div className="sidebar-filter">
              <h3 className="sidebar-filter__title">Бренд</h3>
              <Brands />
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
        <div className="main-content__page">
          {status === "error" ? (
            <div className="products-block __error">
              <h2> Упс.... щось пішло не так...</h2>
              <p>Спробуйте, будь ласка, пізніше.</p>
            </div>
          ) : (
            <div className="products-block">
              {status === "loading"
                ? Array(10)
                    .fill(0)
                    .map((_, index) => <LoaderBlock key={index} />)
                : products
                    .filter((obj: any) => {
                      if (
                        obj.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((obj: any) => (
                      <Product
                        onClickAddProduct={handleAddProductToCart}
                        key={obj.id}
                        products={products}
                        // isLoading={true}
                        addedCount={products[obj.id] && products[obj.id.count]}
                        {...obj}
                      />
                    ))}
            </div>
          )}
        </div>
        <div className="pagination-block">
          <Pagination onChangePage={onChangePage} currentPage={currentPage} />
        </div>
      </div>
    </main>
  );
};

export default Main;
