import React from "react";
import PropTypes from "prop-types";
import { createUseStyles, useTheme } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  root: {
    color: ({ theme }) => theme.colorText,
    cursor: "pointer",
    fontFamily: "Calibri Bold",
    height: "min-content",
    margin: "0.5em",
    padding: "0.5em 1em",
    textAlign: "center",
    textTransform: "uppercase",
    //TODO: Move these when we figure out size-related props
    letterSpacing: "0.05em",
    fontSize: "20px"
  },
  contained: {
    backgroundColor: ({ theme, color }) => theme[color],
    borderColor: "rgba(0, 0, 0, .05)", //lightest grey
    boxShadow: "rgba(0, 46, 109, 0.3) 1px 2px 3px"
  },
  outlined: {
    backgroundColor: ({ theme }) => theme.colorWhite,
    borderColor: "rgba(0, 46, 109, .2)", //medium grey
    borderWidth: "thin"
  },
  text: {
    backgroundColor: "transparent",
    color: ({ theme, color = "colorText" }) => theme[color],
    border: "none"
  }
});

const Button = ({
  children,
  className,
  isDisplayed = true,
  onClick,
  variant = "contained",
  color = "colorDefault",
  type = "button"
}) => {
  const theme = useTheme();
  const classes = useStyles({ color, theme });

  if (!isDisplayed) return null;
  return (
    <button
      className={clsx(classes.root, classes[variant], className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  isDisplayed: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string
};

export default Button;
