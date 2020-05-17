import { createReducer } from "reduxsauce";
import Types from "./types";

export const INITIAL_STATE = {
    inventoryTypes: []
};

export const getInventoryTypesSuccess = (state = INITIAL_STATE, { data } ) => {
    const inventoryTypes = data && data.length ? data : state.inventoryTypes;
    return { ...state, inventoryTypes };
};

export const HANDLERS = {
    [Types.GET_INVENTORY_TYPES_SUCCESS]: getInventoryTypesSuccess,

};

export default createReducer(INITIAL_STATE, HANDLERS);
