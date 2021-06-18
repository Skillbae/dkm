const ProductItem = () => {
  return (
    <div className="admin-product-item d-flex">
      <div className="admin-product-img">
        <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="product-img" />
      </div>

      <div className="admin-product-details">
        <p className="name">Sample Product</p>
        <p className="brand">TRx brand</p>
        <p className="price">$200</p>
        <p className="date-added">17/05/2021</p>
        <p className="qty"><span className="label">Quantity :</span> 20</p>
        <p className="sold"> <span className="label">Sold :</span> 5</p>

        <div className=" d-flex ">
          <div className=" product-item-btn edit  d-flex-center">Edit</div>
          <div className=" product-item-btn delete d-flex-center">Delete</div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductItem
