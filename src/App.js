import Main from "./components/step/main";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import "./style/main.scss"
import "./style/base.scss"
import "./style/reset.scss"

function App() {
  return (
    <>
      <Header />
      <Main />
      <Cart />
    </>
  );
}

export default App;
