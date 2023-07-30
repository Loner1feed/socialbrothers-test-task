import React from 'react';
import { Container } from '../Container/Container';

import './footer.style.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container customClassName="footer__container">
        <span>© Copyright Social Brothers - 2023</span>
      </Container>
    </footer>
  )
}
