import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, isTyping]);

  const sendMessage = async (text) => {
    const msg = text || message;
    if (!msg.trim()) return;

    const userMsg = { sender: "user", text: msg };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setIsTyping(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat", {
        message: msg,
      });
      const botMsg = {
        sender: "bot",
        text: response.data.answer,
      };
      setChat((prev) => [...prev, botMsg]);
    } catch {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't reach the server. Please try again." },
      ]);
    } finally {
      setIsTyping(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-icon">💬</div>
        <div className="header-text">
          <h1>FAQ Assistant</h1>
          <p>Instant answers to your questions</p>
        </div>
        <div className="status-dot" title="Online" />
      </div>

      {/* Chat area */}
      <div className="chat-box">
        {chat.length === 0 && !isTyping ? (
          <div className="empty-state">
            <div className="empty-state-icon">✦</div>
            <p>Ask me anything — I'm here to help.</p>
          </div>
        ) : (
          <>
            {chat.map((msg, i) => (
              <div key={i} className={`bubble-row ${msg.sender}`}>
                <div className={`avatar ${msg.sender === "bot" ? "bot-avatar" : "user-avatar"}`}>
                  {msg.sender === "bot" ? "✦" : "U"}
                </div>
                <div className="bubble">{msg.text}</div>
              </div>
            ))}

            {isTyping && (
              <div className="bubble-row bot">
                <div className="avatar bot-avatar">✦</div>
                <div className="bubble" style={{ padding: "14px 16px" }}>
                  <div className="typing-indicator">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="input-area">
        <div className="input-row">
          <input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question…"
            disabled={isTyping}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isTyping || !message.trim()}
            aria-label="Send message"
          >
            ↑
          </button>
        </div>
        <p className="input-hint">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}

export default App;