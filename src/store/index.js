import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import firebase from 'firebase';
import router from '@/router';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search',
    user: null,
    isAuthenticated: false,
    userRecipes: []
  },
  getters: {
    isAuthenticated(state) {
        return state.user !== null && state.user !== undefined;
    }
},
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
  },
    setUser(state, payload) {
    state.user = payload;
},
    setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
},
setUserRecipes(state, payload) {
    state.userRecipes = payload;
}
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
          let response = await axios.get(`${state.apiUrl}`, {
              params: {
                  q: plan,
                  app_id: '5b6623d5',
                  app_key: '46674aa2193dbb7b88ffd897331e661a',
                  from: 6,
                  to: 14
              }
          });
          commit('setRecipes', response.data.hits);
      } catch (error) {
          commit('setRecipes', []);
      }
  },
  userJoin({ commit }, { email, password }) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);
            router.push('/');
         })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            alert("Register fail, check Email or Password again !")
        });
},
 userLogin({ commit }, { email, password }) {
  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/Menu');
          
      })
      .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          alert("Login fail, check Email or Password again !")
      });
      console.log(sessionStorage)
},
userSignOut({ commit }) {
    firebase
        .auth()
        .signOut()
        .then(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            sessionStorage.clear()
            
            router.push('/');
        })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            sessionStorage.clear()
            router.push('/');
        });
},
addRecipe({ state }, payload) {
    firebase
        .database()
        .ref('users')
        .child(state.user.user.uid)
        .push(payload.recipe.label);
},
getUserRecipes({ state, commit }) {
    return firebase
        .database()
        .ref('users/' + state.user.user.uid)
        .once('value', snapshot => {
            commit('setUserRecipes', snapshot.val());
        });
},
 removeRecipe({ state,commit }, payload ) {
      firebase
        .database()
        .ref('users')
        .child(state.user.user.uid)
        .child(payload)
        .remove()

    return firebase
        .database()
        .ref('users/' + state.user.user.uid)
        .once('value', snapshot => {
            commit('setUserRecipes', snapshot.val());
        });
}


}
});