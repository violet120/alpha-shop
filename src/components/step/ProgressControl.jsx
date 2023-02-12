import { ReactComponent as RightArrow } from "../../assets/icons/right-arrow.svg"
import { ReactComponent as LeftArrow } from "../../assets/icons/left-arrow.svg"

// 換頁 component
function FirstPage() {
  return (
    <section className="button-group col col-12" data-phase="address">
      <button className="next">
        下一步
        <svg className="cursor-point">
          <RightArrow />
        </svg>
      </button>
    </section>
  )
}

function NextPage() {
  return (
    <section className="button-group col col-12" data-phase="shipping">
      <button className="prev">
        <svg className="cursor-point">
          <LeftArrow />
        </svg>
        上一步
      </button>
      <button className="next">
        下一步
        <svg className="cursor-point">
          <RightArrow />
        </svg>
      </button>
    </section>
  )
}

function EndPage() {
  return (
    <section className="button-group col col-12" data-phase="credit-card">
      <button className="prev">
        <svg className="cursor-point">
          <LeftArrow />
        </svg>
        上一步
      </button>
      <button className="next">
        確認下單
      </button>
    </section>
  )
}

export default function ProgressControl() {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <FirstPage />
    </section>
  )
}