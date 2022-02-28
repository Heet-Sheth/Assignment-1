import React, { useState } from "react";
import "./edit.css";
import axios from "axios";
import ListComment from "../List/list";
function EditComent(props) {
  const num = props.typeofComment;
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
    let urlText = `https://61fd0f4cf62e220017ce42d7.mockapi.io/${
      num === "Main" ? "Comments" : "subComment"
    }/${comment.id}`;
    if (comment.name === "") alert("Please type any comment...");
    else {
      axios({
        url: urlText,
        method: "PUT",
        data: { name: comment.name, like: false },
      })
        .then((resp) => {
          setShow(false);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      {show ? (
        <div className="Container">
          <form>
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
                  setShow(false);
                }}
              >
                &lt;
              </button>
              <button onClick={(e) => addComment(e)}>✔</button>
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
