import { useState } from "react";

import "./index.css"; // Import styles
import ChatInput from "./components/ChatInput.jsx";
import ChatOutput from "./components/ChatOutput.jsx";
import ActionButtons from "./components/ActionButtons.jsx";
import LanguageSelector from "./components/LanguageSelector.jsx";

function App() {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState("en");

    const handleSend = () => {
        if (text.trim() !== "") {
            setOutput(text); // Show user input in chat
            setText(""); // Clear input
        }
    };

    return (
        <div className="container">
            <h2>AI Text Processing Interface</h2>

            <ChatOutput text={output} />

            <LanguageSelector language={language} setLanguage={setLanguage} />

            <ActionButtons text={output} />

            <ChatInput text={text} setText={setText} handleSend={handleSend} />
        </div>
    );
}

export default App;
