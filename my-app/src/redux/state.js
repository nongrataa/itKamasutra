let state = {
    profilePage:{
        postsData: [
            {id: 1, postText: 'Hi, how are you?', likesCount: 4},
            {id: 1, postText: 'Hi my name is Aliaksandr!', likesCount: 6},
            {id: 1, postText: 'I learn ReactJS', likesCount: 1},
            {id: 1, postText: 'Hello World', likesCount: 8},
        ],
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

export default state