import { SelectTitle } from "./Database.jsx"
import { County } from "./Database.jsx"

export default function Step1() {
  return (
    <form className="col col-12" data-phase="address">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <SelectTitle />
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-s2">
            <div className="input-label">姓名</div>
            <input type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">電話</div>
            <input type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">Email</div>
            <input type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <div className="input-label">縣市</div>
            <div className="select-container">
              <County />
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">地址</div>
            <input type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
  )
}