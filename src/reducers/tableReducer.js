
import { types } from "../types/types";

const initialState = {
    table: [],
    active: null
}

export const tableReducer = ( state = initialState, action ) => {
    switch ( action.type ){

        case  types.detailsTable:
            return {
                ...state,
                table: action.payload
            }

        default: 
            return state; 
    }
}