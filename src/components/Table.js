import React  from "react";
import { useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { handleDelete } from "../redux/IncomeSlice";
import { handleExpenseDelete } from "../redux/expenseSlice";

function Table(){

  const  tableDispatch = useDispatch();

  const  incomeData = useSelector(function(appState){
    return appState.IncomeReducer
})

  const  expenseData = useSelector(function(appState){
        return appState.ExpenseReducer
    })
    // console.log(tableData.incomeObj);


    return(<>
    <div className="tableDiv">
    <div className="IncomeTable commonTable">
        <table >
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Discription</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {incomeData.incomes.map(function(incValue,incIndex){
                        return <tr key={incIndex}>
                                <td >{incIndex+1}</td>
                                <td> {incValue.date} </td>
                                <td >{incValue.amount}</td> 
                                <td >{incValue.discription}</td>
                                <span>
                                <button onClick={function(){tableDispatch(handleDelete([incIndex , incValue.amount]))}}> Delete </button> 
                                </span>
                                </tr>
                    })}
            </tbody>
        </table>
        <h3>Total Income: {incomeData.totalIncome} </h3>
    </div>
    
    <div className="ExpenseTable commonTable">
        <table >
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Discription</th>
                    <th>Remove</th>

                </tr>
            </thead>
            <tbody>
                {expenseData.expenses.map(function(expValue,expIndex){
                    return <tr key={expIndex}>
                            <td> {expIndex+1} </td>
                            <td> {expValue.date} </td>
                            <td> {expValue.amount} </td>
                            <td> {expValue.discription} </td>
                            <span>
                            <button onClick={function(){tableDispatch(handleExpenseDelete([expIndex , expValue.amount]))}}>Delete</button>
                            </span>
                             </tr>;
                })}
            </tbody>
        </table>
        <h3>Total Expense: {expenseData.totalExpense} </h3>

    </div>
    </div>
    </>)
}


export default React.memo(Table);