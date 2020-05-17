import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Dashboard from "./component";
import withLayout from "../../components/layout/component";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(Dashboard));
