import React from "react";

const TYPES = {
  START_LUNCH_TIME: "@lunch_start_lunch",
  STOP_LUNCH_TIME: "@lunch_stop_lunch",
  INCREMENT_LUNCH_SECONDS: "@lunch_increment_second",
  INCREMENT_LUNCH_MINUTS: "@lunch_increment_minuts",
  INCREMENT_LUNCH_HOURS: "@lunch_increment_hours",
  INCREMENT_LUNCH_MILISECONDS: "@lunch_increment_miliseconds"
};

const INITIAL_STATE = {
  startLunch: false,
  luncheSeconds: 0,
  luncheMinuts: 0,
  luncheHours: 0
};

const lunchReducer = (state, action) => {
  switch (action.type) {
    case TYPES.START_LUNCH_TIME:
      return {
        ...state,
        startLunch: true
      };
    case TYPES.STOP_LUNCH_TIME:
      return {
        ...state,
        startLunch: false
      };
    case TYPES.INCREMENT_LUNCH_SECONDS:
      return {
        ...state,
        luncheSeconds: state.luncheSeconds + 1
      };
    case TYPES.INCREMENT_LUNCH_MINUTS:
      return {
        ...state,
        luncheSeconds: 0,
        luncheMinuts: state.luncheMinuts + 1
      };
    case TYPES.INCREMENT_LUNCH_HOURS:
      return {
        ...state,
        luncheHours: state.luncheHours + 1,
        luncheMinuts: 0,
        luncheSeconds: 0
      };
    default:
      throw new Error("what's going on?");
  }
};

const useLunchReducer = () => {
  const [state, dispatch] = React.useReducer(lunchReducer, INITIAL_STATE);

  const startLunchAction = () => dispatch({ type: TYPES.START_LUNCH_TIME });

  const stopLunchAction = () => dispatch({ type: TYPES.STOP_LUNCH_TIME });

  return {
    state,
    dispatch,
    startLunchAction,
    stopLunchAction
  };
};

export { TYPES, useLunchReducer };
