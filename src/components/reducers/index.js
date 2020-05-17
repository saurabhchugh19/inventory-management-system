import { combineReducers } from 'redux';
import manageInventoryReducer from "../../pages/manage-inventory/reducers";

export default combineReducers({
    manageInventory: manageInventoryReducer
});