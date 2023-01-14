import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai"

const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup__inner">
                <div className='close-btn' onClick={() => props.setTrigger(false)}>
                    <AiFillCloseCircle size={25} />
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup