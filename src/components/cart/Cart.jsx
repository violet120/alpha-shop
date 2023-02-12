import { ReactComponent as Minus } from "../../assets/icons/minus.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"

export default function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        <div className="product-container col col-12" data-count="0" data-price="3999">
          <img className="img-container" src={require("../../assets/images/product-1.jpg")} alt="" />
          <div className="product-info">
            <div className="product-name">破壞補丁修身牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <svg className="product-action minus">
                  <Minus />
                </svg>
                <span className="product-count"></span>
                <svg className="product-action plus">
                  <Plus />
                </svg>
              </div>
            </div>
            <div className="price"></div>
          </div>
        </div>
        <div className="product-container col col-12" data-count="0" data-price="1299">
          <img className="img-container" src={require("../../assets/images/product-2.jpg")} alt="" />
          <div className="product-info">
            <div className="product-name">刷色直筒牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <svg className="product-action minus">
                  <Minus />
                </svg>
                <span className="product-count"></span>
                <svg className="product-action plus">
                  <Plus />
                </svg>
              </div>
            </div>
            <div className="price"></div>
          </div>
        </div>
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price"></div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price"></div>
      </section>
    </section>
  )
}