import { Avatar } from '@material-ui/core'
import React, { useEffect } from 'react'
import "./Comment.css"
import Comments from "./Comments"
import Input from './Input';

function Comment() {
    useEffect(() => {
        return Comments
    }, []);

    var replyToPost= (e) => {
        console.log("clicked");
        console.log(e);
        <Input />
    }
    return (
        <div className="comment">
            <h1>Comment Section</h1>
        <Input />
        {Comments.map(({id, comment}, index) => {
            return <div key={index} className="comment__display">
                        <button onClick={replyToPost}>reply</button>
                            <Avatar />
                        <h4>{comment}</h4>
                    </div>
        })}           
        </div>
    )
}

export default Comment
