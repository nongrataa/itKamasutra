import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, onPostTextChangeActionCreator} from "../../../redux/state";




const MyPosts = (props) => {

    let postsElements = props.posts.postsData.map((post)=>{
        return <Post postText={post.postText} likes={post.likesCount}/>
    })

    let newPostElement = React.createRef()

    let addPost = ()=>{
        props.dispatch(addPostActionCreator())
    }

    let onPostTextChange = ()=>{
        let text = newPostElement.current.value
        let action = onPostTextChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={style.posts}>
            <div>
                <div>
                    <textarea onChange={onPostTextChange} ref={newPostElement} value={props.posts.newPostText} cols="30" rows="5"/>
                </div>
                <button onClick={addPost}>ADD POST</button>
                <button>REMOVE POST</button>
            </div>
            <h3>MY POSTS</h3>
            {postsElements}
        </div>
    )
}

export default MyPosts