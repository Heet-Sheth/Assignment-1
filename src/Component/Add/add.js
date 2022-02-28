import React, { useState } from "react";
import "./add.css";
import axios from "axios";
function AddComment(props) {
  const [text, setText] = useState("");
  const handleChange = (text) => {
    setText(text);
  };
  const addComment = (e) => {
    e.preventDefault();
    if (text === "") alert("Please type any comment...");
    else {
      axios({
        url: "https://61fd0f4cf62e220017ce42d7.mockapi.io/Comments",
        method: "POST",
        data: { name: text, like: false },
      })
        .then((resp) => props.callParentFunction())
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="addContainer">
      <form>
        <h1>Add Comment</h1>
        <textarea
          placeholder="Comment..."
          autoFocus
          required
          onChange={(e) => handleChange(e.target.value)}
        ></textarea>
        <button onClick={(e) => addComment(e)}>✔</button>
      </form>
    </div>
  );
}

export default AddComment;
