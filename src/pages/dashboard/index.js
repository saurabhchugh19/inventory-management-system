import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Dashboard from "./component";
import withLayout from "../../components/layout/component";
import { getItems, addItem } from "./actions";

const mapStateToProps = ({
    manageInventory: { data: inventoryData },
    dashboard: { data }
}) => ({
    inventoryData,
    data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getItemsConnect: getItems,
    addItemConnect: addItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Dashboard));
