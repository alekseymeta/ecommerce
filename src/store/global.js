export const global = {
    state: () => ({
        openSideMenu: false
    }),
    getters: {
        openSideMenu: s => s.openSideMenu
    },
    mutations: {
        SET_OPENSIDEMENU(state, openSideMenu) {
            state.openSideMenu = openSideMenu
        }
    },
    actions: {
    }
}