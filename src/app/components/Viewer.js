import React from "react";
import Messages from "public/extracted/json/chat_history";
import imageUrls from "../../../mediaUrls.json";
import memoryUrls from "../../../memoryUrls.json"

export default function Viewer({ buttonClicked }) {
  return (
    <div className="view">
      
      {buttonClicked === "messages" ? (
        <div className="messages">
          <h2>Message History</h2>
          <ul>
            {Object.keys(Messages).map((key) =>
              Messages[key].map((message, index) => (
                <li className="message" key={index}>
                  <strong>From: {message.From}</strong>
                  <br />
                  <p loading="lazy">
                    Created: {message.Created.split(" ")[0]}
                    <br />
                    Content: {message.Content}<br />
                    Type: 
                    <em className="mediaType">
                        { message["Media Type"].toLowerCase()}
                    </em>
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : buttonClicked === "media" ? (
        <div className="media">
          <h2>Chat Media</h2>
          <ul>
            {imageUrls.map((imageUrl, index) => (
              <li key={index}>
                <img src={imageUrl} alt={`Media ${index}`} />
              </li>
            ))}
          </ul>
        </div>
      ) : buttonClicked === "memories" ? (
        <div className="memories">
          <h2>Memories</h2>
          <ul>
            {memoryUrls.map((memoryUrl, index) => (
              <li key={index}>
                <img src={memoryUrl} alt={`Media ${index}`}/>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    
    </div>
  );
}
