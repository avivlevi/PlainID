import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";

// components
import Item from "../Item";

// styles
import * as Styled from "./styles";

// helpers
import { isObjEmpty } from "../../helpers/utils";

// context
import { useItemState } from "../../context/ItemContext";

const ItemsList = React.memo(({ items }) => {
  const { data, isFetching } = items;
  const [{ activeResourceId }, dispatch] = useItemState();

  const memoizedOnClickHandler = useCallback(
    (resource) => {
      dispatch({ type: "updateActiveResource", resource });
    },
    []
  );

  if (isFetching) return <Skeleton count={3} height={40} />;

  return (
    <>
      {!isObjEmpty(data) ? (
        Object.keys(data).map((resourceKey) => {
          return (
            <Item
              key={resourceKey}
              resource={data[resourceKey]}
              onClickHandler={memoizedOnClickHandler}
              isActive={resourceKey === activeResourceId}
            />
          );
        })
      ) : (
        <Styled.NoResults>No results found</Styled.NoResults>
      )}
    </>
  );
});

export default ItemsList;
