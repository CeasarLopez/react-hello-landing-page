import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="bg-dark text-white text-center">{`Copyright © Bhooker ${year}`}</footer>;
};

export default Footer;