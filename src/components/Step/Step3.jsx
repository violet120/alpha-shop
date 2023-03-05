import { useContext } from "react"
// import { validate } from "webpack";
import { PaymentContext } from "../Context/PaymentContext"

export default function Step3() {
  const [paymentData, setPaymentData] = useContext(PaymentContext)
  function handleChangeCartData(e) {
    setPaymentData({
      ...paymentData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input type="text" placeholder="John Doe" id="userName" onChange={handleChangeCartData} />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input type="text" placeholder="1111 2222 3333 4444" id="cardNumber" onChange={handleChangeCartData} />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input type="text" placeholder="MM/YY" id="validityPeriod" onChange={handleChangeCartData} />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input type="text" placeholder="123" id="CVC"  onChange={handleChangeCartData} />
          </div>
        </div>
      </section>
    </form>
  )
}