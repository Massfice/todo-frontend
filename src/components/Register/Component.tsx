import React from 'react';
import { connect } from "react-redux";
import RegisterStateFunction from "./RegisterStateFunction";
import RegisterDispatchFunction from "./RegisterDispatchFunction";

const Component = (props: any) => {
    return (
        <div key="register">Chuj</div>
    )
}

export default connect(RegisterStateFunction, RegisterDispatchFunction)(Component);