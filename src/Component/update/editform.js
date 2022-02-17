import axios from "axios";
import { React, useState } from "react";
import ReadForm from "../read/readform";
import "./editform.css";

export default function EditForm(props) {
  const { data } = props;
  const [bool, setBool] = useState(false);
  const [userData, setData] = useState({
    fnm: data.fnm,
    lnm: data.lnm,
    age: data.age,
    gen: data.gender,
    hobby: {
      Music: data.hobby.Music,
      Cricket: data.hobby.Cricket,
      Football: data.hobby.Football,
      Movies: data.hobby.Movies,
      Games: data.hobby.Games,
    },
  });
  console.log(userData);
  const handlechange = (e) => {
    let { name, value } = e.target;
    if (name === "hobby") {
      let hobby = { ...userData.hobby };
      hobby[value] = e.target.checked;
      setData((prev) => ({ ...prev, hobby }));
    } else setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpload = (e) => {
    e.preventDefault();
    axios({
      url: `https://61fd0f4cf62e220017ce42d7.mockapi.io/UserTable/${data.id}`,
      method: "PUT",
      data: {
        fnm: userData.fnm,
        lnm: userData.lnm,
        age: userData.age,
        gender: userData.gen,
        hobby: userData.hobby,
      },
    })
      .then((res) => {
        alert("Success!!!");
        window.history.pushState("data", "title", "/read");
        setBool(true);
      })
      .catch((error) => alert(error));
  };
  return (
    <div>
      {!bool && (
        <form onSubmit={(e) => handleUpload(e)}>
          <label>
            First name:
            <input
              type="text"
              name="fnm"
              placeholder="First name"
              value={userData.fnm}
              onChange={(e) => handlechange(e)}
            />
          </label>
          <label>
            Last name:
            <input
              type="text"
              name="lnm"
              placeholder="Last name"
              value={userData.lnm}
              onChange={(e) => handlechange(e)}
            />
          </label>
          <label>
            Age:
            <input
              type="numer"
              name="age"
              placeholder="Age"
              value={userData.age}
              onChange={(e) => handlechange(e)}
            />
          </label>
          <label>
            Gender:
            <label>
              <input
                type="radio"
                name="gen"
                value="male"
                checked={userData.gen === "male" ? true : false}
                onChange={(e) => handlechange(e)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gen"
                value="female"
                checked={userData.gen === "female" ? true : false}
                onChange={(e) => handlechange(e)}
              />
              Female
            </label>
          </label>
          <label className="hobby">
            Hobbies:
            <label>
              <input
                type="checkbox"
                name="hobby"
                value="Music"
                checked={userData.hobby.Music}
                onChange={(e) => handlechange(e)}
              />
              Music
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby"
                value="Cricket"
                checked={userData.hobby.Cricket}
                onChange={(e) => handlechange(e)}
              />
              Cricket
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby"
                value="Football"
                checked={userData.hobby.Football}
                onChange={(e) => handlechange(e)}
              />
              Football
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby"
                value="Movies"
                checked={userData.hobby.Movies}
                onChange={(e) => handlechange(e)}
              />
              Movies
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby"
                value="Games"
                checked={userData.hobby.Games}
                onChange={(e) => handlechange(e)}
              />
              Games
            </label>
          </label>
          <input type="submit" value="submit" />
        </form>
      )}
      {bool && <ReadForm />}
    </div>
  );
}
