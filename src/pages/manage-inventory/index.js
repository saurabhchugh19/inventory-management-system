import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ManageInventory from "./component";
import { getInventoryTypesData, addInventoryType, updateInventoryType, removeInventoryType } from './actions';
import withLayout from "../../components/layout/component";

const mapStateToProps = ({
    manageInventory: { data }
}) => ({
    data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getInventoryTypesDataConnect: getInventoryTypesData,
    addInventoryTypeConnect: addInventoryType,
    updateInventoryTypeConnect: updateInventoryType,
    removeInventoryTypeConnect: removeInventoryType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(ManageInventory));
