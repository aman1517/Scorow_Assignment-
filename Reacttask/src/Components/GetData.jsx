import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../Style/AddData.css"

const GetData = () => {
    const [user,setUser]=useState([])

    const fetchData=()=>{
        axios.get("https://6322fad1362b0d4e7dd81cf0.mockapi.io/CityNames").then((res)=>{
            setUser(res.data)
        }).catch((err)=>{
            console.log("err")
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <div className='name_List'>
      <table>
  <tr>
    <th>Id</th>
    <th>Flat-No</th>
    <th>FName</th>
    <th>LName</th>
    <th>Phone</th>
    <th>Action</th>
  </tr>
  
    {
        user.map((e,index)=>{
            return(
                <tr>
                <td>{index+1}</td>
                 <td>{e.Flat_No}</td>
                <td>{e.Fname}</td>
                <td>{e.Lname}</td>
                <td>{e.Phone}</td>
                </tr>
            )
        })
      
    }
</table>
      </div>
    </div>
  );
}

export default GetData;
