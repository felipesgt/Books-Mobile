const INITIAL_STATE = {
  dataBook: [],
};

export default function dataBook(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEND_BOOK':
      return { ...state, dataBook: [action.payload] };
    default:
      return state;
  }
}
