import React, { useEffect } from 'react';

function Popup(props){
    let operation = props.howManyArguments===2 ? props.value[1] : props.value[0];
    function kInput(){
        return props.howManyArguments===2 ? <><h1>k</h1><input type="number" id={"k"+operation} className="popup-input"></input></>:"";
    }
    const [show,setShow] = React.useState(false);
    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
        let n=document.getElementById(('n'+operation)).value.substring(0,2);
        document.getElementById(('n' +operation)).value="";
        let nIntValue=parseInt(n);
        if(nIntValue<0||isNaN(nIntValue)){
            n="0";
        }
        if(n.length===1){
            n=" "+n;
        }
        
        let k="";
        if(props.howManyArguments===2){
            k=document.getElementById(('k'+operation)).value.substring(0,2);
            document.getElementById(('k'+operation)).value="";
            let kIntValue=parseInt(k);
            if(kIntValue<0||isNaN(kIntValue)){
                k="0";
            }
            if((operation==='C'  || operation==='V')&&kIntValue>nIntValue){
                k=n;
            }
            if(k.length===1){
                k=" "+k;
            }
        }
        
        props.howManyArguments===2 ? 
        props.setText(props.text.substring(0,props.cursor)+n+operation+k+props.text.substring(props.cursor)) :
        props.setText(props.text.substring(0,props.cursor)+operation+n+props.text.substring(props.cursor))
        props.setCursor(props.cursor+props.howManyArguments*2+1);
    }
    useEffect(() => {
        setShow(props.show);
    }, [props.show]);
    return (<div className="popup" style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0'
    }}>
        <div className="popup-inner">
            <form className="popup-form">
                <label className="popup-label">
                <h1>n</h1>
                <input type="number" id={"n"+operation} className="popup-input" min="0" max="20" step="1"></input>
                {kInput()}
                </label>
            </form>
            <button className="popup-btn" onClick={closeHandler}>Enter</button>
        </div>
    </div>);
}
export default Popup;