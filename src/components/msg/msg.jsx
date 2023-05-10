import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import './msg.css'

const Msg = () => {
    return (
        <div classNamer="container-msg">
            <div className="msg-title">
                <h1>Messages</h1>
            </div>
            <div className="compose-msg">
                <input className="input-msg" type="text" placeholder="Type your message here" />
                <button className="input-btn">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    )
}

export default Msg

