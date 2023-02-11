import { ReactComponent as RightArrow } from "../../style/icons/right-arrow.svg"
import { ReactComponent as LeftArrow } from "../../style/icons/left-arrow.svg"

export default function ProgressControl() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <svg class="cursor-point">
            <RightArrow />
          </svg>
        </button>
      </section>
    </section>
  )
}