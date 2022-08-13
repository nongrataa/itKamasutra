import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://i.vimeocdn.com/portrait/18250331_640x640" alt="AVATAR"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post