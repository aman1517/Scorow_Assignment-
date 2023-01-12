import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../Style/AddData.css"

const GetData = () => {
    const [user,setUser]=useState([])
    const [inpText,setInpText]=useState("")

//    Get Method using Axos
    const fetchData=()=>{
        axios.get("https://clever-gray-pantsuit.cyclic.app/getuserdata").then((res)=>{
            setUser(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log("err")
        })
    }

    useEffect(()=>{
        fetchData()
    },[])


    // Serching Data From table
    const serachHandle=(e)=>{
        setInpText(e.target.value)
      }

    // delete the data from database
   const HandleDelte=(id)=>{
   
    axios.delete(`https://clever-gray-pantsuit.cyclic.app/${id}`).then(()=>{
        fetchData()
    }) 
   }
  return (
    <div>
        <div className='name_List'>
        <div >
          <input type="search"  placeholder='Search Here' onChange={serachHandle} className="searchBtn"/>
         </div>
         <h2 className='title'>All Data </h2>
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
        
    user.filter((ele)=>{
     if(ele===""){
      return ele
     }
     else{
      return(ele.Fname.toLowerCase().includes(inpText) ||ele.Lname.toLowerCase().includes(inpText) || ele.Phone.toString().includes(inpText) || ele.Flat_No.toString().includes(inpText))
     }
    })
        .map((e,index)=>{
            return(
                <tr>
                <td>{index+1}</td>
                 <td>{e.Flat_No}</td>
                <td>{e.Fname}</td>
                <td>{e.Lname}</td>
                <td>{e.Phone}</td>
                <td className='delIcon'><i className="fa fa-trash-o" style={{fontSize:"35px",color: "red"}} onClick={()=>HandleDelte(e._id) } /></td>
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
