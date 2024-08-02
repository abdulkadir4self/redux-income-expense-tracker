
import React , {useEffect, useState} from "react";

import { UseDispatch,useDispatch,useSelector } from "react-redux";


function TotalSavings(){
    const savingDispatch = useDispatch()
    const IncomeReducerSelector = useSelector((appstate)=>{
        return appstate.IncomeReducer
    })

    const ExpenseReducerSelector = useSelector((appstate)=>{
        return appstate.ExpenseReducer
    })
    
    
    return (<>
    
    <h1 className="saving">Total Savings : {IncomeReducerSelector.totalIncome - ExpenseReducerSelector.totalExpense} </h1> 
    
    </>)
}

export default React.memo(TotalSavings)






















//console.log(SavingsReducerSelector);

    // const [savingState, setSavingState] = useState({SavingsReducerSelector})
    
    // const handleSavings = setSavingState({
    //     ...savingState,
    //     savingAmount : IncomeReducerSelector.totalIncome - ExpenseReducerSelector.totalExpense 
    // })
    
    // useEffect(function(){
    //     savingDispatch(setSavingAmount( {first:IncomeReducerSelector.totalIncome ,second: ExpenseReducerSelector.totalExpense} ))
    // },[IncomeReducerSelector , ExpenseReducerSelector])


    // //console.log(savingDispatch(setSavingAmount( IncomeReducerSelector.totalIncome , ExpenseReducerSelector.totalExpense ))
    //             );  
    
    // {SavingsReducerSelector.messages}
    // {SavingsReducerSelector.savingAmount} in the h1. shows the amount one value before the current one.

    // const SavingsReducerSelector = useSelector((appstate)=>{
        //         return appstate.SavingsReducer
        //     })
        // console.log(IncomeReducerSelector.totalIncome , ExpenseReducerSelector.totalExpense , SavingsReducerSelector);