import styled from "styled-components";
import cx from "classnames";
import Spaced from "../Spaced/Spaced";
import Padded from "../Padded/Padded";
import { COLORS } from "../Palette/Palette";

interface ListItemProps {
  children: React.ReactNode;
  showVerificationBar: boolean;
}

export function ListItem({ children, showVerificationBar }: ListItemProps) {
  return (
    <Spaced bottom={"8"}>
      <ListItemContainer
        aria-label="list-item"
        className={cx("spaced", {
          verification: showVerificationBar,
        })}
      >
        <Padded all={"16"}>{children}</Padded>
      </ListItemContainer>
    </Spaced>
  );
}

ListItem.defaultProps = {
  showVerificationBar: false,
};

const ListItemContainer = styled.li`
  background-color: ${COLORS.primaryBg};
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(0.2, 0.2, 0.2, 0.2);
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  position: relative;

  &.verification {
    ::before {
      background-color: ${COLORS.secondaryText};
      content: "";
      height: 100%;
      position: absolute;
      width: 4px;
    }
  }
`;

export default ListItem;
