import React from "react";

// images
import searchSVG from "../../assets/images/search.svg";

// styles
import * as Styled from "./styles";



const SearchInput = React.memo(({ onChangeHandler, searchValue }) => {

  return (
    <Styled.Wrapper>
      <Styled.StyledInput
        onChange={onChangeHandler}
        placeholder="Search Resource"
        value={searchValue}
      />
      <Styled.SearchImage src={searchSVG} alt="magnifying glass" />
    </Styled.Wrapper>
  );
});

export default SearchInput;
