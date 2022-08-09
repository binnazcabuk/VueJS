import { createStore } from "vuex";
import axios from "axios";
const store = createStore({

    state: {
        token: "",
        apiKey: "AIzaSyCtCrj2V2UNSEuXqDbrNrh__xjmpEW2YqM",
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        login({ commit, dispatch, state }, data) {
            axios
                .post(
                    "",
                    {
                        userName: data.email,
                        password: data.password
                    }
                )
                .then((resp) => {
                    commit("setToken", resp.data.item1)
                    console.log(resp.data);
                    console.log(state.token);
                });
        },
        logout({ commit, dispatch, state }) {
            commit("clearToken");
        }
    },
    getters: {


    }
})

export default store; 