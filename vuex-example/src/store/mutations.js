export const updateTradeResult = (state, value) => {
    if (value.count) {
        state.purchase += parseFloat(value.purchase) * parseInt(value.count);
        state.sale += parseFloat(value.sale) * parseInt(value.count);
    }
    else {
        state.purchase += parseFloat(value.purchase);
        state.sale += parseFloat(value.sale);
    }
    state.balance += parseFloat(state.sale) - parseInt(state.purchase);
}