import styled, { css } from "styled-components";

const formStyles = css`
  border: none;
  background-color: #fafbff;
  padding: 10px;
`;

export const Input = styled.input`
  ${formStyles}
`;

export const TextArea = styled.textarea`
  ${formStyles}
  resize: none;
  height: 5em;
`;
