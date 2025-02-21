import PropTypes from "prop-types";
function ChatOutput({ text }) {
    return (
        <div className="output-area">
            {text && <p>{text}</p>}
        </div>
    );
}

// Define prop types
ChatOutput.propTypes = {
    text: PropTypes.string.isRequired, // Ensure 'text' is always a string
};


export default ChatOutput;
