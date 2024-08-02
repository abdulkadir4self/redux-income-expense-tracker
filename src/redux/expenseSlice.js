import { createSlice } from "@reduxjs/toolkit";
// import InputReducer from './InputsSlice'
const initialState = {
    expenses: [],
    totalExpense: 0,
    // srNo : 1,
    // expenseAmount : 0,
    // expenseDiscription : '' 
}

const ExpenseSlice = createSlice({
    name : 'expense',
    initialState,
    reducers: {
        handleExpenses : function(state , action){
            state.expenses.push(action.payload)
        },
        handleTotalExpense : function(state , action){
            state.totalExpense = parseInt(state.totalExpense) + parseInt(action.payload)
        },
        handleExpenseDelete : function(state , action){
            state.expenses.splice(action.payload[0], 1)
            state.totalExpense = parseInt(state.totalExpense) - parseInt(action.payload[1])
    }
}
})

export const {handleExpenses , handleTotalExpense ,handleExpenseDelete} = ExpenseSlice.actions;
export default ExpenseSlice.reducer