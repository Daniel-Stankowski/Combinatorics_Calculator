import React from 'react';
import TypicalKey from './TypicalKey.js';
import EnterKey from './EnterKey.js';
import BackspaceKey from './BackspaceKey.js';
const numberKeys = ['1','2','3','4','5','6','7','8','9'];
const operationKeys = ['.','+','-','*','/','!','(',')'];
const combinatoricsKeys = ['nCk','Pn','nWk','nVk','C'];
const numberKeysButtons = numberKeys.map(x => <TypicalKey value={x} />);
const operationKeysButtons = operationKeys.map(x => <TypicalKey value={x}/>);
const combinatoricsKeysButtons = combinatoricsKeys.map(x => <TypicalKey value={x}/>);
function Keyboard() {
    return (<div className="keyboard"> 
    {numberKeysButtons}
    <div className="spacing"></div>
    {operationKeysButtons}
    <div className="spacing"></div>
    <EnterKey />
    {combinatoricsKeysButtons}
    <BackspaceKey />
     </div>
    );
}
export default Keyboard;