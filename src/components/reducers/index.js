import { combineReducers } from 'redux';
import headerReducer from "../header/reducers";
import manageInventoryReducer from "../../pages/manage-inventory/reducers";

export default combineReducers({
    header: headerReducer,
    manageInventory: manageInventoryReducer
});