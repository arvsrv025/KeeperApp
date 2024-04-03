import React from "react";
import notes from "../notes";
import Entry from "./Entry";
function createCard(obj)
{
    return <Entry

        key={obj.key}
        title={obj.title}
        content={obj.content}
    />
}

function Note(){
    return(
        notes.map(createCard)
    );
}

export default Note;