
export const getDataApi = {
    state: () => ({
        products: []
    }),
    getters: {
        products: s => s.products
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        }
    },
    actions: {
        getItems({commit}) {
            fetch('https://62787c0cd00bded55ad968dd.mockapi.io/api/items')
                .then(r => r.json())
                .then(data => commit('SET_PRODUCTS', data))
                .catch(e => console.log(e))
        },

        sortProducts({commit, state}, i) {
            const sorted = state.products.sort((a ,b) => a[i]?.localeCompare(b[i]))
            commit('SET_PRODUCTS', sorted)

        }
    }
}