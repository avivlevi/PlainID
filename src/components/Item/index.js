import React from "react";

// images
import checkmark from "../../assets/images/active.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

// styles
import * as Styled from "./styles";

const Item = React.memo(({ resource, onClickHandler, isActive }) => {
  const { name } = resource;

  return (
    <Styled.Wrapper
      isActive={isActive}
      onClick={() => onClickHandler(resource)}
    >
      <Styled.ItemActiveImg src={checkmark} alt="active" />
      <Styled.ItemText>{name}</Styled.ItemText>
      <Styled.ItemArrowImg
        isActive={isActive}
        src={arrowRight}
        alt="arrow right"
      />
    </Styled.Wrapper>
  );
});

export default Item;
