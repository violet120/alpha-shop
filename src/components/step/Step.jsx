import StepProgress from "./StepProgress"
import Step1 from "./Step1"
import ProgressControl from "./ProgressControl"
import Cart from "../Cart/Cart"

export default function Main() {
  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <StepProgress />
          <section className="form-container col col-12">
            <Step1 />
          </section>
        </section>
        <Cart />
        <ProgressControl />
      </div>
    </main>
  )
}