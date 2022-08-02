import axios from "axios";
import router from "@/router"
const state = {
    products: []

}
const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {

    }
}
const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}
const actions = {
    initApp({ commit }, product) {

    },
    saveProduct({dispatch, commit }, value) {
        axios.post("/products.json", value)
            .then((response) => {
                //*** Ürün Listesi Güncelleme ***/
                commit("updateProductList", value)
                console.log(state.products)
                /** Alış-Satış Bakiye Bilgilerinin Güncellenmesi */
                let tradeResult={
                    purchase:value.price,
                    sale:0,
                   count:value.count
                }
                dispatch("setTradeResult",tradeResult)
                router.replace("/");
            })
    },
    sellProduct({ commit }, value) {

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}