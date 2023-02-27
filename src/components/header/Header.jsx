import { ReactComponent as Toggle } from "../../assets/icons/toggle.svg"
import { ReactComponent as Search } from "../../assets/icons/search.svg"
import { ReactComponent as Cart } from "../../assets/icons/cart.svg"
import { ReactComponent as Moon } from "../../assets/icons/moon.svg"
import { ReactComponent as Sun } from "../../assets/icons/sun.svg"
import { ReactComponent as Logo } from "../../assets/icons/logo.svg"


export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" class="burger-container">
          <Toggle className="icon-toggle cursor-point" />
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">男款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">女款</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">最新消息</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">客製商品</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">聯絡我們</a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              <Search className="nav-icon cursor-point" />
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              <Cart className="nav-icon cursor-point" />
            </li>
            <li id="theme-toggle" class="nav-item">
              {/* <!-- moon --> */}
              {/* <Moon className="nav-icon cursor-point" /> */}
              {/* <!-- sun --> */}
              <Sun className="nav-icon cursor-point" />
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className="header-logo-container" href="#">
          <Logo className="icon-logo cursor-point" />
        </a>
      </div>
    </header>
  )
}