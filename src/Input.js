import React, { useState } from 'react'
import Comments from './Comments';

function Input() {
    const [input, setInput] = useState("");

var handleChange=(e) =>{
    setInput(e.target.value);
}

var postComment= () => {
    Comments.push({id:4, comment:input});
    console.log(Comments);
    setInput("");
}
    return (
        <div className="comment__post">
            <textarea onChange={handleChange} value={input} name="comment" id="commentBox" cols="50" rows="2" placeholder="Write your comment here!"></textarea>
            <button onClick={postComment}>Post</button>
        </div>
    )
}

export default Input
