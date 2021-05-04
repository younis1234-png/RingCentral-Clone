const MessageListReducer = (state, action) => {
  let draftState = [...state];
  console.log(draftState);
  switch (action.type) {
    case "addMessage":
      return [...draftState, action.payload];
    default:
      return state;
  }
};

export default MessageListReducer;
