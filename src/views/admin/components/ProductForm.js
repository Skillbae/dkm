import {
  Formik, 
  Form,  
  FieldArray
} from 'formik';


import { CloseCircleOutlined  } from "@ant-design/icons"

import { useFileHandler } from '../../../hooks';
import ImageLoader from "../../../components/common/ImageLoader"
// import CustomColorInput from "../../../components/formik/CustomColorInput"


// custom formik components
import MyCheckBox from "../../../components/formik/MyCheckBox";
import CustomColorInput from "../../../components/formik/CustomColorInput";
import MyMultiLineTextField from "../../../components/formik/MyMultiLineTextField";
import MyTextField from "../../../components/formik/MyTextField";
import ThumbnailUpload from '../../../components/formik/ThumbnailUpload';
import MultipleImageUploader from './MultipleImageUploader';
import MySelectableTextField from '../../../components/formik/MySelectableTextField';






const ProductForm = ({product, isLoading, onSubmit}) => {
  const {
    imageFile,
    isFileLoading,
    onFileChange,
    removeImage
  } = useFileHandler({ image: {}, imageCollection: product?.imageCollection || [] })

  const brandOptions = [
    
    { value: 'Drippink Monkey', label: 'Drippink Monkey' },
    { value: 'HnM', label: 'HnM' },
    { value: 'Pull & Bear', label: 'Pull & Bear' },
    { value: 'Uniqlo', label: 'Uniqlo' }
  ];
  
  const initialFormikValues = {
    productName : "",
    brandName : "",
    productDescription: "",
    price : "",
    isFeatured : false,
    isNewArival: false,
    tags : "",
    availableColors : [],
    stock : undefined,
    sold : 0
  }

  const submitHandler = (formData) => {
    onSubmit({
      ...formData,
      rating : 0,
      // image: imageFile?.image?.file || product.imageUrl,
      // imageCollection: imageFile.imageCollection
    })
  }

  return (
    <div>
      <h2 className="product-form-heading">Add New Product</h2>

      <Formik 
        initialValues={initialFormikValues}
        onSubmit={(data, {resetForm})=>{
          submitHandler(data);
          console.log(data)
          resetForm();
        }}  
      >
      {(values, handleChange, handleBlur) => (
        <Form className="product-form"> 
          <div className="product-form-inputs">
            <div className="d-flex">

              <div className="product-form-field">
                <MyTextField 
                  name="productName"
                  label="Product Name*"
                />
              </div>
              <div className="product-form-field">
                <MySelectableTextField
                  name="brandName"
                  label="brandName"
                  options={brandOptions}
                />
              </div>
            </div>
            
            <div className="product-form-field">
              <div>
                <MyMultiLineTextField
                  name="productDescription"
                  label="Product Description"
                  placeholder="Add a product description..."
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="product-form-field">
                <MyTextField 
                  name="price"
                  label="Price"
                  type="number"
                  
                />
              </div>

              <div className="product-form-field">
                <MyTextField 
                  name="tags"
                  label="Tags"
                  
                />
              </div>
            </div>
            
            <div className="d-flex">
              <div className="product-form-field">
                <MyTextField 
                  name="stock"
                  label="Stock"
                  type="number"
                  
                />
              </div>

              <div className="product-form-field">
                <MyTextField 
                  name="tags"
                  label="Tags"
                  
                />
              </div>
            </div>

            <div className="product-form-field">
                <FieldArray
                  name="availableColors"
                  disabled={isLoading}
                  component={CustomColorInput}
                />
                
            </div>
            <div className="d-flex">
              <div className="product-form-field">
                <MyCheckBox
                  label="Add to featured"
                  name="isFeatured"
                />
              </div>

              <div className="product-form-field">
                <MyCheckBox
                  label="Add to new arrivals"
                  name="isNewArival"
                />
              </div>
              
            </div>
            

            <div className="product-form-collection">
                <>
                  {imageFile.imageCollection.length >= 1 && (
                    imageFile.imageCollection.map((image) => (
                      <div
                        className="product-form-collection-image"
                        key={image.id}
                      >
                        <ImageLoader
                          alt=""
                          src={image.url}
                        />
                        <button
                          className="product-form-delete-image"
                          onClick={() => removeImage({ id: image.id, name: 'imageCollection' })}
                          title="Delete Image"
                          type="button"
                        >
                        <CloseCircleOutlined style={{fontSize : "18px", color : "black"}}/>
                        </button>
                      </div>
                      
                    ))
                  )}
                </>
              </div>

              <div className="product-form-field">
                <button type="submit">Submit</button>
              </div>

          </div>
          
          <div className="product-form-file">

          { /*<MultipleImageUploader/>*/}
          </div>
        </Form>
      )}
      
      </Formik>
      
    </div>
  )
}

export default ProductForm;



// <div className="product-form-field">
// <span className="d-block padding-s">Image Collection</span>
// {!isFileLoading && (
//   <label htmlFor="product-input-file-collection">
//     <input
//       disabled={isLoading}
//       hidden
//       id="product-input-file-collection"
//       multiple
//       onChange={(e) => onFileChange(e, { name: 'imageCollection', type: 'multiple' })}
//       readOnly={isLoading}
//       type="file"
//     />
//     Choose Images
//   </label>
// )}
// </div>


// <div className="product-form-field">
// <span className="">* Thumbnail</span>
// {!isFileLoading && (
//   <label htmlFor="product-input-file">
//     <input
//       disabled={isLoading}
//       hidden
//       id="product-input-file"
//       onChange={(e) => onFileChange(e, { name: 'image', type: 'single' })}
//       readOnly={isLoading}
//       type="file"
//     />
//     Choose Image
//   </label>
// )}
// </div>
// <div className="product-form-image-wrapper">
// {(imageFile.image.url) && (
//   <ImageLoader
//     alt=""
//     className="product-form-image-preview"
//     src={imageFile.image.url}
//   />
// )}
// </div>
