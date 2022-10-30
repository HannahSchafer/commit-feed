import styled from "styled-components";
import { COLORS } from "../Palette/Palette";
import { Link } from "react-router-dom";
import Padded from "../Padded/Padded";
import cx from "classnames";

interface RouteLinkProps {
  children: string;
  isDisabled: boolean;
  to: string;
}

export function RouteLink({ children, isDisabled, to }: RouteLinkProps) {
  return (
    <RouteLinkContainer
      aria-label="route-link"
      to={!isDisabled ? to : "#"}
      className={cx("route-link", {
        isDisabled: isDisabled,
      })}
    >
      <Padded vertical={"8"} horizontal={"16"}>
        {children}
      </Padded>
    </RouteLinkContainer>
  );
}

RouteLink.defaultProps = {
  children: "",
  isDisabled: false,
};

const RouteLinkContainer = styled(Link)`
  align-items: center;
  background-color: ${COLORS.primaryText};
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  color: ${COLORS.primaryBg};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: sans-serif;
  font-weight: 600;
  justify-content: center;
  text-decoration: none;

  &.isDisabled {
    background-color: ${COLORS.gray80};
    cursor: not-allowed;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

export default RouteLink;
