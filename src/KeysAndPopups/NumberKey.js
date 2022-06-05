import React from 'react';


function NumberKey(props) {
    
    return (<button type="button" className="key typical" onClick={() => {
        if(props.numberOfChars>=200)
            return;
        props.setText(props.text.substring(0,props.cursor)+props.value+props.text.substring(props.cursor))
        props.setCursor(props.cursor+1);
        props.setNumberOfChars(props.numberOfChars+1);
    }}  >
        {props.value}
        </button>);
}
export default NumberKey;