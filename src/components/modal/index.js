import './style.css';
import x_icon from '../assets/x_icon.svg';
import {useEffect, useRef, useState} from "react";

export const Modal = ({show, children, size, onClose}) => {
    const [hasHide, setHasHide] = useState(false);
    const prevShow = useRef();
    useEffect(() => {
        if (!show && prevShow.current) {
            setHasHide(true);
        }
        prevShow.current = show;
    }, [show])

    return (
        <div className={'modal-container ' + (show ? 'modal-show' : hasHide ? 'modal-hide' : '')}>
            <div
                className={'modal-box '}>
                <button onClick={onClose} className={'close-modal-btn'}>
                    <img src={x_icon} alt="Close modal icon"/>
                </button>
                <div
                    className={"modal-content " + (size === 'big' ? 'modal-sz-big' : size === 'small' ? 'modal-sz-small' : 'modal-sz-medium')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;