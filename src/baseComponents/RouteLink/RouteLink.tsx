import styled from "styled-components";
import { COLORS } from "../Palette/Palette";
import { Link } from "react-router-dom";
import Padded from "../Padded/Padded";

interface RouteLinkProps {
  children?: string;
  to: string;
}

export function RouteLink({ children, to }: RouteLinkProps) {
  return (
    <RouteLinkContainer aria-label="route-link" to={to}>
      <Padded vertical={"8"} horizontal={"16"}>
        {children}
      </Padded>
    </RouteLinkContainer>
  );
}

const RouteLinkContainer = styled(Link)`
  align-items: center;
  background-color: ${COLORS.gray80};
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

  &:hover {
    background-color: ${COLORS.primaryText};
  }
`;

export default RouteLink;
