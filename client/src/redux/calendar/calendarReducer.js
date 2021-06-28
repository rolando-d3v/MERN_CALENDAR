import { types } from "../types";
import moment from "moment";

const initialState = {
  events: [
    {
      id: new Date().getTime(),
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

    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      };

    default:
      return state;
  }
};
