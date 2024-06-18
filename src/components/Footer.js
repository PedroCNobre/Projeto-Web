import React from 'react';

function Footer({ children }) {
  return (
    <footer>
      <p>&copy; Limbus Company 2024</p>
      {children}
    </footer>
  );
}

export default Footer;
