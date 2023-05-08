import React, { useEffect, useState } from "react";
import "./NewProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const NewProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="newProducts">
      <div className="top">
        <h1>Featured Products</h1>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default NewProducts;
