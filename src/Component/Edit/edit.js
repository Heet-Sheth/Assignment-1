import React, { useState } from "react";
import "./edit.css";
import axios from "axios";
import ListComment from "../List/list";
import { useParams } from "react-router-dom";
function EditComent(props) {
  let num = window.location.pathname.slice(
    window.location.pathname.lastIndexOf("/")
  );
  const { commentData } = props;
  const [show, setShow] = useState(true);
  const [comment, setComments] = useState({
    name: commentData.name,
    id: commentData.id,
  });
  const handleChange = (text) => {
    setComments((prev) => ({ ...prev, name: text }));
  };
  const addComment = (e) => {
    e.preventDefault();
    console.log(num);
    let urlText =
      num === "/0"
        ? `https://61fd0f4cf62e220017ce42d7.mockapi.io/Comments/${comment.id}`
        : `https://61fd0f4cf62e220017ce42d7.mockapi.io/subComment/${comment.id}`;
    axios({
      url: urlText,
      method: "PUT",
      data: { name: comment.name, like: false },
    })
      .then((resp) => {
        window.history.pushState("Data", "Title", "/read");
        setShow(false);
      })
      .catch((error) => alert(error));
  };
  return (
    <div>
      {show ? (
        <div className="Container">
          <form onSubmit={(e) => addComment(e)}>
            <h1>Edit</h1>
            <textarea
              placeholder="Comment..."
              autoFocus
              value={comment.name}
              required
              onChange={(e) => handleChange(e.target.value)}
            ></textarea>
            <div className="innerContainer">
              <button
                onClick={() => {
                  window.history.pushState("Data", "Title", "/read");
                  setShow(false);
                }}
              >
                &lt;
              </button>
              <input type="submit" value="✔" />
            </div>
          </form>
        </div>
      ) : (
        <ListComment />
      )}
    </div>
  );
}

export default EditComent;
