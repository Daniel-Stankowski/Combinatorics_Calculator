import React from 'react';
import NumberKey from './KeysAndPopups/NumberKey.js';
import EnterKey from './KeysAndPopups/EnterKey.js';
import BackspaceKey from './KeysAndPopups/BackspaceKey.js';
import OperationKey from './KeysAndPopups/OperationKey.js';
import ClearKey from './KeysAndPopups/ClearKey.js';
function MainPanel() {
    
    function display(){
        function special(operation,n,k){
            if(operation === 'P'){
                return <>P<span className="supsub"><sub>{n}</sub></span></>
            }else{
                return <>{operation}<span className="supsub"><sup>{n}</sup><sub>{k}</sub></span></>
            }                
        }
        let wasCursorAdded = false;
        let specialChars=['C','P','W','V'];
        let returnValue=[];
        if(text.length===0|| cursor===0){
            returnValue.push((<><span className="blinking-cursor">|</span></>));
            wasCursorAdded=true;
        }
        for(let i=0;i<text.length;i++){
            if(specialChars.includes(text[i])){
                if(text[i]!== 'P'){
                    returnValue.pop();
                    returnValue.pop();
                }
                text[i]==='P' ? returnValue.push(special(text[i],text[i+1]+text[i+2],0)) :
                returnValue.push(special(text[i],text[i-2]+text[i-1],text[i+1]+text[i+2]));
                i=i+2;
            } else{
                returnValue.push(<>{text[i]}</>);
            }
            if(i===cursor-1){
                returnValue.push(<><span className="blinking-cursor">|</span></>);
                wasCursorAdded=true;
            }
        }
        if(!wasCursorAdded){
            returnValue.push(<><span className="blinking-cursor">|</span></>);
        }
        return returnValue;
    }
    
    const [text, setText] = React.useState("");
    const [numberOfChars,setNumberOfChars] = React.useState(0);
    const [cursor, setCursor] = React.useState(0);
    const [listener, setListener] = React.useState(true);
    const numberKeys = ['0','1','2','3','4','5','6','7','8','9'];
    const operationKeys = ['.','+','-','*','/','!','(',')'];
    const combinatoricsKeys = ['nCk','Pn','nWk','nVk','leftArrow','rightArrow'];
    const numberKeysButtons = numberKeys.map(x => <NumberKey value={x} 
        text={text} setText={setText} cursor={cursor} setCursor={setCursor} numberOfChars={numberOfChars}
         setNumberOfChars={setNumberOfChars}/>);
    const operationKeysButtons = operationKeys.map(x => <NumberKey value={x} 
        text={text} setText={setText} cursor={cursor} setCursor={setCursor} numberOfChars={numberOfChars}
         setNumberOfChars={setNumberOfChars}/>);
    const combinatoricsKeysButtons = combinatoricsKeys.map(x => <OperationKey value={x}
         text={text} setText={setText} cursor={cursor} setCursor={setCursor} listeners={listener}
          setListener={setListener} numberOfChars={numberOfChars} setNumberOfChars={setNumberOfChars}/>);
    React.useEffect(()=>{
        function handleKeyDown(e){
            const specialOperations = ['C','V','W'];
            if(listener===false){
                return;
            }
            if(numberKeys.includes(e.key)||operationKeys.includes(e.key)){
                if(numberOfChars>=200){
                    return;
                }
                setText(text.substring(0,cursor)+e.key+text.substring(cursor))
                setCursor(cursor+1);
                setNumberOfChars(numberOfChars+1);
            } else if(e.code==='Backspace'){
                if(cursor>0){
                if(text[cursor-3]==='P'){
                    setText(text.substring(0, cursor-3)+text.substring(cursor));
                    setCursor(cursor-3);
                }else if(specialOperations.includes(text[cursor-3])){
                    setText(text.substring(0, cursor-5)+text.substring(cursor));
                    setCursor(cursor-5);
                } else{
                    setText(text.substring(0, cursor-1)+text.substring(cursor));
                    setCursor(cursor-1);
                }
                setNumberOfChars(numberOfChars-1);
                }
                
            } else if(e.code==='ArrowLeft'){
                if(cursor>0){
                    if(text[cursor-3]==='P'){
                        setCursor(cursor-3);
                    }else if(specialOperations.includes(text[cursor-3])){
                        setCursor(cursor-5);
                    } else{
                        setCursor(cursor-1);
                    } 
                }
            } else if(e.code==='ArrowRight'){
                if(cursor<text.length){
                    if(text[cursor]==='P'){
                        setCursor(cursor+3);
                    }else if(specialOperations.includes(text[cursor+2])){
                        setCursor(cursor+5);
                    } else{
                        setCursor(cursor+1);
                    }
                }
            }
            
        }
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        }
    });
    return (<div className="main-panel" >
                <div className="display">
                {/*<h1>(<span class="supsub"><sup>2</sup><sub>1</sub></span>)</h1>*/}
                <h1>{display()}</h1>
                </div>
                <div className="keyboard"> 
                    {numberKeysButtons}
                    <div className="spacing"></div>
                    {operationKeysButtons}
                    <ClearKey text={text} cursor={cursor} setText={setText} setCursor={setCursor}
                    numberOfChars={numberOfChars} setNumberOfChars={setNumberOfChars} />
                    <div className="spacing"></div>
                    <EnterKey text={text} />
                    {combinatoricsKeysButtons}
                    <BackspaceKey text={text} setText={setText} cursor={cursor} setCursor={setCursor} />
                </div>
            </div>
    );
}

export default MainPanel;