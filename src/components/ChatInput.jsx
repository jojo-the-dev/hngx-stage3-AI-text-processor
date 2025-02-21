import PropTypes from "prop-types";

function ChatInput({ text, setText, handleSend }) {
    return (
        <div className="input-area">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your text here..."
                aria-label="Text input"
            />
            <button onClick={handleSend} aria-label="Send message">
                <i className="fa-solid fa-paper-plane"></i>
            </button>
        </div>
    );
}

// Define prop types
ChatInput.propTypes = {
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    handleSend: PropTypes.func.isRequired,
};

export default ChatInput;
