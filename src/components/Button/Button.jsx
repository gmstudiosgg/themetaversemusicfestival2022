import * as React from "react";
import { StyledButton } from "./styles";

const Button = ({
  onClick,
  type,
  className,
  href,
  download,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      onClick={onClick && onClick}
      href={href}
      download={download}
      style={{ backgroundImage: "../../images/boton.png" }}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
