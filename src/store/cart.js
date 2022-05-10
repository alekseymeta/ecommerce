
export const cart = {
    state: () => ({
        cart: [],
        likes: []
    }),
    getters: {
        cart: s => s.cart,
        likes: s => s.likes
    },
    mutations: {
        ADD_TO_CART(state, cart) {
            state.cart.push(cart)
        },
        ADD_TO_LIKES(state, likes) {
            state.likes.push(likes)
        },
        DEL_TO_CART(state, idx) {
            state.cart.splice(idx, 1)
        },
        DEL_TO_LIKES(state, idx) {
            state.likes.splice(idx, 1)
        },
        DEL_ALL_CART(state) {
            state.cart = []
        },
    },
    actions: {
        addToCart({commit}, item) {
            commit('ADD_TO_CART', item)
        },
        addToLikes({commit}, item) {
            commit('ADD_TO_LIKES', item)
        },
        delToCart({state, commit}, id) {
            const idx = state.cart.findIndex(item => item.id === id)
            commit('DEL_TO_CART', idx)
        },
        delToLikes({state, commit}, id) {
            const idx = state.likes.findIndex(item => item.id === id)
            commit('DEL_TO_LIKES', idx)
        }
    }
}