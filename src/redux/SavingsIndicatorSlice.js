import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messages : 'No Entries Yet',
    savingAmount : 0,
}

const SavingsIndicatorSlice = createSlice({
        name : 'savings Indicator',
        initialState,
        reducers: {
            setSavingAmount : function(state , action){
                state.savingAmount = parseInt(action.payload[0]) - parseInt(action.payload[1])
                // console.log(action.payload);
                },
                addSaving :function(state, action){
                    state.savingAmount =state.savingAmount + action.payload; 
                },
                
                deleteSaving :function(state, action){
                    state.savingAmount =state.savingAmount - action.payload; 
                },
            setmessages : function(state , action){
                if(state.savingAmount <=5000){
                    state.messages = 'You Need To Save More'
                }
                else if(state.savingAmount > 10000){
                    state.messages = 'savings Looking Good'
                }
                else if(state.savingAmount > 100000){
                    state.messages = 'Bas Kar Bhai Kitna Kamaiga'
                }
                
            },
            

        }

})

export const {setmessages , setSavingAmount,addSaving, deleteSaving} = SavingsIndicatorSlice.actions;
export default SavingsIndicatorSlice.reducer;