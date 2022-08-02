export const getTradeResult = (state) => {
    return {
        purchase:parseFloat(state.purchase).toLocaleString(undefined,{minimumFractionDigits:2})+"TL",
        sale:parseFloat(state.sale).toLocaleString(undefined,{minimumFractionDigits:2})+"TL", 
        balance: parseFloat(state.balance).toLocaleString(undefined,{minimumFractionDigits:2})+"TL",
    }
}