import { types } from "../types";

const initialState = {
  modalOpen: false,
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.layoutOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case types.layoutCloseModal:
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
};
