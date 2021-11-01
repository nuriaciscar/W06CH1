import actionTypes from "../actions/actionTypes";

const toDoReducer = (toDoList = [], action) => {
  let newtoDoList;

  switch (action.type) {
    case actionTypes.loadtoDoList:
      newtoDoList = [...action.toDoList];
      break;

    default:
      newtoDoList = toDoList;
      break;
  }
};

export default toDoReducer;