import { createSlice } from '@reduxjs/toolkit';


const ValueLink = {
    LinkSelect: 'home'   
    }


const ActiveLinkLogic = createSlice({

    name: 'counter',
    initialState:{
    value: ValueLink.LinkSelect   
    },


    reducers:{

        ChangeByPayload: (state, action) => {
        state.value = action.payload    
        }
    }

});


export const {ChangeByPayload} = ActiveLinkLogic.actions

export default ActiveLinkLogic.reducer