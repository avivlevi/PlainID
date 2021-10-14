import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

export const ItemState = {
  activeResourceId: null,
  activeResource: {},
  actions: {},
};

export const ItemReducer = (state, action) => {
  switch (action.type) {
    case "updateActiveResource":
      return {
        ...state,
        activeResourceId: action.resource.id,
        activeResource: action.resource,
      };

    default:
      return state;
  }
};

export const ItemStateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useItemState = () => useContext(StateContext);
