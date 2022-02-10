import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ReadForm from '../read/readform';
import "./editform.css";

export default function UpdateForm() {
    const { id, fnm, lnm, age, gen, hobby } = useParams();
    let hobbySep = JSON.stringify(hobby).split(',');
    hobbySep[0] = hobbySep[0].substring(1);
    hobbySep[4] = hobbySep[4].substring(0, hobbySep[4].length - 1);
    const [userData, setData] = useState({
        id: id,
        fnm: fnm,
        lnm: lnm,
        age: age,
        gen: gen,
        hobby: {
            Music: hobbySep[0] === "true" ? true : false,
            Cricket: hobbySep[1] === "true" ? true : false,
            Football: hobbySep[2] === "true" ? true : false,
            Movies: hobbySep[3] === "true" ? true : false,
            Games: hobbySep[4] === "true" ? true : false,
        }
    })
    console.log(userData.hobby);
    const handlechange = (e) => {
        let { name, value } = e.target;
        if (name === "hobby") {
            const hobby = { ...userData.hobby };
            hobby[value] = e.target.checked;
            setData((prev) => ({ ...prev, hobby }));
        }
        else if (name === "gen") {
            setData((prev) => ({ ...prev, [name]: value }));
        }
        else
            setData((prev) => ({ ...prev, [name]: value }));
    }
    const handleUpload = (e) => {
        e.preventDefault();
        axios({
            url: `https://61fd0f4cf62e220017ce42d7.mockapi.io/UserTable/${userData.id}`,
            method: 'PUT',
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
                    <input type="text" value={userData.fnm} name="fnm" placeholder='First name' onChange={(e) => handlechange(e)} />
                </label>
                <label>Last name:
                    <input type="text" value={userData.lnm} name="lnm" placeholder='Last name' onChange={(e) => handlechange(e)} />
                </label>
                <label>Age:
                    <input type="numer" value={userData.age} name="age" placeholder='Age' onChange={(e) => handlechange(e)} />
                </label>
                <label>Gender:
                    <label><input type="radio" name="gen" checked={userData.gen === "male"} value="male" onChange={(e) => handlechange(e)} />Male</label>
                    <label><input type="radio" name="gen" checked={userData.gen === "female"} value="female" onChange={(e) => handlechange(e)} />Female</label>
                </label>
                <label className='hobby'>
                    Hobbies:
                    <label><input type="checkbox" checked={userData.hobby.Music} name="hobby" value="Music" onChange={(e) => handlechange(e)} />Music</label>
                    <label><input type="checkbox" checked={userData.hobby.Cricket} name="hobby" value="Cricket" onChange={(e) => handlechange(e)} />Cricket</label>
                    <label><input type="checkbox" checked={userData.hobby.Football} name="hobby" value="Football" onChange={(e) => handlechange(e)} />Football</label>
                    <label><input type="checkbox" checked={userData.hobby.Movies} name="hobby" value="Movies" onChange={(e) => handlechange(e)} />Movies</label>
                    <label><input type="checkbox" checked={userData.hobby.Games} name="hobby" value="Games" onChange={(e) => handlechange(e)} />Games</label>
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}