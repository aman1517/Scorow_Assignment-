import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Style/AddData.css"

const defaultValue={
    Flat_No:"",
    Fname:"",
    Lname:"",
    Phone:"",
  }


const AddData = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState(defaultValue)
    const [value,setValue]=useState([])
    const [active,setActie]=useState(false)
    const HandleChange=(e)=>{
       console.log(e.target.value)
       setUser({...user,[e.target.name] :e.target.value})
    }
    const header={"Access-Control-Allow-Orginal":"'"}
    const summitHandle=(e)=>{
        e.preventDefault()
       value.push(user)
       setUser(defaultValue)
       console.log(value)
       
    }
    const HandleReove=(id)=>{
        setActie(!active)
       const new_List=value.filter((el,ind)=>ind !==id);
       setValue(new_List)
       alert("User data Reomve Successfully")
    }

    const HandleSumbint=()=>{
      value.map((el)=>{
        const Flat_NO=el.Flat_NO;
        const Fname=el.Fname;
        const Lname=el.Lname;
        const Phone=el.Phone

        axios.post("https://6322fad1362b0d4e7dd81cf0.mockapi.io/CityNames",{
            Flat_NO,
            Fname,
            Lname,
            Phone,
            header
          }).then((res)=>{
            console.log(res.data)
             
          })
      })
      alert("Data added in DB succesfully")
      navigate('/getdata')
      
    }
   

  return (
    <div>
      <form onSubmit={summitHandle}>
        <input type="number" placeholder='Enter your Flat number' onChange={HandleChange} name="Flat_No" value={user.Flat_No} required/><br/>
        <input type="text" placeholder='Enter your First Name' onChange={HandleChange} name="Fname" value={user.Fname} required/><br/>
        <input type="text" placeholder='Enter your Last Name' onChange={HandleChange} name="Lname" value={user.Lname} required/><br/>
        <input type="number" placeholder='Enter phne Number' onChange={HandleChange} name="Phone" value={user.Phone} required/><br/>
        <button>+</button>
      </form>
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
        value.length>0&& value.map((e,index)=>{
            return(
                <tr>
                <td>{index+1}</td>
                 <td>{e.Flat_No}</td>
                <td>{e.Fname}</td>
                <td>{e.Lname}</td>
                <td>{e.Phone}</td>
                 <td className='delIcon'><i className="fa fa-trash-o" style={{fontSize:"35px",color:active? "red" :"red"}} onClick={()=>HandleReove(index) } /></td>
                </tr>
            )
        })
      
    }
    <button onClick={HandleSumbint}>Submit</button>
</table>
      </div>
    </div>
  );
}

export default AddData;
