import Types from "./types";
import getFromLocalStorage from "../../helpers/get-from-local-storage";
import { INVENTORY_TYPES } from "../constants/app-constants";

const getInventoryTypes = () => dispatch => {
    const inventoryTypes = JSON.parse(getFromLocalStorage(INVENTORY_TYPES)) || [];
    dispatch(getInventoryTypesSuccess(inventoryTypes));
};

const getInventoryTypesSuccess = (data) => ({
    type: Types.GET_INVENTORY_TYPES_SUCCESS,
    data
});

export {
    getInventoryTypes
};
