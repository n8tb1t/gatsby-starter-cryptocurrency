import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import links from '../../data/menu';
// import Search from './Search';
import MenuItem from './MenuItem';

// import LogoCX from '../../images/icon.png';
import LogoCX from '../../images/logo.svg';

const nav = links.map(link => <MenuItem key={link.text} {...link} />);

const SideMenu = ({ open }) => (
  <div className={classNames('side-menu', { open })}>
    <div className="side-menu__top">
      <div className="side-menu__logo">
        <div className="logo__circle">
          <img className="logo__cx" src={LogoCX} width="555" height="321" />
        </div>
        <div className="logo__text">Catalyst Network</div>
      </div>

    </div>
    <nav className="side-menu__nav">
      <MenuItem key="home" path="/" text="Home" />
      {nav}
      <div className="menu-item menu-item__social">
        <a href="https://twitter.com/catalyst_CX" target="blank">
          <i className="icon-twitter" />
        </a>
        <a href="https://github.com/catalystdevelopment" target="blank">
          <i className="icon-github" />
        </a>
        <a href="https://discord.gg/Wf8hsBU" target="blank">
          <i className="icon-discord" />
        </a>
      </div>
    </nav>
  </div>
);

SideMenu.defaultProps = {
  open: false,
};

SideMenu.propTypes = {
  open: PropTypes.bool,
};

export default SideMenu;
{/*<Search className="side-menu__search" />*/}