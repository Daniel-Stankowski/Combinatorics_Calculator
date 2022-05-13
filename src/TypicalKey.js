import React from 'react';


function NumberKey(props) {
    return (<button type="button" className="key typical" onClick={() => props.onClick(props.text+props.value)} >
        {props.value}
        </button>);
}
export default NumberKey;