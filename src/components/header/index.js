import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "./component";
import { getInventoryTypesData, resetManageInventoryByKey } from '../../pages/manage-inventory/actions';
import { setByKey } from "../../pages/dashboard/actions";

const mapStateToProps = ({
    manageInventory: { data: inventoryData, isChanged }
}) => ({
    inventoryData,
    isChanged
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getInventoryTypesDataConnect: getInventoryTypesData,
    resetManageInventoryByKeyConnect: resetManageInventoryByKey,
    setByKeyConnect: setByKey
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
