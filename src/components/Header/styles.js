import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  grid-area: header;


  padding: 10px 20px;
  background-color: ${(props) => props.theme.headerBlue};
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const HeaderText = styled.div`
  color: white;
  font-size: 2rem;
  align-self: center;
  padding: 0 20px;
`;
