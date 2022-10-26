import styled from "styled-components";

interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <ListItemContainer aria-label="list-item" data-alt="List Item">
      {children}
    </ListItemContainer>
  );
}

const ListItemContainer = styled.li`
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(0.2, 0.2, 0.2, 0.2);
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  padding: 8px;
  background-color: white;
`;

export default ListItem;
