import { React, useEffect, useState } from "react";
import axios from "axios";
import "./list.css";
import EditComent from "../Edit/edit";
import AddSubComment from "../AddSub/addSub";
function ListComment() {
  const [Comment, setComments] = useState([]);
  const [sub, setSub] = useState([]);
  const [deletedBool, setDeletedBool] = useState(true);
  const [showUpdate, setUpdate] = useState(false);
  const [updata, setUpdatabledata] = useState([]);
  const [showAdd, setAddSUb] = useState(false);
  const [id4sub, setId4Sub] = useState();
  const [commentORReply, setCOR] = useState("");
  useEffect(() => {
    axios
      .get("https://61fd0f4cf62e220017ce42d7.mockapi.io/Comments")
      .then((resp) => setComments(resp.data))
      .catch((error) => console.log(error));

    axios
      .get("https://61fd0f4cf62e220017ce42d7.mockapi.io/subComment")
      .then((resp) => setSub(resp.data))
      .catch((error) => console.log(error));
  }, []);
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete(`https://61fd0f4cf62e220017ce42d7.mockapi.io/Comments/${id}`)
        .then((resp) => {
          sub
            .filter((item) => item.parent === resp.data.id)
            .map((items) => deleteReply(true, items.id));
          let data1 = Comment;
          let index = data1.findIndex((element) => element.id === resp.data.id);
          data1.splice(index, 1);
          setComments(data1);
          setDeletedBool(false);
          setDeletedBool(true);
        });
    }
  };
  const changeLike = (id) => {
    let index = Comment.findIndex((element) => element.id === id);
    axios({
      url: `https://61fd0f4cf62e220017ce42d7.mockapi.io/Comments/${id}`,
      method: "PUT",
      data: {
        name: Comment[index].name,
        like: !Comment[index].like,
      },
    }).then((resp) => {
      let data = Comment;
      data[index] = resp.data;
      setComments(data);
      setDeletedBool(false);
      setDeletedBool(true);
    });
  };
  const changeComment = (element) => {
    setCOR("Main");
    setUpdatabledata(element);
    setUpdate(true);
  };
  const addReply = (id) => {
    window.history.pushState("Data", "Title", "/addsub");
    setId4Sub(id);
    setAddSUb(true);
  };
  const likeReply = (id) => {
    let index = sub.findIndex((element) => element.id === id);
    axios({
      url: `https://61fd0f4cf62e220017ce42d7.mockapi.io/subComment/${id}`,
      method: "PUT",
      data: {
        name: sub[index].name,
        like: !sub[index].like,
      },
    }).then((resp) => {
      let data = sub;
      data[index] = resp.data;
      setSub(data);
      setDeletedBool(false);
      setDeletedBool(true);
    });
  };
  const changeReply = (element) => {
    setCOR("Sub");
    setUpdatabledata(element);
    setUpdate(true);
  };
  const deleteReply = (conf, id) => {
    if (conf || window.confirm("Are you sure to delete?")) {
      axios
        .delete(`https://61fd0f4cf62e220017ce42d7.mockapi.io/subComment/${id}`)
        .then((resp) => {
          let data1 = sub;
          let index = data1.findIndex((element) => element.id === resp.data.id);
          data1.splice(index, 1);
          setSub(data1);
          setDeletedBool(false);
          setDeletedBool(true);
        });
    }
  };
  const display = Object.values(Comment).map((element) => {
    return (
      <div>
        <div className="commentBox">
          <div className="innerCommentText">{element.name}</div>
          <div className="innerCommentButton">
            {/* Reply Button */}
            <span title="Reply?" onClick={() => addReply(element.id)}>
              ⤺
            </span>
            {/* Like Button */}
            <span
              className={element.like ? "isLike" : "isNotLike"}
              onClick={() => changeLike(element.id)}
              title={element.like ? "Dislike?" : "Like?"}
            >
              ❤
            </span>
            {/* Edit Button */}
            <span title="Change?" onClick={() => changeComment(element)}>
              ✎
            </span>
            {/* Delete Button */}
            <span title="Delete?" onClick={() => deleteItem(element.id)}>
              ✘
            </span>
          </div>
          {sub
            .filter((item) => item.parent === element.id)
            .map((items) => {
              return (
                <div className="replyContainer">
                  <div className="replyMsg">
                    <div className="replyText">{items.name}</div>
                    <div className="replyButton">
                      {/* Reply Like Button */}
                      <span
                        className={items.like ? "isLike" : "isNotLike"}
                        onClick={() => likeReply(items.id)}
                        title={items.like ? "Dislike?" : "Like?"}
                      >
                        ❤
                      </span>
                      {/* Reply Edit Button */}
                      <span title="Change?" onClick={() => changeReply(items)}>
                        ✎
                      </span>
                      {/* Reply Delete Button */}
                      <span
                        title="Delete?"
                        onClick={() => deleteReply(false, items.id)}
                      >
                        ✘
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  });
  return (
    <div>
      {showAdd ? (
        <AddSubComment id={id4sub} />
      ) : (
        <div>
          {showUpdate ? (
            <EditComent commentData={updata} typeofComment={commentORReply} />
          ) : (
            <div className="Container">
              <div className="commentBoxHead">
                <h1>Comments</h1>
              </div>
              {deletedBool && display}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ListComment;
