import React, { useState } from "react";
import "./index.css";
import list1 from "../Resources/index.json";

export default function CreateUpdateView(props) {
  const [formName, setName] = useState();
  const [formDesc, setDesc] = useState();
  const [formId, setId] = useState(list1.length);
  const submitClick = (props) => {
    if (formName !== undefined && formDesc !== undefined) {
      setId(formId + 1);
      list1.push({
        id: formId,
        Name: formName,
        Desc: formDesc,
        Status: "Todo",
      });
      props.callParentFunction();
    } else alert("Please Enter the mising details...");
  };
  const handleName = (e) => {
    if (e.target.name === "item-name") setName(e.target.value);
    else if (e.target.name === "item-desc") setDesc(e.target.value);
  };
  return (
    <div className="update-body">
      <div className="heading">Create / Update View.</div>
      <div className="item-text">Title</div>
      <input
        className="item-input"
        type="text"
        name="item-name"
        onChange={(e) => handleName(e)}
        placeholder="Title..."
        required
      />
      <div className="item-text">Description</div>
      <textarea
        className="item-input"
        placeholder="Description..."
        name="item-desc"
        onChange={(e) => handleName(e)}
        required
      ></textarea>
      <button className="submit-button" onClick={() => submitClick(props)}>
        Create/Update
      </button>
    </div>
  );
}
