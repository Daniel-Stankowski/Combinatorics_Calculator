import React from 'react';
import AnwserPopup from './AnwserPopup.js'
import {create, all} from 'mathjs'
function EnterKey(props) {
    const config = {};
    const math = create(all,config);
    const parser = math.parser();
    const [anwser,setAnwser] = React.useState("");
    const [visibility,setVisibility] = React.useState(false);
    const popupCloseHandler = () => {
        setVisibility(false);
    }
    
    function calculateValue(){
        let valueToParse = "";
        for(let i = 0; i < props.text.length; i++) {
            let specialChars=['C','V','W'];
            if(props.text[i]==='P'){
                valueToParse+=props.text[i+1]+props.text[i+2]+'!';
                i=i+2;
            } else if(specialChars.includes(props.text[i])){
                    valueToParse=valueToParse.substring(0,valueToParse.length-2);
                    if(props.text[i]==='C'){
                    valueToParse+='combinations('+props.text[i-2]+props.text[i-1]+','+props.text[i+1]+props.text[i+2]+')';
                } else if(props.text[i]==='W'){
                    valueToParse+=props.text[i-2]+props.text[i-1]+'^'+props.text[i+1]+props.text[i+2];
                } else if(props.text[i]==='V'){
                    valueToParse+='permutations('+props.text[i-2]+props.text[i-1]+','+props.text[i+1]+props.text[i+2]+')';
                }
                i=i+2;
            } else{
                valueToParse+=props.text[i];
            }
        
    }
        setVisibility(true);
        let tryAnwser;
        try{
            tryAnwser =parser.evaluate(valueToParse);
        } catch(error){

        }
        setAnwser(tryAnwser);
    }
    return <><AnwserPopup show={visibility} onClose={popupCloseHandler} anwser={anwser}/><button type="button" className="key large" onClick={calculateValue}>Enter</button></>;
}

export default EnterKey;
