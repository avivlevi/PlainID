import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.darkerGrey};

  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `border-left: 2px solid ${props.theme.resourceBlue};
    font-weight: bold;
  background-color: ${props.theme.darkerGrey};
  `}
`;

export const ItemText = styled.div``;

export const ItemActiveImg = styled.img`
  height: 25px;
  width: auto;
`;

export const ItemArrowImg = styled.img`
  margin-left: auto;
  display: ${props => props.isActive ? 'block' : 'none'};
`;
