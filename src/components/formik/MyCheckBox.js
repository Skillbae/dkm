import { useField } from 'formik';
import {
  FormControlLabel,
  Checkbox,
} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons";



const BlackCheckbox = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: grey[900],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const MyCheckBox = ({label, ...props}) => {
  const [ field ] = useField(props);
  
  return (
    <FormControlLabel
      {...field}
      control={
        <BlackCheckbox 
          icon={<CheckCircleOutlined />} 
          checkedIcon={<CheckCircleFilled />}
        />
      }
      label={label}
      />
  )
}

export default MyCheckBox;