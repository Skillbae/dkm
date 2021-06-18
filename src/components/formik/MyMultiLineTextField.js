import { useField } from 'formik';
import { TextField } from "@material-ui/core"

const MyMutliLineTextField = ({label, placeholder, ...props}) => {
  const [field] = useField(props)
  return (
    <TextField
      {...field}
      id="outlined-textarea"
      label={label}
      multiline
      variant="outlined"
      placeholder={placeholder}
      rows={6}
      style={{width : "100%"}}
    />
  )
}


export default MyMutliLineTextField;