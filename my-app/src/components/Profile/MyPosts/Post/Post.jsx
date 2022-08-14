import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://i.vimeocdn.com/portrait/18250331_640x640" alt="AVATAR"/>
            {props.postText}
            <div>
                <span>Like: {props.likes}</span>
            </div>
        </div>
    )
}

export default Post