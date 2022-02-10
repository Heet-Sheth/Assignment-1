import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import UpdateForm from "../update/editform";
import "./readform.css";
export default function ReadForm() {
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://61fd0f4cf62e220017ce42d7.mockapi.io/UserTable")
      .then((resp) => {
        setData(resp.data);
      });
  }, []);
  const deleteData = (id) => {
    axios
      .delete(`https://61fd0f4cf62e220017ce42d7.mockapi.io/UserTable/${id}`)
      .then((resp) => {
        let data1 = userData;
        let index = data1.findIndex((element) => element.id === resp.data.id);
        data1.splice(index, 1);
        setData(data1);
        window.location.reload();
      });
  };
  const updateData = (element, array) => {
    window.history.pushState(
      "data",
      "title",
      `/edit/${element.id}/${element.fnm}/${element.lnm}/${element.age}/${element.gender}/${array}`
    );
    <Route path="/edit/:id/:fnm/:lnm/:age/:gen/:hobby">
      <UpdateForm />
    </Route>;
    window.location.reload();
  };
  const display = userData.map((element) => {
    let hobbyArray = Object.values(element.hobby);
    return (
      <tr>
        <td>{element.id}</td>
        <td>{element.fnm}</td>
        <td>{element.lnm}</td>
        <td>{element.age}</td>
        <td>{element.gender}</td>
        <td>
          {(hobbyArray[0] ? "Music " : " ") +
            (hobbyArray[1] ? "Cricket " : " ") +
            (hobbyArray[2] ? "Football " : " ") +
            (hobbyArray[3] ? "Movies " : " ") +
            (hobbyArray[4] ? "Game " : " ")}
        </td>
        <td>
          <button onClick={(e) => updateData(element, hobbyArray)}> ✎ </button>
          <button onClick={(e) => deleteData(element.id)}> ⚔ </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="apos">
      <table>
        <tr>
          <th>Id</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Hobbies</th>
          <th>Options</th>
        </tr>
        {display}
      </table>
    </div>
  );
}
