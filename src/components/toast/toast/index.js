import './style.css';
import {useEffect, useRef, useState} from "react";
import x_icon from "../../assets/x_icon.svg";

export const Toast = ({autoHideMs, show, color, title, onClose, message}) => {
    const [hasHide, setHasHide] = useState(false);
    const prevShow = useRef();
    useEffect(() => {
        if (!show && prevShow.current) {
            setHasHide(true);
            prevShow.current = show;
        } else if (show) {
            const interval = setInterval(() => {
                setHasHide(true);
                onClose()
            }, (autoHideMs ? autoHideMs : 5000) + 250)
            prevShow.current = show;
            return () => {
                clearInterval(interval);
            }
        }
    }, [show])

    return (
        <div className={'ws-toast ' + (show ? 'ws-show-toast' : hasHide && 'ws-hide-toast')}>
            <button onClick={onClose} className={'close-toast-btn'}>
                <img src={x_icon} alt="Close modal icon"/>
            </button>
            <span style={{color: color}}>{title}</span>
            <p>{message}</p>
            <div className={'ws-toast-status-container'}>
                <div style={{
                    background: color,
                    animationDuration: (autoHideMs ? autoHideMs : 5000) + "ms"
                }} className={show && 'ws-toast-status-bar'}></div>
            </div>
        </div>
    )
}

export default Toast;