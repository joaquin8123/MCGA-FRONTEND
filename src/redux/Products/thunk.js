import {
    setProducts,
    setLoadingProducts,
    dismissLoadingProducts
} from './actions'

export function getProducts() {
    return async (dispatch) => {
        dispatch( setLoadingProducts() );
        try {
            let response = await fetch("http://localhost:4000/product");
            const responseParser = await response.json();
            if(responseParser.data) {
                dispatch(dismissLoadingProducts())
                dispatch( setProducts(responseParser.data) )
            }
        } catch (error) {
            console.log(error);
            //dispatch( descargaProductosError() )
        }
    }
}


