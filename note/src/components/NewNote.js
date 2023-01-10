import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './NewNote.css'

const NewNote = () => {

  const [title,setTitle] = useState('')
  const [description,setDes] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleClick = () => {
    if(title.length < 10 && (description=="" || !description)){
        
        setMessage("Enter Description")
    }
    else if(!title){
        setMessage("Enter Title")
    }
      else {
        fetch("/note-app/new-note",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify({
            title,
            description
           }) 
          }).then((res)=>res.json())
          .then(navigate('/'))
          .catch((err)=>console.log(err))
      }

  }

  return (
    <>
    <div id="window">
  
  <div id="title"><input 
  id='title'
  placeholder='Enter Title' 
  value={title} onChange={(e)=>setTitle(e.target.value)}></input></div>
  <textarea id="textarea" value={description} onChange={(e)=>setDes(e.target.value)} ></textarea>
  <button id="button" onClick={()=>handleClick()}>Save</button>
</div>
{message}
    </>
  )
}

export default NewNote