import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.postsData.map((post)=>{
        return <Post postText={post.postText} likes={post.likesCount}/>
    })

    return (
        <div className={style.posts}>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <button>ADD POST</button>
                <button>REMOVE POST</button>
            </div>
            <h3>MY POSTS</h3>
            {postsElements}
        </div>
    )
}

export default MyPosts