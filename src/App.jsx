import { useState } from "react";
import React from "react";
import "./App.css";
import "./Styles/footer.css";

export default function Whatsapp() {
  const [pageContent, setPageContent] = useState("Chats");

  const handleClick = (name) => {
    // alert(`${name} was Clicked `);
    if (name === "chats") {
      setPageContent("chats");
    } else if (name === "updates") {
      setPageContent("updates");
    } else if (name === "communities") {
      setPageContent("communities");
    } else if (name === "calls") {
      setPageContent("calls");
    }
  };

  function Footer() {
    return (
      <div className="footer">
        <button onClick={() => handleClick("chats")}>Chats</button>
        <button onClick={() => handleClick("updates")}>Updates</button>
        <button onClick={() => handleClick("communities")}>Communities</button>
        <button onClick={() => handleClick("calls")}>Calls</button>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="UI">
        <h1>{pageContent}</h1>
        <Footer />
      </div>
    </div>
  );
}
