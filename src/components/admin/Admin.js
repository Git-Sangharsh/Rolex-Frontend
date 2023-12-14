import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';

const Admin = () => {

    const [ image, setImage ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    // const [ fetch, setFetch ] = useState([])

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleData = (e) => {
        e.preventDefault()
        const watchData = {
            adminImage: image,
            adminTitle: title,
            adminDesc: desc
        }
        axios.post('https://rolex-backend.onrender.com/admin', watchData)
        .then((response) => {
            console.log(response.data)
            setImage("");
            setTitle("");
            setDesc("");
            // fetchData()
        }).catch((err) => {
            console.log('error found', err)
        })
    }

    // const fetchData = () => {
    //     axios.get("http://localhost:5000/fetchrolex")
    //     .then((response) => {
    //         console.log(response.data)
    //         setFetch(response.data)
    //     })
    //     .catch((err) => {
    //         console.log("error fetching data", err)
    //     })
    // }
    // useEffect(() => {
    //     fetchData()
    // },[])

    console.log('fetch data is ', fetch)

  return (
    <div className='admin'>
        <div className="admin-wrapper">
            <h1>Admin</h1>
            <input type="text" onChange={handleImage}/>
            <input type="text" onChange={handleTitle}/>
            <input type="text" onChange={handleDesc}/>
            <button onClick={handleData}>Add Data</button>


        </div>
    </div>
  )
}

export default Admin