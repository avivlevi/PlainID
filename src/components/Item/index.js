import React from "react";

// images
import checkmark from "../../assets/images/active.svg"
import arrowRight from "../../assets/images/arrow-right.svg"


// context
import { useItemState } from "../../context/ItemContext";

// styles
import * as Styled from "./styles";




const Item = ({resource}) => {
  const {id, name} = resource;
  const [{ activeResourceId }, dispatch] = useItemState();


  const onClickHandler = () => {
    dispatch({ type: "updateActiveResource",  resource});
  }


  return (
    <Styled.Wrapper isActive={activeResourceId === id} onClick={onClickHandler}>
      <Styled.ItemActiveImg  src={checkmark} alt='active' />
      <Styled.ItemText>{name}</Styled.ItemText>
      {activeResourceId === id && <Styled.ItemArrowImg src={arrowRight} alt='arrow right' />}
    </Styled.Wrapper>
  );
};

export default Item;
