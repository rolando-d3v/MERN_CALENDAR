import { types } from "../types";
import moment from "moment";

const initialState = {
  events: [
    {
      title: "Cumpleaños del jefe",
      start: moment().toDate(),
      end: moment(2, "hours").toDate(),
      bgcolor: "#fafafa",
      notes: "Comprar el pastel",
      user: {
        _id: "1234",
        name: "rolando",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    default:
      return state;
  }
};
