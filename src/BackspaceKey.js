import React from 'react';
function BackspaceKey(props) {

    return <button type="button" className="key large" onClick={() => props.onClick(props.text.substring(0,props.text.length-1))} >Backspace</button>;
}

export default BackspaceKey;
