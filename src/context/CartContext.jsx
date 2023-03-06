import { createContext } from 'react'
import imgOne from "assets/images/product-1.jpg"
import imgTwo from "assets/images/product-2.jpg"

export const cartData = [
  {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    img: imgOne,
    price: 3999,
    quantity: 1,
  },
  {
    id: '2',
    name: '刷色直筒牛仔褲',
    img: imgTwo,
    price: 1299,
    quantity: 1,
  },
]

export const CartContext = createContext(cartData)