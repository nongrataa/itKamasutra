import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.img_head} src="https://bovsihosting.com/wp-content/uploads/2015/10/header_alt-3_bg.jpg" alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                Аватар профиля и описание
            </div>
        </div>
    )
}

export default ProfileInfo