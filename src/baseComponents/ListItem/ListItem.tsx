import styled from "styled-components";
import Spaced from "../Spaced/Spaced";
import Padded from "../Padded/Padded";

interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <Spaced bottom={"8"}>
      <ListItemContainer aria-label="list-item" data-alt="List Item">
        <Padded all={"8"}>{children}</Padded>
      </ListItemContainer>
    </Spaced>
  );
}

const ListItemContainer = styled.li`
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(0.2, 0.2, 0.2, 0.2);
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: white;
`;

export default ListItem;
