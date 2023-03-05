import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg"
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg"
import { useContext } from "react"
import { PaymentContext } from "../Context/PaymentContext"
import { CartContext } from "../Context/CartContext"

export default function ProgressControl({ 
  onStepNumber, 
  onBackButton, 
  onNextButton, 
}) {
  const outputPaymentData = useContext(PaymentContext)
  const [currentCart, setCurrentCart] = useContext(CartContext)
  // 計算總金額
  const totallPrice =
    [...currentCart].reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity
    }, 0)

  function handlePaymentData() {
    console.log(`持卡人姓名：${outputPaymentData[0].userName}`)
    console.log(`卡號：${outputPaymentData[0].cardNumber}`)
    console.log(`有效期限：${outputPaymentData[0].validityPeriod}`)
    console.log(`CVC/CCV：${outputPaymentData[0].CVC}`)
    console.log(`總金額：${totallPrice}`);
  }

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase={onStepNumber}>
        {onStepNumber !== 1 && (
          <button className="prev cursor-point" onClick={() => onBackButton(onStepNumber)}>
            <LeftArrow />
            上一步
          </button>
        )}
        {onStepNumber !== 3 && (
          <button className="next cursor-point" onClick={() => onNextButton(onStepNumber)}>
            下一步
            < RightArrow />
          </button>
        )}
        {onStepNumber === 3 && (
          <button className="next cursor-point" onClick={handlePaymentData}>
            確認下單
            < RightArrow />
          </button>
        )}
        
    </section>
    </section >
  )
}