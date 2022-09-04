/*let rerenderEntireTree = () =>{
    console.log('State rerender!')
}

let state = {
    profilePage:{
        postsData: [
            {id: 1, postText: 'Hi, how are you?', likesCount: 4},
            {id: 2, postText: 'Hi my name is Aliaksandr!', likesCount: 6},
            {id: 3, postText: 'I learn ReactJS', likesCount: 1},
            {id: 4, postText: 'Hello World', likesCount: 8},
        ],
        newPostText:''
    },

    dialogsPage:{
        dialogsData: [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Vasiliy"},
            {id: 4, name: "Polina"},
            {id: 5, name: "Nikolay"},
            {id: 6, name: "Masha"},
            {id: 7, name: "Olga"}
        ],

        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'How are you?'},
            {id: 1, message: 'Where are your from?'},
            {id: 1, message: 'I am fine, thanks.'},
            {id: 1, message: 'I work in Belarus.'},
            {id: 1, message: 'I learn ReactJS.'},
            {id: 1, message: 'I am from Belarus, but i work in Poland'},
        ]
    }
}

export let addPost = ()=>{
    let newPost = {
        id:5,
        postText: state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText)=>{
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe=(observer)=>{
    rerenderEntireTree=observer
}


export default state*/


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, postText: 'Hi, how are you?', likesCount: 4},
                {id: 2, postText: 'Hi my name is Aliaksandr!', likesCount: 6},
                {id: 3, postText: 'I learn ReactJS', likesCount: 1},
                {id: 4, postText: 'Hello World', likesCount: 8},
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Vasiliy"},
                {id: 4, name: "Polina"},
                {id: 5, name: "Nikolay"},
                {id: 6, name: "Masha"},
                {id: 7, name: "Olga"}
            ],

            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 1, message: 'How are you?'},
                {id: 1, message: 'Where are your from?'},
                {id: 1, message: 'I am fine, thanks.'},
                {id: 1, message: 'I work in Belarus.'},
                {id: 1, message: 'I learn ReactJS.'},
                {id: 1, message: 'I am from Belarus, but i work in Poland'},
            ],
            newMessageText: ''
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber(state) {
        console.log('State rerender!')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost = {
            id: 5,
            postText: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                postText: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
        if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 9,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }else if (action.type===UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText=action.newText
            this._callSubscriber(this._state)
        }
    }

}


export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const onPostTextChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}

export const onMessageTextChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default store