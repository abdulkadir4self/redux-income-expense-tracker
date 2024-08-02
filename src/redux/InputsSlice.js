import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    date: '',
    amount : 0,
    discription : '',
    category : 0
}


const InputsSlice = createSlice({
    name : 'inputs',
    initialState,
    reducers : {
        setInput : function(state , action){
            state.date = action.payload.date
            state.amount = action.payload.amount;
            state.discription= action.payload.discription
            state.category = action.payload.category
            // console.log(action.payload);
            // console.log(setInput);
        },
        setDiscription : function(state , action){
            state.discription= action.payload 
            // console.log(action.payload);

        },
        setCategory : function(state , action){
            state.category = action.payload
            // console.log(action.payload);

        }
    }
})

export const {setInput ,  setDiscription , setCategory} = InputsSlice.actions
export default InputsSlice.reducer 