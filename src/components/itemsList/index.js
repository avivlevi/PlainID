import React from "react";
import Skeleton from "react-loading-skeleton";

// components
import Item from "../Item";

// styles
import * as Styled from "./styles";

// helpers
import {isObjEmpty} from "../../helpers/utils"

const ItemsList = React.memo(({ items }) => {
  const {data, isFetching} = items;


  if (isFetching) 
    return <Skeleton count={3} height={40} />;


  return (
    <>
      {!isObjEmpty(data)  ? Object.keys(data).map((resourceKey) => {
        return (
          <Item key={resourceKey} resource={data[resourceKey]} />
        );
      }) : <Styled.NoResults>No results found</Styled.NoResults>}
    </>
  );
});

export default ItemsList;
