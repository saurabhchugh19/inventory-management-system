import { createReducer } from "reduxsauce";
import Types from "./types";
import saveToLocalStorage from "../../helpers/save-to-local-storage";
import { ITEMS_LIST } from "../../components/constants/app-constants";

export const INITIAL_STATE = {
    data: [],
    filterType: 'All'
};

export const getItemsSuccess = (state = INITIAL_STATE, { data } ) => {
    const dataList = data && data.length ? data : state.data;
    return { ...state, data: dataList };
};

export const addItem = (state = INITIAL_STATE, { data }) => {
    const dataList = state.data.concat(data);
    saveToLocalStorage(ITEMS_LIST, JSON.stringify(dataList));
    return { ...state, data: dataList };
};

export const setByKey = (state = INITIAL_STATE, { data }) => {
    const { key, value } = data;
    return { ...state, [key]: value };
};

export const HANDLERS = {
    [Types.GET_ITEMS_SUCCESS]: getItemsSuccess,
    [Types.ADD_ITEM]: addItem,
    [Types.SET_BY_KEY]: setByKey

};

export default createReducer(INITIAL_STATE, HANDLERS);
