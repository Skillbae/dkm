import {
  MinusSquareOutlined,
  PlusSquareOutlined
} from "@ant-design/icons"

const QuantityPicker = ({
  currentQuantity,
  decreaseHandler,
  increaseHandler
  }) => {
    return (
      <div className="basket-item-quantity">

        <MinusSquareOutlined 
          onClick={decreaseHandler}
          style={{fontSize : "1.4rem"}} 
        />
        <p className="d-flex-center">{currentQuantity}</p>
        <PlusSquareOutlined 
          onClick={increaseHandler}
          style={{fontSize : "1.4rem"}}
        />
      </div>
    )
}


export default QuantityPicker;
