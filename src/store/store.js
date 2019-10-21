import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


export default new Vuex.Store({
    state: {
        jwt: localStorage.getItem('t'),
        endpoints: {
            obtainJWT: 'http://127.0.0.1:8000/auth/obtain_token/',
            refreshJWT: 'http://127.0.0.1:8000/auth/refresh_token/'
        }
    },
    mutations: {
        updateToken: (state, newToken)=>{
            localStorage.setItem('t', newToken);
            state.jwt = newToken;
            console.log(newToken);
        },
        removeToken(state){
            localStorage.removeItem('t');
            state.jwt = null;
        }
    },
    actions: {
        obtainToken: (context, payload)=>{
            console.log(payload.password);
            console.log(payload.username);
            console.log(context);
            const data = {
                username: payload.username,
                password: payload.password
            };
            axios.post(context.state.endpoints.obtainJWT, data)
                .then((response) => {
                    console.log(response.data.token);
                    context.commit('updateToken', response.data.token);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        refreshToken() {
            const payload = {
                token: this.state.jwt
            };
            axios.post(this.state.endpoints.refreshJWT, payload)
                .then((response) => {
                    this.commit('updateToken', response.data.token)
                })
                .catch((error) => {
                    console.log(error)
                })

        }
    }
});