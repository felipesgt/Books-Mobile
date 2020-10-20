export function HideList() {
  return { type: 'HIDE_LIST', payload: false };
}

export function ShowList() {
  return { type: 'SHOW_LIST', payload: true };
}

export function SelectBook(book) {
  return { type: 'SEND_BOOK', payload: book };
}

export function addBook(book) {
  return { type: 'ADD_BOOK', book };
}

export function AddFav(book) {
  return { type: 'ADD_FAV', book };
}
