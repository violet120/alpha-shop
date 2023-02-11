import StepProgress from "./StepProgress"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import ProgressControl from "./ProgressControl"

export default function Main() {
  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <StepProgress />
          <Step1 />
        </section>
        <ProgressControl />
      </div>
    </main>
  )
}