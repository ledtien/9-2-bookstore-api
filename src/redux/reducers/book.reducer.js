import * as types from "../constants/book.constants";

const initialState = {
  books: [],
  loading: false,
  readingList: [],
  selectedBook: null,
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return { ...state, loading: true };
    case types.GET_BOOKS_SUCCESS:
      return { ...state, books: payload, loading: false };
    case types.GET_BOOKS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default booksReducer;
