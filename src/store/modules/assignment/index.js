import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import properties from './properties';

// initial state
const state = properties.getProperties();

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};