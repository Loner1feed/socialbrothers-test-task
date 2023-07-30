import React, { useCallback } from 'react'
import { Container } from '../Container/Container';
import { Link, NavLink, useLocation } from 'react-router-dom'
import { appRoutes } from '../../../routes/app.routes';
import { ImgBg } from '../ImgBg/ImgBg';

import logo from '../../../assets/images/svg/logo.svg';
import logoMobile from '../../../assets/images/svg/logo-mobile.svg'
import bg from '../../../assets/images/header-bg.png';

import './header.style.scss';


export const Header = () => {
  
  const { pathname } = useLocation();

  const renderTitle = useCallback(() => {
    const title = appRoutes.find((el) => el.path === pathname).title;
    return title ? <h1>{title}</h1> : <div className="header__titlePlaceholder"></div>
  }, [pathname]);

  const renderNavLinks = () => {
    return appRoutes.map((el) => <NavLink to={el.path} className={({ isActive }) => (isActive ? "active" : "")}>{el.linkTitle}</NavLink>)
  }

  return (
    <header className="header">
      <Container>
        <div className="header__top">
          <Link to="/" className="header__logo">
            <img src={logo} className="header__logo--desktop" alt="Logo" />
            <img src={logoMobile} className="header__logo--mobile" alt="Logo" />
          </Link>

          <nav className="header__nav">
            {renderNavLinks()}
          </nav>
        </div>

        <div className="header__bottom">
          {renderTitle()}
        </div>
      </Container>

      <ImgBg imgPath={bg} />
    </header>
  )
}
