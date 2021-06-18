import { Checkbox  } from "antd"


const ColorCheckbox = ({color,colorHex, handler}) => (
  <div className={`colorFilter-item ${color}-checkbox`}>
      <Checkbox onChange={handler}/>
      <p>{color}</p>
      <div className="spacer"/>
    <div className="circle" style={{background : colorHex}}/>
  </div>
)


const ColorFilter = () => {
  const onChangeHandler = (e) => {
    console.log(e.target.checked)
  }
  return (
    <div className="colorFilter">
      <h2>COLOR</h2>

      <ColorCheckbox color={"black"} colorHex={"#0D0D0D"}  handler={onChangeHandler}/>
      <ColorCheckbox color={"grey"} colorHex={"#758283"} handler={onChangeHandler}/>
      <ColorCheckbox color={"red"} colorHex={"#E21717"} handler={onChangeHandler}/>
      <ColorCheckbox color={"blue"} colorHex={"#120E43"} handler={onChangeHandler}/>
      <ColorCheckbox color={"yellow"} colorHex={"#DDD101"} handler={onChangeHandler}/>
      <ColorCheckbox color={"green"} colorHex={"#00D84A"} handler={onChangeHandler}/>
      

    </div>
  )
}

export default ColorFilter
