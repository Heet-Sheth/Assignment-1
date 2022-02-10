import axios from 'axios';
import { React, useState } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import ReadForm from '../read/readform';
import "./addform.css";

export default function AddForm() {
    const [userData, setData] = useState({
        fnm: "",
        lnm: "",
        age: "",
        gen: "",
        hobby: {
            Music: false,
            Cricket: false,
            Football: false,
            Movies: false,
            Games: false,
        }
    })
    const handlechange = (e) => {
        let { name, value } = e.target;
        if (name === "hobby") {
            const hobby = { ...userData.hobby };
            hobby[value] = e.target.checked;
            setData((prev) => ({ ...prev, hobby }));
        }
        else
            setData((prev) => ({ ...prev, [name]: value }));
    }
    console.log(userData);
    const handleUpload = (e) => {
        e.preventDefault();
        axios({
            url: "https://61fd0f4cf62e220017ce42d7.mockapi.io/UserTable",
            method: 'POST',
            data: { 'fnm': userData.fnm, 'lnm': userData.lnm, 'age': userData.age, 'gender': userData.gen, 'hobby': userData.hobby },
        })
            .then((res) => {
                alert("Success!!!");
                window.history.pushState('data', 'title', '/read');
                <Route path="/read"><ReadForm /></Route>
                window.location.reload();
            })
            .catch((error) => alert(error));
    }
    return (
        <div>
            <form onSubmit={e => handleUpload(e)}>
                <label>First name:
                    <input type="text" name="fnm" placeholder='First name' onChange={(e) => handlechange(e)} />
                </label>
                <label>Last name:
                    <input type="text" name="lnm" placeholder='Last name' onChange={(e) => handlechange(e)} />
                </label>
                <label>Age:
                    <input type="numer" name="age" placeholder='Age' onChange={(e) => handlechange(e)} />
                </label>
                <label>Gender:
                    <label><input type="radio" name="gen" value="male" onChange={(e) => handlechange(e)} />Male</label>
                    <label><input type="radio" name="gen" value="female" onChange={(e) => handlechange(e)} />Female</label>
                </label>
                <label className='hobby'>
                    Hobbies:
                    <label><input type="checkbox" name="hobby" value="Music" onChange={(e) => handlechange(e)} />Music</label>
                    <label><input type="checkbox" name="hobby" value="Cricket" onChange={(e) => handlechange(e)} />Cricket</label>
                    <label><input type="checkbox" name="hobby" value="Football" onChange={(e) => handlechange(e)} />Football</label>
                    <label><input type="checkbox" name="hobby" value="Movies" onChange={(e) => handlechange(e)} />Movies</label>
                    <label><input type="checkbox" name="hobby" value="Games" onChange={(e) => handlechange(e)} />Games</label>
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}