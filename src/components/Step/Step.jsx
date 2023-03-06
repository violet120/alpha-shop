import StepProgress from "components/Step/StepProgress"
import Step1 from "components/Step/Step1"
import Step2 from "components/Step/Step2"
import Step3 from "components/Step/Step3"
import ProgressControl from "components/Step/ProgressControl"
import Cart from "components/Cart/Cart"
import { useState } from "react"
import { CartContext, cartData } from "context/CartContext"
import { PaymentContext, payment } from "context/PaymentContext"

export default function Step() {
  const [currentCart, setCurrentCart] = useState(cartData)
  const [stepNumber, setStepNumber] = useState(1);
  const [paymentData, setPaymentData] = useState(payment)

  const handleBackButton = (num) => {
    setStepNumber(num - 1)
  }
  const handleNextButton = (num) => {
    setStepNumber(num + 1)
  }

  return (
    <main className="site-main">
      <div className="main-container">
        <CartContext.Provider value={[currentCart, setCurrentCart]}>
          <section className="register-container col col-lg-6 col-sm-12" data-phase={stepNumber} data-total-price="0">
            <StepProgress />
            <section className="form-container col col-12">
              {stepNumber === 1 && <Step1 />}
              {stepNumber === 2 && <Step2 />}

              <PaymentContext.Provider value={[paymentData, setPaymentData]}>
                {stepNumber === 3 && <Step3 />}
              </PaymentContext.Provider>
              
            </section>
          </section>
          <Cart />
          <PaymentContext.Provider value={[paymentData, setPaymentData]}>
            <ProgressControl
              onStepNumber={stepNumber}
              onNextButton={handleNextButton}
              onBackButton={handleBackButton}
            />
          </PaymentContext.Provider>
          
        </CartContext.Provider>
      </div>
    </main>
  )
}