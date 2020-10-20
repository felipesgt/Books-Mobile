const INITIAL_STATE = {
  data: [],
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return { ...state, data: [...state.data, action.book] };
    default:
      return state;
  }
}
