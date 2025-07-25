import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profile.png`} alt="Jérémie Beucler" />
      </Link>
      <header>
        <h2>Jérémie Beucler</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I am Jérémie, a PhD student in cognitive science at{' '}
        <a href="https://www.lapsyde.com/home">LaPsyDÉ</a> (CNRS & Université Paris Cité).
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Jérémie Beucler <Link to="/">jeremiebeucler.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
