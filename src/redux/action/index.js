import * as ActionType from "./../constans/ActionType";
import Axios from "axios";


export const actGetCategory = (cate) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: `http://caphenystore.com/public/api/tree_cate`,
            data:cate

        })
        .then(result => {
           
            dispatch({
                type: ActionType.GET_CATEGORY,
                listCate: result.data.data
            });
          })
          .catch(err => {
          
          });
    }
}

export const actGetNewProduct = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://caphenystore.com/public/api/product_new`,
           

        })
        .then(result => {
           
            dispatch({
                type: ActionType.GET_NEW_PRODUCT,
                listNewProduct: result.data.data
            });
          })
          .catch(err => {
          
          });
    }
}
export const actGetListProduct = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://caphenystore.com/public/api/list_product`,
        })
        .then(result => {
           
            dispatch({
                type: ActionType.GET_LIST_PRODUCT,
                listProduct: result.data.data.data
            });
          })
          .catch(err => {
          
          });
    }
}

export const actGetDetailProduct = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://caphenystore.com/public/api/detail/product?product_id=${id}`,
           

        })
        .then(result => {
         
            dispatch({
                type: ActionType.GET_DETAIL_PRODUCT,
                detailProduct: result.data.data
            });
          })
          .catch(err => {
          
          });
    }
}







