import React, { useState } from "react";
import AddComment from "./Add/add";
import "./index.css";
import ListComment from "./List/list";
function CommentPage() {
  const [writer, setWrite] = useState(false);
  const hideShow = () => {
    setWrite(!writer);
  };
  return (
    <div>
      <div className="homeContainer">
        {writer ? (
          <AddComment callParentFunction={() => hideShow()} />
        ) : (
          <ListComment />
        )}
        <div className="addBtn" onClick={() => setWrite(!writer)}>
          {writer ? (
            <div className="addBtnInnertext closed" title="Close?">
              +
            </div>
          ) : (
            <div className="addBtnInnertext" title="New Comment?">
              +
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentPage;
