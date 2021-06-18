
import { Slider } from 'antd';
const PriceFilter = () => {
  function onChange(value) {
    console.log('onChange: ', value);
  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }

  return (
  <div className="priceFilter">
    <h2 className="priceFilter-heading">Filter Price</h2>
    <Slider 
    className="slider"
      defaultValue={[500, 1500 ]} 
      range={true}
      max={5000}
      min={100}
      onChange={onChange} 
      onAfterChange={onAfterChange} 
      trackStyle={[{ backgroundColor: "black" }]} handleStyle={[{ borderColor: "black" }, { borderColor: "black" } ]}
    />
    
    <p className="priceFilter-range">  Price $100 - $5000 </p>
    

  </div>
  )
};

export default PriceFilter



