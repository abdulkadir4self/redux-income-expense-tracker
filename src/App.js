import logo from './logo.svg';
import './App.css';


import Elements from './components/Elements';
import Table from './components/Table';
import TotalSavings from './components/TotalSavings';
import { useEffect } from 'react';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { setSavingAmount } from './redux/SavingsIndicatorSlice';

function App() {
  
  return (
    <div className="App">
      <Elements/>
      <TotalSavings/>
      <Table/>
    </div>
  );
}

export default App;



























// const dispatch = useDispatch();
  // const savingsAction=useSelector(function(appstate){
  //   return appstate.SavingsReducer
  // })
  // useEffect(function(){
  //   dispatch(setSavingAmount())
  // },[])