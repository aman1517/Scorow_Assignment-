import React,{useState,useEffect} from 'react';

const GetData = () => {
    const [data,setData]=useState([])

    const fetchData=()=>{
        axios.get("https://6322fad1362b0d4e7dd81cf0.mockapi.io/CityNames").then((res)=>{
            console.log(res)
            setData(res.data)
        }).catch((err)=>{
            console.log("err")
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      
    </div>
  );
}

export default GetData;
