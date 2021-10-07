import React from "react";

import footer from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img className="img-responsive" src={footer} alt="" />
        <p className="copy-right">Copyright &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
