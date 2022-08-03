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
        return key => state.products.filter(e => {
            return e.key == key;
        })
    }
}
const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}
const actions = {
    initApp({ commit }, product) {
        axios.get("/products.json")
            .then((response) => {
                let data = response.data;
                for (let key in data) {
                    data[key].key = key;
                    data[key].price = parseFloat(data[key].price).toLocaleString(undefined, { minimumFractionDigits: 2 }) + "TL"
                    commit("updateProductList", data[key]);
                }
            })
    },
    saveProduct({ dispatch, commit }, value) {
        axios.post("/products.json", value)
            .then((response) => {
                //*** Ürün Listesi Güncelleme ***/
                commit("updateProductList", value)
                console.log(state.products)
                /** Alış-Satış Bakiye Bilgilerinin Güncellenmesi */
                let tradeResult = {
                    purchase: value.price,
                    sale: 0,
                    count: value.count
                }
                dispatch("setTradeResult", tradeResult)
                router.replace("/");
            })
    },
    sellProduct({ commit,state,dispatch }, value) {

        let product=state.products.filter(element=>{
            return element.key == value.key;
        })
        if(product){
            let totalcount=product[0].count - value.count;
            axios.patch("/products/" + value.key + ".json", { count:totalcount})
            .then(ressponse =>{
                product[0].count =totalcount;
                let tradeResult = {
                    purchase: 0,
                    sale: product[0].price,
                    count: value.count
                }
                dispatch("setTradeResult", tradeResult)
                router.replace("/");
            })
        }
      
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}