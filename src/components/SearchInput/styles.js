import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.lightGrey};
`;

export const SearchImage = styled.img`
  opacity: 0.3;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  background-color: ${(props) => props.theme.lightGrey};

  &::placeholder {
    color: ${(props) => props.theme.paragraphGrey};
  }
  &:focus {
    outline: none;
  }
`;