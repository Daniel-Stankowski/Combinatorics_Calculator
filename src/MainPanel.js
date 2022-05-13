import React from 'react';
import TypicalKey from './TypicalKey.js';
import EnterKey from './EnterKey.js';
import BackspaceKey from './BackspaceKey.js';

function MainPanel() {
    const [text, setText] = React.useState(" ");
    //const [cursor, setCursor] = React.useState(1);
    const numberKeys = ['1','2','3','4','5','6','7','8','9'];
    const operationKeys = ['.','+','-','*','/','!','(',')'];
    const combinatoricsKeys = ['nCk','Pn','nWk','nVk','C'];
    const numberKeysButtons = numberKeys.map(x => <TypicalKey value={x} text={text} onClick={setText}/>);
    const operationKeysButtons = operationKeys.map(x => <TypicalKey value={x} text={text} onClick={setText}/>);
    const combinatoricsKeysButtons = combinatoricsKeys.map(x => <TypicalKey value={x} text={text} onClick={setText}/>);
    return (<div className="main-panel">
                <div className="display">
                    <h1>{text}</h1>
                </div>
                <div className="keyboard"> 
                    {numberKeysButtons}
                    <div className="spacing"></div>
                    {operationKeysButtons}
                    <div className="spacing"></div>
                    <EnterKey />
                    {combinatoricsKeysButtons}
                    <BackspaceKey text={text} onClick={setText} />
                </div>
            </div>
    );
}
export default MainPanel;