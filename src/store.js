import { createStore } from 'vuex';

export default createStore({
  state: {
    
  },
  mutations: {
    updateSharedData(state, newData) {
      state.sharedData = newData;
    }

  }
});
