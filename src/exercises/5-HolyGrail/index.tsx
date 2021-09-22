/**
 * 5. Holy Grail
 *
 * We are in 2021.
 * Using CSS, how would you build the layout seen in the holy-grail.png picture.
 * Feel free to update the html structure and add classNames in this document if needed.
 */

import { Fragment } from "react";
import css from "./style.module.css";
import src from "./holy-grail.png";

const HolyGrail = () => {
  return (
    <Fragment>
      <h1>Holy Grail</h1>
      <img src={src} alt={"Holy Grail"} className={css.picture} />

      <div className={css.wrapper}>
        <header>Header</header>
        <main>
          <nav>Menu</nav>
          <section>Content</section>
          <aside>Ads</aside>
        </main>
        <footer>Footer</footer>
      </div>
    </Fragment>
  );
};

export default HolyGrail;
