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

    //  hooks
    const [user,setUser]=useState(defaultValue)
    const [value,setValue]=useState([])
    const [active,setActie]=useState(false)
    const [showbtn,setShowbtn]=useState(false)

    // store the the in setState
    const HandleChange=(e)=>{
       setUser({...user,[e.target.name] :e.target.value})
    }
    const header={"Access-Control-Allow-Orginal":"'"}
    const summitHandle=(e)=>{
        e.preventDefault()
       value.push(user)
       setUser(defaultValue)
       setShowbtn(true)
       
    }
    // Remove data from Lists
    const HandleReove=(id)=>{
        setActie(!active)
       const new_List=value.filter((el,ind)=>ind !==id);
       setValue(new_List)
       alert("User data Reomve Successfully")
    }

    // post the data into database
    const HandleSumbint=()=>{
      value.map((el)=>{
        const Flat_No=el.Flat_No;
        const Fname=el.Fname;
        const Lname=el.Lname;
        const Phone=el.Phone

        axios.post("https://clever-gray-pantsuit.cyclic.app/postdata",{
            Flat_No,
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
     <div className='form_container'>
     <p>Fill the user details</p>
     <form onSubmit={summitHandle}>
        <label>Flat Number:</label>
        <input type="text" placeholder='Enter your Flat number' onChange={HandleChange} name="Flat_No" value={user.Flat_No} required/><br/>
        <label>First Name:</label>
        <input type="text" placeholder='Enter your First Name' onChange={HandleChange} name="Fname" value={user.Fname} required/><br/>
        <label>Last Name:</label>
        <input type="text" placeholder='Enter your Last Name' onChange={HandleChange} name="Lname" value={user.Lname} required/><br/>
        <label>Phone No.:</label>
        <input type="number" placeholder='Enter phne Number' onChange={HandleChange} name="Phone" value={user.Phone} required minlength="10" maxlength="12"/><br/>
        <button className='btn'>+</button>
      </form>
     </div>
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
</table>
          <button onClick={HandleSumbint} className="sbmitbtn" style={{display:showbtn?"block":"none"}}>Submit</button>

      </div>
    </div>
  );
}

export default AddData;
