import React from 'react'
import "./Comment.css"

function Comment() {
    return (
        <div className="comment">
        <h1>Comment Section</h1>
        <div className="comment__display">
        <Avatar />
        <h4>Nice article.</h4>
        </div>
        <div className="comment__display">
        <h4>Good job! Keep it up.</h4>
        </div>
        <div className="comment__display">
        <h4>Beautiful thoughts!</h4>
        </div>
            <textarea name="comment" id="commentBox" cols="30" rows="10">Write your comment here!</textarea>
        </div>
    )
}

export default Comment
