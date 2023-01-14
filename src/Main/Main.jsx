import React from "react";
import { useState, useCallback, useEffect, useContext, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import qs from "qs";

import { setCurrentPage } from "../redux/slices/filterSlice";
import { setCategoryIndex } from "../redux/slices/filterSlice";
import { setFilters } from "../redux/slices/filterSlice";
import { fetchProducts } from "../redux/slices/productsSlice";

// import { SearchContext } from "../App";
import Product from "../Components/product/Product";
import Categories from "../Components/filters/Categories";
import Filters from "../Components/filters/Filters";
import Range from "../Components/filters/Range";
import LoaderBlock from "../Components/product/LoaderBlock";
import Pagination from "../Components/pagination/Pagination";

import main from "./main.css";

const categoryNames = ["Пиво", "На розлив", "В пляшці", "Колекції", "SALE!"];

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isSearch = useRef(false);
  const isMounted = useRef(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const { searchValue } = useContext(SearchContext);
  const { categoryIndex, currentPage, searchValue } = useSelector(
    (state) => state.filterSlice
  );
  const { addProductToCart } = useSelector((state) => state.cartSlice);
  const { products, status } = useSelector((state) => state.productsSlice);

  //console.log("products", products);
  const OnSelectCategory = useCallback((index) => {
    dispatch(setCategoryIndex(index));
  }, []);

  const handleAddProductToCart = (obj) => {
    dispatch(addProductToCart(obj));
    console.log("work");
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getProducts = async () => {
    const search = searchValue ? `search=${searchValue}` : "";
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";

    dispatch(fetchProducts({ search, category, currentPage }));

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // console.log("isMounted1", isMounted);
    // console.log("categoryIndex", categoryIndex);
    // console.log("currentPage", currentPage);

    if (isMounted.current && (categoryIndex > 0 || currentPage > 0)) {
      const queryString = qs.stringify({
        categoryIndex,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    // console.log("queryString", queryString);
    isMounted.current = true;
  }, [currentPage, categoryIndex]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      //console.log("params", params);
      dispatch(
        setFilters({
          ...params,
        })
      );
      // isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    // // console.log("!isSearch.current", !isSearch.current);
    // if (!isSearch.current) {
    getProducts();
    // }
    // isSearch.current = false;
  }, [categoryIndex, searchValue, currentPage]);

  //console.log("cartItems", cart);

  // useEffect(() => {
  //   dispatch(fetchProducts(category));
  // }, [category]);

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
              <Filters />
            </div>
          </div>
          <div className="sidebar-range__title">Міцність</div>
          <Range />
          <div className="sidebar-range__title">Ціна</div>
          <Range />
          <div className="sidebar-filter __filters">
            <div className="sidebar-filter">
              <h3 className="sidebar-filter__title">Бренд</h3>
              <Filters />
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
            <div className="products-block__error">
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
                    .filter((obj) => {
                      if (
                        obj.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((obj) => (
                      <Product
                        onClickAddProduct={handleAddProductToCart}
                        key={obj.id}
                        products={products}
                        // isLoading={true}
                        addedCount={
                          products[obj.id] && products[obj.id].items.length
                        }
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
}

export default Main;
