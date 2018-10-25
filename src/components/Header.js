import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { FunnyHead } = props;
  return (
    <div>
      <h1>{FunnyHead}</h1>
    </div>
  );
};
// DefalutProps
Header.defaultProps = {
  FunnyHead: "Contact Vanaer"
};

Header.PropTypes = {
  FunnyHead: PropTypes.string.isRequired
};

export default Header;
