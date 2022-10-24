import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ICommitItem } from "../types/types";
import { PATHS } from "../constants";
import { getCommits } from "../api";

export enum ActionTypes {
  SET_COMMITS_DATA = "SET_COMMITS_DATA",
  SET_FORM_DATA = "SET_FORM_DATA",
  SET_ERROR = "SET_ERROR",
}

export const StoreContext = createContext<any | undefined>(undefined);

type StoreState = {
  commitsData: ICommitItem[];
  formData: any;
  error: any;
};

type ActionType = {
  type: ActionTypes;
  payload?: any;
};

type StoreContextProviderProps = {
  commitsData?: any;
  children?: any;
};

const reducer = (state: StoreState, action: ActionType): StoreState => {
  switch (action.type) {
    case ActionTypes.SET_COMMITS_DATA: {
      return {
        ...state,
        commitsData: action.payload,
      };
    }
    case ActionTypes.SET_FORM_DATA: {
      return {
        ...state,
        formData: action.payload,
      };
    }
    case ActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      console.warn("Not a valid action type");
      return state;
  }
};

const defaultStoreState: StoreState = {
  commitsData: [],
  formData: {},
  error: null,
};

type ContextStore = {
  state: StoreState;
  actions: {
    setFormData: (data: any) => void;
    setCommits: (data: any) => void;
    setError: (data: any) => void;
    fetchCommits: (data: any) => void;
    submitRepository: (data: any) => void;
  };
};

export function CommitsContextProvider({
  children,
}: StoreContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, defaultStoreState);

  const store: ContextStore = {
    state: {
      commitsData: state.commitsData,
      formData: state.formData,
      error: state.error,
    },
    actions: {
      setFormData: async (data) => {
        dispatch({
          type: ActionTypes.SET_FORM_DATA,
          payload: data,
        });
      },
      setCommits: (response) => {
        dispatch({
          type: ActionTypes.SET_COMMITS_DATA,
          payload: response.data,
        });
      },
      setError: (error) => {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload: error,
        });
      },
      fetchCommits: async (opts) => {
        const response = await getCommits(opts).then((result) => {
          store.actions.setCommits(result);
        }).catch((e) => {
          window.location.replace(PATHS.notFound);
        })
      },
      submitRepository: async (data) => {
        store.actions.setFormData(data);
        const response = await store.actions.fetchCommits(data);
      },
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStoreContext(): ContextStore {
  const context = useContext(StoreContext);

  if (context === undefined) {
    console.warn(
      "useStorecontext has to be used within the StoreContextProvider"
    );
  }

  return context;
}
