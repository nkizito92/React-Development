import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { FunnyHead } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {FunnyHead}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// DefalutProps
Header.defaultProps = {
  FunnyHead: "Contact Manger"
};
// PropTypes
Header.PropTypes = {
  FunnyHead: PropTypes.string.isRequired
};

export default Header;
