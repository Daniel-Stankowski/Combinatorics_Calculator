import React from 'react';


function ClearKey(props) {
    
    return (<button type="button" className="key typical" onClick={() => {
        props.setText("");
        props.setCursor(0);
        props.setNumberOfChars(0);
    }}  >
        C
        </button>);
}
export default ClearKey;