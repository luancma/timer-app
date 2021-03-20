export const TYPES = {
  SIGN_IN: "@login_sign_in",
  SIGN_OUT: "@login_sign_out"
};

export const INITIAL_STATE = {
  isLoged: false,
  email: undefined
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return {
        ...state,
        isLoged: true
      };
    case TYPES.SIGN_OUT:
      return {
        ...state,
        isLoged: false,
        email: undefined
      };

    default:
      throw new Error("Action not found", action);
  }
};
