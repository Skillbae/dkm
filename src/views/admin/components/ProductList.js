import ProductItem from "./ProductItem"

const ProductList = () => {
 
  return (
    <div className="product-list">
      <div className="product-list-header d-flex">
        <div className="img-placeholder"/>
        <div className="header-product-details">
          <p className="name">Product Name</p>
          <p className="brand">Brand</p>
          <p className="price">Price</p>
          <p className="date-added">Date added</p>
          <p className="qty">Qty</p>
          <p className="sold">Sold</p>
          <div></div>
        </div>
      </div>

      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>

    </div>
  )
}

export default ProductList


