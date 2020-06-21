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

    let handleCleanupErrors = props.handleCleanupErrors;
    // useEffect(() => {
    //     return function cleanup() {
    //         if(props.errors.length > 0) {
    //             handleCleanupErrors();
    //         }
    //     };  // eslint-disable-next-line
    // },[]);

    // eslint-disable-next-line
    useEffect( () => () => handleCleanupErrors(), [] );
    
    return (
        <div key="errors">
            {errors}
        </div>
    );
}

export default connect(ErrorsStateFunction, ErrorsDispatchFunction)(Component);