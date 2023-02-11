export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" class="burger-container">
          {/* <svg class="icon-toggle cursor-point">
            <use xlink:href="#svg-icon-toggle"></use>
          </svg> */}
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
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-search"></use>
              </svg> */}
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-cart"></use>
              </svg> */}
            </li>
            <li id="theme-toggle" class="nav-item">
              {/* <!-- moon --> */}
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-moon"></use>
              </svg> */}
              {/* <!-- sun --> */}
              {/* <svg class="nav-icon cursor-point">
                <use xlink:href="#svg-icon-sun"></use>
              </svg> */}
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className="header-logo-container" href="#">
          {/* <svg class="icon-logo cursor-point">
            <use xlink:href="#svg-icon-logo"></use>
          </svg> */}
        </a>
      </div>
    </header>
  )
}