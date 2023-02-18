import { ReactComponent as Minus } from "../../assets/icons/minus.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"

const cartData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export default function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {cartData.map(data => 
          <div 
            className="product-container col col-12" 
            data-count="0" 
            data-price="3999"
            key={data.id}
          >
            <img className="img-container" src={data.img} alt="" />
            <div className="product-info">
              <div className="product-name">{data.name}</div>
              <div className="product-control-container">
                <span className="product-action minus">
                  <Minus />
                </span>
                <span className="product-count">{data.quantity}</span>
                <span className="product-action plus">
                  <Plus />
                </span>
              </div>
              <div className="price">${data.price}</div>
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
        <div className="price">$300</div>
      </section>
    </section>
  )
}