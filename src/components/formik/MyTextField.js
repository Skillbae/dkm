import { useField } from 'formik';
import { TextField } from "@material-ui/core"

const MyTextField = ({label, ...props}) => {
  const [field] = useField(props)
  return (
    <TextField 
      {...field} 
      id="outlined-basic" 
      variant="outlined" 
      label={label} 
    />
  )
}

export default MyTextField;