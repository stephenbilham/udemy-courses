import React from "react";

const EditPortfolio = props => {
  return (
    <div>
      <h1>A thing I've done </h1>
      <p>this item is with id:{props.match.params.id}</p>
    </div>
  );
};

export default EditPortfolio;
