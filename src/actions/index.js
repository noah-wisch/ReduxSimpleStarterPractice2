export function selectBook(book) {
  // selectBook is an Action Creator, it needs to return an actiom
  // an object with a type propery.
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
};
