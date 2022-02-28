import React, { useState } from "react";
import "./addSub.css";
import axios from "axios";
import ListComment from "../List/list";
function AddSubComment(props) {
  const { id } = props;
  const [text, setText] = useState();
  const [added, updatedAdded] = useState(false);
  const handleChange = (text) => {
    setText(text);
  };
  const addComment = (e) => {
    e.preventDefault();
    axios({
      url: "https://61fd0f4cf62e220017ce42d7.mockapi.io/subComment",
      method: "POST",
      data: { name: text, like: false, parent: id },
    })
      .then((resp) => {
        window.history.pushState("Data", "Title", "/");
        updatedAdded(true);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Container">
      {added ? (
        <ListComment />
      ) : (
        <form>
          <h1>Reply</h1>
          <textarea
            placeholder="Comment..."
            autoFocus
            required
            onChange={(e) => handleChange(e.target.value)}
          ></textarea>
          <div className="buttonBox">
            <button
              onClick={() => {
                window.history.pushState("data", "title", "/read");
                updatedAdded(true);
              }}
            >
              &lt;
            </button>
            {/* <input type="submit" value="✔" /> */}
            <button onClick={(e) => addComment(e)}>✔</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddSubComment;
