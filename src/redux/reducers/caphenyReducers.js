import * as ActionType from "../constans/ActionType";

let initialState = {
  listCate: [],
  listNewProduct:[],
  listProduct:[],
  detailProduct:[],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CATEGORY:
      state.listCate = action.listCate;

      return { ...state};

      case ActionType.GET_NEW_PRODUCT:
        state.listNewProduct = action.listNewProduct;
  
        return { ...state};
      case ActionType.GET_LIST_PRODUCT:
        state.listProduct = action.listProduct;
  
        return { ...state};
      case ActionType.GET_DETAIL_PRODUCT:
        state.detailProduct = action.detailProduct;
  
        return { ...state};

    default:
      return { ...state };
  }
};

export default movieReducer;
