import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "./component";
import { getInventoryTypes } from './actions';

const mapStateToProps = ({
    header: { inventoryTypes }
}) => ({
    inventoryTypes
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getInventoryTypesConnect: getInventoryTypes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
