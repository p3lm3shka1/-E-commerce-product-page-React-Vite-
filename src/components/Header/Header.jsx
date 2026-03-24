import { useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import "./Header.scss";

const links = ["Collections", "Men", "Women", "About", "Contact"];

function Header({ cart }) {
  const { cartCount, isCartOpen, setIsCartOpen } = cart;
  const [active, setActive] = useState("Women");

  return (
    <header className="header-wrap">
      <div className="container header">
        <div className="header__left">
          <MobileMenu links={links} />
          <img src={logo} alt="logo" className="logo" />

          <nav className="nav desktop-only">
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <button
                    className={active === link ? "active" : ""}
                    onClick={() => setActive(link)}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="header__right">
          <button
            className="cart-btn"
            onClick={() => setIsCartOpen((s) => !s)}
            aria-label="cart"
            aria-expanded={isCartOpen}
          >
            <img src={cartIcon} alt="cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
