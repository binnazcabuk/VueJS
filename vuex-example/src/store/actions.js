import axios from "axios"
export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult);

    let result = {
        purchase: state.purchase,
        sale: state.sale
    }
    axios.put("/trade-result.json", result)
        .then((response) => {
            console.log(response);
        });
}

export const getTradeResult = ({ commit }) => {
axios.get("/trade-result.json")
.then((response)=>{
    console.log(response);
    commit("updateTradeResult", response.data);
})
}