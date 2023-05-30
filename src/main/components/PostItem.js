import React from "react";
import bigArrow from "../../img/icons/big-arrow.png"


const PostItem = ({post}) => {
    return(
        <div className={post.cName} >
            <div className={post.divName}>
                <h2>{post.title}</h2> 
                <h3>{post.secondTitle}<img src={bigArrow} alt="arrow"/></h3>
            </div>
            <p>{post.body}</p>
        </div>
    )
} 

export default PostItem;