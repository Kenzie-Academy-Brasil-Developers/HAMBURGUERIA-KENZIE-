import { StyledButton } from "./style";

export const Button = ({ action, children }) => {
  return <StyledButton onClick={action}>{children}</StyledButton>;
};
