import Dishes from "../data/Dishes";
const dishState = {
  dishes: Dishes,
};

const reducer = (state = dishState, action) => {
  if (action.type === "ADD_COMMENT") {
    let comInState = action.payload;
    comInState.date = new Date().toDateString();
    comInState.id = state.dishes[comInState.dishid].comments.length;
    let newState = { ...state };

    newState.dishes[comInState.dishid].comments.push(comInState);
    return { ...state, ...newState };
  }
  return state;
};
export { reducer };
