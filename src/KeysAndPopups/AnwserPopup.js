import React, {useEffect} from 'react';
function AnwserPopup(props) {
    
    const [show,setShow] = React.useState(false);
    const closeHandler = (e)  => {
        setShow(false);
        props.onClose(false);
        props.setError(false);
    }
    useEffect(()=>{
        setShow(props.show);
    }, [props.show]);
    let valueToDisplay= props.error? 
    (<><h1 className="popup-error">Error occured while evaluating expression. Please check if the expression is correct.</h1></>)
    : (<h1 className="anwser">{props.anwser}</h1>)
    return (<div className="popup" style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0'
    }}>
        <div className="popup-inner anwser">
            {valueToDisplay}
            <button className="popup-btn" onClick={closeHandler}>Enter</button>
        </div>
    </div>);
}
export default AnwserPopup;