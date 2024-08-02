import { UseDispatch , useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {setInput , setDiscription , setCategory} from '../redux/InputsSlice';
import { handleIncomes , handleTotalIncome } from "../redux/IncomeSlice";
import { handleExpenses, handleTotalExpense } from "../redux/expenseSlice";
import { setSavingAmount } from "../redux/SavingsIndicatorSlice";
import { addSaving, deleteSaving } from "../redux/SavingsIndicatorSlice"; 

function Elements(){
    const elementsDispatch = useDispatch();
    const elementsData = useSelector(function(appstate){
        return appstate.InputReducer;
    })
    const incomeData = useSelector(function(appstate){
        return appstate.IncomeReducer;
    })
    const expenseData = useSelector(function(appState){
        return appState.ExpenseReducer
    })
    const savingsData = useSelector(function(appState){
        return appState.SavingsReducer
    })
//console.log(elementsData , incomeData , expenseData , savingsData);

const [inputState , setInputState] = useState({
    date: '',
    amount: '',
    discription : '',
    category : '',
})

const handleInputchanges = function(e){
    //console.log(e.target.value);
    setInputState({
        ...inputState,
        [e.target.name] : e.target.value
    }) 
}
const newEntry = {}
newEntry.date = inputState.date
newEntry.amount = parseInt(inputState.amount)
newEntry.discription = inputState.discription
newEntry.category = parseInt(inputState.category)
//console.log(newEntry);

const addDetails = ()=>{
    elementsDispatch(setInput(newEntry))
    if(inputState.category == 1){
    
    elementsDispatch(handleIncomes(newEntry))
    elementsDispatch(handleTotalIncome(inputState.amount))
    elementsDispatch(addSaving(inputState.amount));

    }
    else if(inputState.category == 2){
        elementsDispatch(handleExpenses(newEntry))
        elementsDispatch(handleTotalExpense(inputState.amount))
        elementsDispatch(deleteSaving(inputState.amount))
    }

    elementsDispatch(setSavingAmount([incomeData.totalIncome , expenseData.totalExpense]))
    
    setInputState({
    date: '',
    amount: '',
    discription : '',
    category : '',
    })
}

    return(<>
    <input type="date" name="date" value={inputState.date} onChange={handleInputchanges} />
    <input name="amount"  placeholder="Enter Amount" value={inputState.amount} onChange={handleInputchanges} />
    <input name="discription" placeholder="Enter Discription" value={inputState.discription} onChange={handleInputchanges} />
    <select name="category" value={inputState.category} onChange={handleInputchanges}>
        <option value={0}>Select category</option>
        <option value={1}>Income</option>
        <option value={2}> Expense </option>
    </select>
    <button onClick={addDetails}> Entry </button>
    </>)
}
export default React.memo(Elements);