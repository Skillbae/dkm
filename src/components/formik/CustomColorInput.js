/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
import {useState} from "react";
import { ChromePicker } from "react-color";
import { v4 as uuidv4 } from 'uuid';


const CustomColorInput = ({name, push, form, remove}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddSelectedColor = () => {
    if (!form.values[name].includes(selectedColor) && selectedColor) {
      push(selectedColor);
      setSelectedColor('');
      
    }
  };
  
  return (
    <div className="color-picker-wrapper">

      <div className="color-picker" >
        <div className="show-color-picker-btn" 
          onClick={()=>setShowColorPicker(!showColorPicker)}>
          <p>Color Picker</p> 
          <div className="d-flex-center" >
            <div style={{ background : selectedColor}}></div>
          </div>
        </div>
        {
          showColorPicker &&
            <ChromePicker
              color={selectedColor}
              onChange={ updatedColor => setSelectedColor(updatedColor.hex)}
            />
        }
      </div>
        {
          (selectedColor || form.values[name].length > 0) &&
           <div className="add-color">
              <p onClick={handleAddSelectedColor}>Add Selected color</p>
              {
                selectedColor && 
                <div className="color-circle" style={{background : selectedColor}}
                  onClick={handleAddSelectedColor}
              />
              }
              
            </div>
        }

     
      {
        form.values[name].length > 0 && 
        <div className="show-selected-colors">
        <p>Selected Colors</p>
        {
          form.values[name].map((col, index)=>(
            
            <div  key={uuidv4()}
              className="selected-color-circle" 
              style={{background : col, display: "inline-block", margin : "0 3px"}}
              onClick={()=>remove(index)}
            />
            
          ))
        }
        
      </div>
      }
      
    </div>

  )
}
export default CustomColorInput;
