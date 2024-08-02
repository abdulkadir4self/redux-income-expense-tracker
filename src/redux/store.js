import { configureStore } from "@reduxjs/toolkit";


import InputReducer from './InputsSlice';
import SavingsReducer from './SavingsIndicatorSlice';
import IncomeReducer from './IncomeSlice';
import ExpenseReducer from './expenseSlice'




const store = configureStore({
    reducer : {
        InputReducer , 
        SavingsReducer,
        IncomeReducer,
        ExpenseReducer,
    }
})

export default store;