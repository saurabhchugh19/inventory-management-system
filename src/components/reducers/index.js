import { combineReducers } from 'redux';
import manageInventoryReducer from "../../pages/manage-inventory/reducers";
import dashboardReducer from "../../pages/dashboard/reducers";

export default combineReducers({
    manageInventory: manageInventoryReducer,
    dashboard: dashboardReducer
});