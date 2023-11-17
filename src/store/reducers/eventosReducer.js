import {createReducer} from '@reduxjs/toolkit'
import eventosActions from '../actions/eventosActions'

const initialState = []

const eventosReducer = createReducer(initialState, (builder) => {
    return builder.addCase(eventosActions.get_eventos.fulfilled, (state, action) => {
        console.log(action);
        let newState = action.payload

        return newState
    })
})

export default eventosReducer