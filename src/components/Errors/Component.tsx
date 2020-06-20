import React, { useEffect } from 'react';
import { connect } from "react-redux";
import ErrorsStateFunction from "./ErrorsStateFunction";
import ErrorsDispatchFunction from "./ErrorsDispatchFunction";

const Component = (props: any) => {

    let errors = props.errors.map((value: string, index: number) => {
        let key = 'error_' + index;

        return (
            <div key={key}>{value}</div>
        )
    });

    useEffect(() => {
        return function cleanup() {
            props.handleCleanupErrors();
        }; // eslint-disable-next-line
    },[]);
    
    return (
        <div key="errors">
            {errors}
        </div>
    );
}

export default connect(ErrorsStateFunction, ErrorsDispatchFunction)(Component);