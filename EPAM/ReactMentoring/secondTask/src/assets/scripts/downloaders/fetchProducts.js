import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/action';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://localhost:4000/movies?searchBy=title')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;