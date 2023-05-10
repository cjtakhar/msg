import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUser } from "@fortawesome/free-solid-svg-icons";

import './msg.css'

const Msg = () => {
    const [inputValue, setInputValue] = useState('');
    const [messageList, setMessageList] = useState([]);

    const handleSendClick = () => {
        if (inputValue.trim() !== '') {
            setMessageList([...messageList, inputValue]);
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendClick();
        }
    };

    const handleRemoveClick = (index) => {
        setMessageList(messageList.filter((message, i) => i !== index));
    };

    return (
        <div className="container-msg">
            <div className="msg-title">
                <h1>Messages</h1>
            </div>
            <div className="compose-msg">
                <input
                    className="input-msg"
                    type="text"
                    placeholder="Type your message here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="input-btn" onClick={handleSendClick}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
            <div className="msg">
                {messageList.map((message, index) => (
                    <div key={index} className="message" onClick={() => handleRemoveClick(index)}>
                        <FontAwesomeIcon className="icon-usr" icon={faUser} /> {message}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Msg;

