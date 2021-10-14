import React from "react";

// components
import ItemGeneralDetails from "../ItemGeneralDetails";
import ItemActions from "../ItemActions";

// context
import { useItemState } from "../../context/ItemContext";

// styles
import * as T from "../styles/Typography";
import * as Styled from "./styles";

const ItemContent = () => {
  const [{ activeResource }] = useItemState();

  return (
    <Styled.OuterWrapper>
      <Styled.Wrapper hide={activeResource.name ? false : true}>
        <Styled.Header>
          <T.Headline>
            {activeResource.name || "No Item selected yet..."}
          </T.Headline>
          <T.Paragraph>
            Here we can insert more information if we need
          </T.Paragraph>
        </Styled.Header>

        <Styled.Body>
          <ItemGeneralDetails />
          <ItemActions />
        </Styled.Body>
      </Styled.Wrapper>
    </Styled.OuterWrapper>
  );
};

export default ItemContent;
