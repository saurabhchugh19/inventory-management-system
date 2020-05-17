import Types from "./types";
import getFromLocalStorage from "../../helpers/get-from-local-storage";
import { ITEMS_LIST } from "../../components/constants/app-constants";

const getItems = () => dispatch => {
    const dataList = JSON.parse(getFromLocalStorage(ITEMS_LIST)) || [];
    dispatch(getItemsSuccess(dataList));
};

const getItemsSuccess = (data) => ({
    type: Types.GET_ITEMS_SUCCESS,
    data
});

const addItem = (data) => ({
    type: Types.ADD_ITEM,
    data
});

const setByKey = (key, value) => ({
    type: Types.SET_BY_KEY,
    data: { key, value }
});

export {
    getItems,
    addItem,
    setByKey
};
