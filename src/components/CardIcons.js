import React from "react";
import PropTypes from "prop-types";

const CardIcons = (props) => {
  return (
    <div className="card-sample--item">
      <a className={props.classLink} href={props.url} target="_blank" rel="noopener noreferrer">
        <i className={props.icon}></i>
      </a>
    </div>
  );
};
export default CardIcons;

CardIcons.propTypes = {
  classLink: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
};
