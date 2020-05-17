import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);
