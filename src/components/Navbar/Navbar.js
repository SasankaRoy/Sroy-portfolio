import React, { useState } from "react";
import "./Navbar.scss";
import { Images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <h1>
            port<span>folio</span>
          </h1>
          {/* <img src={Images.logo} alt="logo" /> */}
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "skill", "work", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`# ${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />

          {Toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{duration: .7,   ease: "easeInOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "skill", "work", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`# ${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
