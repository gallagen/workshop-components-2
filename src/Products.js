import React from "react";

function Products(props) {
  return (
    <div>
      <h2><font color="#3AC1EF">{props.product.name}</font></h2>
        <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
          </div>
  )
}

export default Products;
