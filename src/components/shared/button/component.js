import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = (props) => {
    const {
        ctaText,
        onClick = () => {},
        classNames = "",
        disabled = false,
        actionCtaText = "",
        isLoading
    } = props;
    
    return (
        <button
            onClick={onClick}
            className={classNames}
            disabled={disabled || isLoading}
        >
            {actionCtaText ? actionCtaText : ctaText}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string
};
export default Button;
