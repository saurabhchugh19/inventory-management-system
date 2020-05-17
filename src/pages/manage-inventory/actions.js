import Types from "./types";
import getFromLocalStorage from "../../helpers/get-from-local-storage";
import { INVENTORY_TYPES_DATA } from "../../components/constants/app-constants";

const getInventoryTypesData = () => dispatch => {
    const dataList = JSON.parse(getFromLocalStorage(INVENTORY_TYPES_DATA)) || [];
    dispatch(getInventoryTypesDataSuccess(dataList));
};

const getInventoryTypesDataSuccess = (data) => ({
    type: Types.GET_INVENTORY_TYPES_DATA_SUCCESS,
    data
});

const addInventoryType = (data) => ({
    type: Types.ADD_INVENTORY_TYPE,
    data
});

const updateInventoryType = (data) => ({
    type: Types.UPDATE_INVENTORY_TYPE,
    data
});

const resetManageInventoryByKey = (key, value) => ({
    type: Types.RESET_MANAGE_INVENTORY_BY_KEY,
    data: { key, value }
});

export {
    getInventoryTypesData,
    addInventoryType,
    updateInventoryType,
    resetManageInventoryByKey
};
