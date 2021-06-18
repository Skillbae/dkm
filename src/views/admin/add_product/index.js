import { useDispatch } from "react-redux"
import { addProduct } from "../../../redux/actions/productActions"
import ProductForm from "../components/ProductForm"


const AddProduct = () => {
  const dispatch = useDispatch()
  const onSubmit = (product) => {
    dispatch(addProduct(product))
  }
  
  return (
    <div className="admin-add-product">
      <ProductForm onSubmit={onSubmit}/>
    </div>
  )
}

export default AddProduct;
