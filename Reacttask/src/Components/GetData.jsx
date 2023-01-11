import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../Style/AddData.css"

const GetData = () => {
    const [user,setUser]=useState([])
    const [inpText,setInpText]=useState("")

    const fetchData=()=>{
        axios.get("http://localhost:4500/getuserdata").then((res)=>{
            setUser(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log("err")
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const serachHandle=(e)=>{
        setInpText(e.target.value)
      }
  return (
    <div>
        <div className='name_List'>
        <div >
    
    <input type="search" className="form-control" placeholder='serch here' onChange={serachHandle}/>
    
  </div>
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
