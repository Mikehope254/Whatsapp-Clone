import { useState } from "react";
import React from "react";
import "./App.css";
import "./Styles/footer.css";
import Chats from "./pages/Chats.jsx";
import Communities from "./pages/Communities.jsx";
import Updates from "./pages/Updates.jsx";
import Calls from "./pages/Calls.jsx";

export default function Whatsapp() {
  const [pageContent, setPageContent] = useState("Chats");

  const handleClick = (name) => {
    setPageContent(name);
  };

  function Footer() {
    return (
      <div className="footer">
        <button className="chats" onClick={() => handleClick("chats")}>
          Chats
        </button>
        <button className="updates" onClick={() => handleClick("updates")}>
          Updates
        </button>
        <button
          className="communities"
          onClick={() => handleClick("communities")}
        >
          Communities
        </button>
        <button className="calls" onClick={() => handleClick("calls")}>
          Calls
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="UI">
        <h1>{pageContent === "chats" && <Chats />}</h1>
        <h1>{pageContent === "updates" && <Updates />}</h1>
        <h1>{pageContent === "communities" && <Communities />}</h1>
        <h1>{pageContent === "calls" && <Calls />}</h1>

        <Footer />
      </div>
    </div>
  );
}
