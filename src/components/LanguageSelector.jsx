import PropTypes from "prop-types";

function LanguageSelector({ language, setLanguage }) {
    return (
        <div className="language-selector">
            <label htmlFor="language-select">Translate to:</label>
            <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="en">English</option>
                <option value="pt">Portuguese</option>
                <option value="es">Spanish</option>
                <option value="ru">Russian</option>
                <option value="tr">Turkish</option>
                <option value="fr">French</option>
            </select>
        </div>
    );
}

// Define prop types
LanguageSelector.propTypes = {
    language: PropTypes.string.isRequired, // Ensures language is a string
    setLanguage: PropTypes.func.isRequired, // Ensures setLanguage is a function
};

export default LanguageSelector;
