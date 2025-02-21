import PropTypes from "prop-types";

function ActionButtons({ text }) {
    return (
        <div className="action-buttons">
            {text.length > 150 && <button id="summarize">Summarize</button>}
            <button id="translate">Translate</button>
        </div>
    );
}

// Define prop types
ActionButtons.propTypes = {
    text: PropTypes.string.isRequired, // Ensures text is always a string
};

export default ActionButtons;
