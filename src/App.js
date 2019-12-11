import React from 'react';
import Products from "./Products"
import productsData from "./productsList"

function App() {

  const productComponents = productsData.map(item => <Products key={item.id} product={item} />)

  return (
    <div>
      {productComponents}
    </div>
  );
}

export default App;
