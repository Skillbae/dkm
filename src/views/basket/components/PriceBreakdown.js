

const PriceBreakdown = () => {
  return (
    <div className="pricebreakdown">
      <div className="breakdown">
        <div className="d-flex">
          <span>Subtotal</span>
          <span className="flex-spacer"></span>
          <span className="fs-1rem">$600.00</span>
        </div>
        <div className="d-flex">
          <span>Shipping</span>
          <span className="flex-spacer"></span>
          <span className="fs-1rem">$50.00</span>
        </div>

        <div className="d-flex total">
          <span>Total</span>
          <span className="flex-spacer"></span>
          <span className="fs-1rem">$650.00</span>
        </div>
      </div>
      <div className="checkout d-flex-center">
        <span>Checkout</span>
      </div>


    </div>
  )
}

export default PriceBreakdown;
