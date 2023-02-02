import React from "react";

const PostItem = (props) => {
  
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id} {props.post.title}</strong>
        <div>
          JS - prog language
        </div>
      </div>
      <div className="post__btn">
        <button>Delete</button>
      </div>
    </div>
  )
}

export default PostItem;