import React from 'react'
import './NotePage.css'
import {useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'


const NotePage = () => {

  const [data,setdata] = useState('')
  let [description,setDes] = useState('')


  const title = useLocation()

  useEffect(()=>{
    fetch(`/note-app/${title.pathname}`)
    .then((res)=>res.json())
    .then(data=>{
      setdata(data.data[0])
      setDes(data.data[0].description)
    })
  },[])

  const handleClick = () =>{
    fetch(`/note-app/${title.pathname}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
      description
     }) 
    }).then((res)=>res.json())
    .catch((err)=>console.log(err))
  }

  return (
    <>
    {
      data ? <>
      <div>
      <h1></h1>
    </div>
    <div id="window">
  
  <div id="title">{data.title}</div>
  <textarea id="textarea" value={description} onChange={(e)=>setDes(e.target.value)} ></textarea>
  <button id="button" onClick={()=>handleClick()}>Save Changes</button>
</div></> : "..loading"

    }

    
    </>
  )
}

export default NotePage