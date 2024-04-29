import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Form from "./Form";


function App(){
    const [notes,setNotes]=useState([]);
    function addNote(note){
        setNotes((prevValue)=>{
            return [...prevValue,note];
        })
        
    }
    function deleteItem(id){
        setNotes((prevValue)=>{
            return prevValue.filter((noteitem,index)=>{
                return index!==id;
            })
        })

    }
    return <>
        
        <Header/>
        <Form onAdd={addNote}/>
        {notes.map((item,index)=>{
            return (<Note  key={index} id={index} title={item.title} content={item.content} delItem={deleteItem}/>);
        })}
        <Footer/>
    </>
}

export default App;