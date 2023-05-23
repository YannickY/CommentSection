import { useState } from 'react';
import "./React.css";

let idNum = 0;

export default function Comments() {
   
    const [comment, setComment] = useState("");
    const [sec, setSec] = useState([]);

    function User(e) {
        setComment(e.target.value);

    }

    function Button() {
        setSec([
            {id: idNum++, com: comment},
            ...sec
        ])

    }

    
    


    return (
        <div>
            <h1>[Comment Section]</h1>
            <input value={comment} onChange={User}/><button onClick={Button}>Add commment</button>
            <ul>{sec.map(ment => <li styles={{}}key={ment.id}> {ment.com} <a href="#" onClick={() => {
                setSec(sec.filter(se => se.id !== ment.id));
            }}><i> Delete Comment</i></a></li>)}</ul>

            
            

        </div>
    )
}