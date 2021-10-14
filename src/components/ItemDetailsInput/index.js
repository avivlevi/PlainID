import React from "react";

// styles
import * as Styled from "./styles"


const ItemDetailsInput = ({ label, children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>
      {children}
    </Styled.Wrapper>
  );
};

export default ItemDetailsInput;
