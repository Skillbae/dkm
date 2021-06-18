import { TextField } from "@material-ui/core"
import { Form, Formik } from "formik"

const NewsLetter = () => {

  const sumbitHandler = (data) => {
    console.log(data)
  }
  return (
    <div className="newsletter-wrapper d-flex-center">
      <div className="newsletter d-flex-center">

        <div className="newsletter-header">
          <h1>Join Our News letter now</h1>
          <h1><strong> UpTo 70% Off. All sales are final! </strong></h1>
        </div>

        <form className="newsletter-form d-flex">
          <input 
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />
          <button type="submit">
            SUBMIT
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default NewsLetter
