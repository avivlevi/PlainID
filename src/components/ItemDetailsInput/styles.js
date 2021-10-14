import styled from "styled-components";

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.2rem;
  display: block;
  text-align: start;
  color: ${props => props.theme.paragraphGrey};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    margin-bottom: 5px;
`;
