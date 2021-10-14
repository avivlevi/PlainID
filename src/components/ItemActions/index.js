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
  const [actions, setActions] = useState({
    allActions: {},
    itemActions: [],
    isFetching: true,
  });


  useEffect(() => {
    if (isObjEmpty(activeResource)) return;

    const activeResourceActionIds = activeResource.actionIds;

    // check if allItemActions include activeSource action Ids, if not, fetch only what needed
    let missingIds = [],
      existingActions = [],
      allActions = { ...actions.allActions };

    activeResourceActionIds.forEach((id) => {
      if (!allActions[id]) missingIds.push(id);
      else existingActions.push(allActions[id]);
    });

    if (missingIds.length) {
      // need to call to api with missingIds
      getActions(missingIds);
    } else {
      // set itemsActions
      setActions((prevState) => ({
        ...prevState,
        itemActions: existingActions,
      }));
    }
  }, [activeResource]);

  const getActions = async (actionsIds) => {
    !actions.isFetching &&
      setActions((prevState) => ({ ...prevState, isFetching: true }));
    const newActions = await GetActions(actionsIds);

    // build actions map
    let actionsMap = {};

    newActions.forEach((a) => {
      actionsMap[a.id] = a;
    });

    setActions((prevState) => {
      let allActions = { ...prevState.allActions, ...actionsMap },
        cleanedPrevItemActions = prevState.itemActions.filter((prevAction) =>
          activeResource.actionIds.includes(prevAction.id)
        ),
        itemActions = [...cleanedPrevItemActions, ...Object.values(actionsMap)];

      return {
        isFetching: false,
        allActions,
        itemActions,
      };
    });
  };

  return (
    <Styled.Wrapper>
      <ItemContentSubHeading
        title="permitted actions"
        tooltipText="this is another explanation tooltip"
      />

      <T.Paragraph>Even more explenation here.</T.Paragraph>

      <Layout.Spacer margin="10px 0" />

      {!actions.isFetching ? (
        actions.itemActions.map((itemAction) => {
          return <ItemAction key={itemAction.id} name={itemAction.name} />;
        })
      ) : (
        <Skeleton count={5} height={40} />
      )}
    </Styled.Wrapper>
  );
};

export default ItemActions;
