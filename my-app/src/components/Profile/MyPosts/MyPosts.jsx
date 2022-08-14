import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData=[
        {id:1, postText:'Hi, how are you?', likesCount:4},
        {id:1, postText:'Hi my name is Aliaksandr!', likesCount:6},
        {id:1, postText:'I learn ReactJS', likesCount:1},
        {id:1, postText:'Hello World', likesCount:8},
    ]

    let postsElements = postsData.map((post)=>{
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