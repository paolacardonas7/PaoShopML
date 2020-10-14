export const initialState = {
  loading: true,
  products: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case "SEARCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
