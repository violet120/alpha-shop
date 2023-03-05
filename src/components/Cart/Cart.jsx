import { ReactComponent as Minus } from "../../assets/icons/minus.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


export default function Cart() {
  // cart list render
  const [currentCart, setCurrentCart] = useContext(CartContext)
  // 計算總金額
  const totall =
    [...currentCart].reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity
    }, 0)
  function handleClickButton(id, get) {
    const updateCartData = currentCart.map((data) => {
      if (data.id === id) {
        if (get === "minus" && data.quantity > 1) {
          return {
            ...data,
            quantity: data.quantity - 1
          }
        } else if (get === "plus") {
          return {
            ...data,
            quantity: data.quantity + 1
          }
        }
      }
      return data
    })
    setCurrentCart(updateCartData)

  }
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {currentCart.map(data =>
          <div
            className="product-container col col-12"
            data-count="0"
            data-price={data.price}
            id={data.id}
            key={data.id}
          >
            <img className="img-container" src={data.img} alt="" />
            <div className="product-info">
              <div className="product-name">{data.name}</div>
              <div className="product-control-container">
                <div className="product-control">
                  <Minus className="product-action minus" onClick={() => handleClickButton(data.id, "minus")} />
                  <span className="product-count">{data.quantity}</span>
                  <Plus className="product-action plus" onClick={() => handleClickButton(data.id, "plus")} />
                </div>
              </div>
              <div className="price">${data.price * data.quantity}</div>
            </div>
          </div>
        )}
      </section>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totall}</div>
      </section>
    </section>
  )
}