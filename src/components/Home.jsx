import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.work}>
      <div className={styles.navigation}>
        <nav class={styles.navbar}>
          <div class={styles.navLinks}>
            <div>
              <ul class={styles.links}>
                  <Link class={styles.link1} to="/">
                    WORK
                  </Link>

                  <Link class={styles.link} to="/aboutme">
                    ABOUT ME
                  </Link>
                
                  <Link class={styles.link} to="/art">
                    ART
                  </Link>
              
                  <Link class={styles.link} to="/contact">
                    CONTACT
                  </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div data-aos="fade-in" className={styles.me}>
          <br/><br/>
          <div class={styles.left}>
            <h1 class={styles.hello}>Hello! <br/> My name is <br/> Sami Oh</h1>
            <p class={styles.description}>
              I am an aspiring UI/UX designer and developer
            </p>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
  );
}

export default Home;