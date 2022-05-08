import React from 'react';

function NumberKey(props) {
    let click = () => {
        console.log(props.value);
    }
    return <button type="button" className="key typical" onClick={click}>{props.value}</button>;
}
export default NumberKey;