import React,{useState} from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Fab } from "@mui/material";
// import { Zoom } from "@mui/material";

function Form(props){
    const[note,setNote]=useState({title:"",content:"" });
    
    
                function handleChange(event){
                    const {name,value}=event.target;
                setNote((prevVlaue)=>{
                    return{
                        ...prevVlaue,[name]:value
                    };

                });
                }

                function handleClick(event)
                {
                    props.onAdd(note);
                    setNote({title:"",content:"" });
                    event.preventDefault();
                }
    return(<>
    <form className="create-note"> 
        <input 

        name="title" 
        onChange={handleChange} 
        value={note.title} 
        placeholder="Title..">
        </input>
        <textarea
        name="content" 
        onChange={handleChange} 
        value={note.content}
        placeholder="Text Area.."

        /> 

        
       
        <button
        onClick={handleClick} 
        >
        Add</button>
    </form>

    </>);
}

export default Form;