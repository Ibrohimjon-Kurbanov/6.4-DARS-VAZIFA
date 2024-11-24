import "./index.css";
import logo from "../../assets/images/logo.svg";
function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a className="logo-link" href="#">
          <img src={logo} alt="logo" />
        </a>
        <nav className="sitenav">
          <ul className="sitenav__list">
            <li className="sitenav__item">
              <a href="#" className="sitenav__link">
                Vakansiyalar
              </a>
            </li>
            <li className="sitenav__item">
              <a href="#" className="sitenav__link">
                Kandidatlar
              </a>
            </li>
            <li className="sitenav__item">
              <a href="#" className="sitenav__link">
                Kompaniyalar
              </a>
            </li>
            <li className="sitenav__item">
              <a href="#" className="sitenav__link">
                Xizmatlar
              </a>
            </li>
            <li className="sitenav__item">
              <a href="#" className="sitenav__link">
                Ta’lim
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="header__btn">
          Boshlash
        </a>
      </div>
    </header>
  );
}

export default Header;
