import React from 'react';
function BackspaceKey(props) {

    return <button type="button" className="key large" onClick={() => {
        const specialOperations = ['C','V','W'];
        if(props.cursor>0){
            if(props.text[props.cursor-3]==='P'){
                props.setText(props.text.substring(0, props.cursor-3)+props.text.substring(props.cursor));
                props.setCursor(props.cursor-3);
            }else if(specialOperations.includes(props.text[props.cursor-3])){
                props.setText(props.text.substring(0, props.cursor-5)+props.text.substring(props.cursor));
                props.setCursor(props.cursor-5);
            } else{
                props.setText(props.text.substring(0, props.cursor-1)+props.text.substring(props.cursor));
                props.setCursor(props.cursor-1);
            }
            
            }
    }} >Backspace</button>;
}

export default BackspaceKey;
