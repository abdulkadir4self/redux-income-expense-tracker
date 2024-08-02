import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    incomes : [],
    totalIncome: 0
    // srNo : 1,
    // incomeAmount : 0,
    // incomeDiscription : '' 
}

const IncomeSlice = createSlice({
    name : 'income',
    initialState,
    reducers: {
        handleIncomes : function(state , action){
            state.incomes.push(action.payload);
        },
        handleTotalIncome : function(state , action){
        state.totalIncome = parseInt(state.totalIncome) + parseInt(action.payload)
        
    },
        handleDelete : function(state , action){
            state.incomes.splice(action.payload[0] , 1)
            state.totalIncome = parseInt(state.totalIncome) - parseInt(action.payload[1])
            // console.log( action.payload);
    }
}
})

export const {handleIncomes , handleTotalIncome , handleDelete} = IncomeSlice.actions
export default IncomeSlice.reducer;