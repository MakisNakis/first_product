import productsJSON from '../components/Catalog/products.json'

const products = {
    state: {
        data: productsJSON
    },
    reducers: {
        addProduct(state, payload) {
			return {
                ...state,
                data: [...state.data, payload]
            }
		},
    },
    effects: dispatch => ({
        // Для ассинхронных действий

    })
}

export default products
