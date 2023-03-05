import { createContext } from 'react'

export const payment = {
  userName: '',
  cardNumber: '',
  validityPeriod: '',
  CVC: ''
}

export const PaymentContext = createContext(payment)