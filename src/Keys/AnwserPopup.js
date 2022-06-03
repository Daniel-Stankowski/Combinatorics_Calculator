import React, {useEffect} from 'react';
function AnwserPopup(props) {
    
    const [show,setShow] = React.useState(false);
    const closeHandler = (e)  => {
        setShow(false);
        props.onClose(false);
    }
    useEffect(()=>{
        setShow(props.show);
    }, [props.show]);
    return (<div className="popup" style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0'
    }}>
        <div className="popup-inner anwser">
            <h1 className="anwser">{props.anwser}</h1>
            <button className="popup-btn" onClick={closeHandler}>Enter</button>
        </div>
    </div>);
}
export default AnwserPopup;