import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';
import Backdrop from "./ModalFiles/Backdrop";
import Overlay from "./ModalFiles/Overlay";


const Modal = (props) => {
    return (<Fragment>
        {ReactDOM.createPortal(
            <Backdrop className={classes.backdrop} onClick={props.onClose}/>,
            document.getElementById('backdrop'))
        }
        {ReactDOM.createPortal(
            <Overlay modal={classes.modal} content={classes.content}>{props.children}</Overlay>,
            document.getElementById('overlay'))}
    </Fragment>);
};

export default Modal;