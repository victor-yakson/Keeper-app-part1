import React from "react";
const date = new Date();
const year = date.getFullYear();
let Footer = () => {
  return (
    <footer>
      <p>{year}</p>
    </footer>
  );
};
export default Footer;
