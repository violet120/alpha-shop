import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg"
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg"

export default function ProgressControl({ onStepNumber, onBackButton, onNextButton }) {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase={onStepNumber}>
        {onStepNumber !== 1 && (
          <button className="prev cursor-point" onClick={() => onBackButton(onStepNumber)}>
            <LeftArrow />
            上一步
          </button>
        )}
        <button className="next cursor-point" onClick={() => onNextButton(onStepNumber)}>
          {onStepNumber === 3 ? "確認下單" : (<>下一步< RightArrow /></>) }
        </button>
    </section>
    </section >
  )
}