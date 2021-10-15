import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

// styles
import * as T from "../styles/Typography";
import * as Layout from "../styles/Layout";
import * as Styled from "./styles";

// components
import ItemContentSubHeading from "../ItemContentSubHeading";
import ItemAction from "../ItemAction";

// context
import { useItemState } from "../../context/ItemContext";

// api
import { GetActions } from "../../api/Action";

// helpers
import { isObjEmpty } from "../../helpers/utils";

const ItemActions = () => {
  const [{ activeResource }] = useItemState();
  const [isFetching, setIsFetching] = useState(true);
  const [actions, setActions] = useState({});

  useEffect(() => {
    if (isObjEmpty(activeResource)) return;

    const activeResourceActionIds = activeResource.actionIds;

    // check if allItemActions include activeSource action Ids, if not, fetch only what needed
    let missingIds = [],
      allActions = { ...actions };

    activeResourceActionIds.forEach((id) => {
      if (!allActions[id]) missingIds.push(id);
    });

    if (missingIds.length) {
      // need to call to api with missingIds
      getActions(missingIds);
    }
  }, [activeResource]);

  const getActions = async (actionsIds) => {
    !isFetching && setIsFetching(true);
    const newActions = await GetActions(actionsIds);

    // build actions map
    let newAllActions = { ...actions };

    newActions.forEach((a) => {
      newAllActions[a.id] = a;
    });

    setActions(newAllActions);
    setIsFetching(false);
  };

  return (
    <Styled.Wrapper>
      <ItemContentSubHeading
        title="permitted actions"
        tooltipText="this is another explanation tooltip"
      />

      <T.Paragraph>Even more explenation here.</T.Paragraph>

      <Layout.Spacer margin="10px 0" />
      {!isFetching ? (
        activeResource.actionIds.map(
          (actionId) =>
            actions[actionId] && (
              <ItemAction key={actionId} name={actions[actionId].name} />
            )
        )
      ) : (
        <Skeleton count={5} height={40} />
      )}
    </Styled.Wrapper>
  );
};

export default ItemActions;
