import React,{useState,useEffect} from 'react' 
import { useNavigate } from 'react-router-dom';
import './NoteIndex.css'

const NoteIndex = () => {

    const [data,setData] = useState('');
    const navigate = useNavigate()

    useEffect(()=>{
      fetch('/note-app')
    .then((res)=>res.json())
    .then((data)=>{
                    setData(data)
                  })
    },[])

    const handleClick = (title) =>{
      navigate(`${title}`)
    }    

  return (
    <>
    
    <div class="wrapper">
      
  
  {
    data ? 
    data.data.map((item)=>{
      return <div class="box">
  <div class="heading">{item.title}</div>
    <div class="content">
      {item.description}
    </div>
    <button onClick={(title)=>{handleClick(item.title)}} >View</button>
  </div>
    }) : "..loading"
  }
    
    
  </div>
  <button onClick={()=>navigate('/new-note')} className="button">Add new note +</button>
    </>
  )
}

export default NoteIndex