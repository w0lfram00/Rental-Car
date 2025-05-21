import React from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarList from "../../components/CarList/CarList";

const Catalog = () => {
  return (
    <div>
      <FilterForm />
      <CarList />
      <button>Load more</button>
    </div>
  );
};

export default Catalog;
