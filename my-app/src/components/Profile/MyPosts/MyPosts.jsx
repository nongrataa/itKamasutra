import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
            <Post message='Hi, how are you?'/>
            <Post message='Hi my name is Aliaksandr!'/>
            <Post message='I learn ReactJS'/>
            <Post message='Hello World'/>
        </div>
    )
}

export default MyPosts