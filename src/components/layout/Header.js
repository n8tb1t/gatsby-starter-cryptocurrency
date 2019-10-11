import React from 'react';
import { Link } from 'gatsby';
import links from '../../data/menu';
// import LogoCX from '../../images/icon.png';
import LogoCX from '../../images/logo.svg';
import Search from './Search';
import MenuItem from './MenuItem';

const nav = links.map(link => <MenuItem key={link.text} {...link} />);



const Header = () => (
  <header className="header openable">
    <Link to="/" className="header__logo">
      <img className="logo__cx" src={LogoCX} alt="Catalyst Logo" width="0" height="0" />
      <span className="catalyst_network">Catalyst Network</span>
    </Link>
    <Search className="header__search" />
    <nav className="header__nav">{nav}</nav>
    <nav className="header__social">
      <a href="https://twitter.com/catalyst_CX" target="blank">
        <i className="icon-twitter" />
      </a>
      <a href="https://github.com/catalystdevelopment" target="blank">
        <i className="icon-github" />
      </a>
      <a href="https://discord.gg/Wf8hsBU" target="blank">
        <i className="icon-discord" />
      </a>
    </nav>
  </header>
);

export default Header;

