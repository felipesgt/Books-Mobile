const INITIAL_STATE = {
  showList: true,
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'HIDE_LIST':
      return { ...state, showList: action.payload };
    case 'SHOW_LIST':
      return { ...state, showList: action.payload };
    default:
      return state;
  }
}
