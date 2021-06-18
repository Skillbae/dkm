import TextField from '@material-ui/core/TextField';
import { Field, useField } from 'formik';


const MySelectableTextField = ({options, label, ...props}) => {
  const [ field ] = useField(props);
  return (
    <TextField
      {...field}
      id="outlined-select-currency-native"
      select
      label={label}
      // value={options[0].value}
      SelectProps={{
        native: true,
      }}
      variant="outlined"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  )
}

export default MySelectableTextField
