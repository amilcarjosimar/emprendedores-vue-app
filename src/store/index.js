import { createStore } from "vuex";
export default createStore({
  state: {
    items: [],
  },
  mutations: {
    pushItem(state, item) {
      state.items.push(item);
    },
   
  },
  actions: {
    pushItem({commit},item) {
      return commit('pushItem',item);
    }
    ,
    getItems({state}) {
      return state.items;
    },
    filterItems({state}, search) {
      let query = search.toLowerCase();
      return state.items.findIndex((item) =>
        item.name.toLowerCase().includes(query)
      );
    },
    filterDeals({state}) {
      return state.items.findIndex((item) => item.deal == true);
    },
  },
});
