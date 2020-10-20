const INITIAL_STATE = {
  favoritos: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAV':
      return { ...state, favoritos: [...state.favoritos, action.favoritos] };
    default:
      return state;
  }
}
