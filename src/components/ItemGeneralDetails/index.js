import React from "react";

// styles
import * as T from "../styles/Typography";
import * as F from "../styles/Form";
import * as Layout from "../styles/Layout";
import * as Styled from "./styles";

// components
import ItemContentSubHeading from "../ItemContentSubHeading";
import ItemDetailsInput from "../ItemDetailsInput";

// context
import { useItemState } from "../../context/ItemContext";

const ItemGeneralDetails = () => {
  const [{ activeResource }] = useItemState();
  const {
    name = "",
    description = "",
    path = "",
    resourceType = "",
  } = activeResource;

  return (
    <Styled.Wrapper>
      <ItemContentSubHeading
        title="GENERAL DETAILS"
        tooltipText="this is an explanation tooltip"
      />
      <T.Paragraph>Even more explenation here.</T.Paragraph>

      <Layout.Spacer margin="10px 0" />

      <ItemDetailsInput label="name">
        <F.Input
          disabled
          type="text"
          value={name}
          placeholder="No item selected yet.."
        />
      </ItemDetailsInput>

      <ItemDetailsInput label="description">
        <F.TextArea
          disabled
          type="text"
          value={description}
          placeholder="No item selected yet.."
        />
      </ItemDetailsInput>

      <ItemDetailsInput label="resource type">
        <F.Input
          disabled
          type="text"
          value={resourceType}
          placeholder="No item selected yet.."
        />
      </ItemDetailsInput>

      <ItemDetailsInput label="path">
        <F.Input
          disabled
          type="text"
          value={path}
          placeholder="No item selected yet.."
        />
      </ItemDetailsInput>
    </Styled.Wrapper>
  );
};

export default ItemGeneralDetails;
