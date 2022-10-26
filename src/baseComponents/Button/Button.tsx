import styled from "styled-components";
import { COLORS } from "../Palette/Palette";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <ButtonContainer
      aria-label="button"
      data-alt="Button"
      onClick={() => onClick()}
    >
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.gray80};
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  color: ${COLORS.white};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: sans-serif;
  font-weight: 600;
  justify-content: center;
  padding: 8px 16px;

  &:hover {
    background-color: ${COLORS.black};
  }
`;

export default Button;
