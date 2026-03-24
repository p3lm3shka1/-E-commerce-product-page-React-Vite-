import { useState } from "react";
import iconMenu from "../../assets/images/icon-menu.svg";
import iconClose from "../../assets/images/icon-close.svg";

function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu mobile-only">
      <button
        className="burger"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <img src={iconMenu} alt="menu" />
      </button>

      {open && (
        <>
          <div className="overlay" onClick={() => setOpen(false)} />
          <aside className="drawer">
            <button className="close" onClick={() => setOpen(false)}>
              <img src={iconClose} alt="close" />
            </button>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
    </div>
  );
}

export default MobileMenu;
