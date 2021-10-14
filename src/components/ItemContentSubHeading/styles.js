import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Heading = styled.h4`
  font-weight: bold;
  color: ${(props) => props.theme.resourceBlue};
  font-weight: 300;
  text-transform: uppercase;
`;

export const QuestionMarkImage = styled.img`
  height: 25px;
  width: auto;
  opacity: 0.5;
`;
