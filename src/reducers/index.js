export const initialState = {
  title: "Hello earthlings",
  editing: false
};

export const titleReducer = (state, action) => {
  switch (action.type) {
    // case "CHANGE_TITLE":
    //   return ;
    case "CHANGE_EDIT":
      return { ...state, editing: true };
    default:
      return state;
  }
};
