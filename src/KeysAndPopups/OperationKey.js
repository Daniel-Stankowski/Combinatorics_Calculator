import React from 'react';
import Popup from './Popup.js'
function OperationKey(props) {
    const [visibility,setVisibility] = React.useState(false);
    const popupCloseHandler = () => {
        setVisibility(false);
        props.setListener(true);
    };
    return (<><Popup onClose={popupCloseHandler} show={visibility}
        howManyArguments={props.value.length>3?0:props.value.length-1} value={props.value}
        text={props.text} setText={props.setText} cursor={props.cursor} setCursor={props.setCursor}
        numberOfChars={props.numberOfChars} setNumberOfChars={props.setNumberOfChars}
        />
        <button type="button" className={"key typical "+props.value} onClick={() => 
    {
        const specialOperations = ['C','V','W'];
        if(props.value==='rightArrow'){
            if(props.cursor<props.text.length){
                if(props.text[props.cursor]==='P'){
                    props.setCursor(props.cursor+3);
                }else if(specialOperations.includes(props.text[props.cursor+2])){
                    props.setCursor(props.cursor+5);
                } else{
                    props.setCursor(props.cursor+1);
                }
            }
        } else if(props.value==='leftArrow'){
            if(props.cursor>0){
                if(props.text[props.cursor-3]==='P'){
                    props.setCursor(props.cursor-3);
                }else if(specialOperations.includes(props.text[props.cursor-3])){
                    props.setCursor(props.cursor-5);
                } else{
                    props.setCursor(props.cursor-1);
                }
            }
        } else if(props.value==='nCk'){
            props.setListener(false);
            setVisibility(true);
        } else if(props.value==='Pn'){
            props.setListener(false);
            setVisibility(true);
        } else if(props.value==='nVk'){
            props.setListener(false);
            setVisibility(true);
        } else if(props.value==='nWk'){
            props.setListener(false);
            setVisibility(true);
        }
    }}  >
        
        </button></>);
}
export default OperationKey;