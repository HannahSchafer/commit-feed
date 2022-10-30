import React, { createContext, useContext, useReducer } from "react";
import { ICommitItem } from "../types/types";

export enum ActionTypes {
  SET_COMMITS_DATA = "SET_COMMITS_DATA",
}

export const StoreContext = createContext({} as ContextStore);

type StoreState = {
  commitsData: ICommitItem[];
};

type setCommitsActionType = {
  type: ActionTypes;
  payload: ICommitItem[];
};

type StoreContextProviderProps = {
  commitsData?: ICommitItem[];
  children: any;
};

const reducer = (
  state: StoreState,
  action: setCommitsActionType
): StoreState => {
  switch (action.type) {
    case ActionTypes.SET_COMMITS_DATA: {
      const allCommits = [...state.commitsData, ...action.payload];
      return {
        ...state,
        commitsData: allCommits,
      };
    }
    default:
      console.warn("Not a valid action type");
      return state;
  }
};

const defaultStoreState: StoreState = {
  commitsData: [],
};

type ContextStore = {
  state: StoreState;
  actions: {
    setCommits: (data: ICommitItem[]) => void;
  };
};

export function CommitsContextProvider({
  children,
}: StoreContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, defaultStoreState);

  const store: ContextStore = {
    state: {
      commitsData: state.commitsData,
    },
    actions: {
      setCommits: (data) => {
        dispatch({
          type: ActionTypes.SET_COMMITS_DATA,
          payload: data,
        });
      },
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useCommitsContext(): ContextStore {
  const context = useContext(StoreContext);

  if (context === undefined) {
    console.warn(
      "useStorecontext has to be used within the StoreContextProvider"
    );
  }

  return context;
}
