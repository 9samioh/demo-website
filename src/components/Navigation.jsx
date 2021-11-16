import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <nav>
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Multi-Page Website
          </Link>

          <div>
            <ul class={styles.navbar}>
              <li>
                <Link class={styles.navlink} to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class={styles.navlink} to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class={styles.navlink} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);