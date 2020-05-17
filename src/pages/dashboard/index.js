import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Dashboard from "./component";
import withLayout from "../../components/layout/component";
import { getItems, addItem, setByKey } from "./actions";

const mapStateToProps = ({
    manageInventory: { data: inventoryData },
    dashboard: { data, filterType }
}) => ({
    inventoryData,
    data,
    filterType
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getItemsConnect: getItems,
    addItemConnect: addItem,
    setByKeyConnect: setByKey
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Dashboard));
