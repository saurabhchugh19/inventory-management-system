import { createReducer } from "reduxsauce";
import Types from "./types";
import saveToLocalStorage from "../../helpers/save-to-local-storage";
import { INVENTORY_TYPES_DATA } from "../../components/constants/app-constants";

export const INITIAL_STATE = {
    data: []
};

export const getInventoryTypesDataSuccess = (state = INITIAL_STATE, { data } ) => {
    const dataList = data && data.length ? data : state.data;
    return { ...state, data: dataList };
};

export const addInventoryType = (state = INITIAL_STATE, { data }) => {
    const dataList = state.data.concat(data);
    saveToLocalStorage(INVENTORY_TYPES_DATA, JSON.stringify(dataList));
    return { ...state, data: dataList };
};

export const updateInventoryType = (state = INITIAL_STATE, { data }) => {
    saveToLocalStorage(INVENTORY_TYPES_DATA, JSON.stringify(data));
    return { ...state, data };
};

export const HANDLERS = {
    [Types.GET_INVENTORY_TYPES_DATA_SUCCESS]: getInventoryTypesDataSuccess,
    [Types.ADD_INVENTORY_TYPE]: addInventoryType,
    [Types.UPDATE_INVENTORY_TYPE]: updateInventoryType,
};

export default createReducer(INITIAL_STATE, HANDLERS);
