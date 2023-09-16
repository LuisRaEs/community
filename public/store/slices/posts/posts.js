import { createSlice } from "@reduxjs/toolkit";

let initialPosts = [
    {
        id: "0",
        userID: "1",
        status: "1",
        content:"Somos Hound Express: !Feliz Cumpleaños a todos los Hounters de Agosto",
        files:[],
        images:[],
        videos:[],
        reactions:{
            likes:"20",
            recommendations:"1"
        },
        coments:[]
    },
    {
        id: "1",
        userID: "1",
        status: "1",
        content:"Menu de la semana",
        files:[],
        images:[],
        videos:[],
        reactions:{
            likes:"100",
            recommendations:"50"
        },
        comments:[
            {
                content:"Abrá algun dá en especial???",
                userImg: "url",
                userName: "",
                userID: "",
                userRol: "",
                timePost: "10",
                timeUnits: "horas"
            }
        ]
    },
    {
        id: "2",
        userID: "1",
        status: "1",
        content:"Comunicado especial",
        files:[],
        images:[],
        videos:[],
        reactions:{
            likes:"233",
            recommendations:"46"
        },
        comments:[
            {
                content:"Entendido",
                userImg: "url",
                userName: "",
                userID: "",
                userRol: "",
                timePost: "10",
                timeUnits: "horas"
            },
            {
                content:"Entendido",
                userImg: "url",
                userName: "",
                userID: "",
                userRol: "",
                timePost: "5",
                timeUnits: "minutos"
            }
        ]

    }
]

const posts = createSlice({
    name: 'posts',
    initialState: initialPosts ?? {},
    reducers: {
        createPost:(state,action)=>{
            let newPost = {
                id: state.length,
                userID: action.payload.userID,
                status: "1",
                content: action.payload.content?? "",
                files: action.payload.files ?? [],
                images: action.payload.images ?? [],
                videos: action.payload.videos ?? [],
                reactions:{
                    likes:"0",
                    recommendations:"0"
                },
                coments:[]
            }
            return [...state,newPost]
        },
        changePostStatus:(state,action)=>{
            let selectedPost = state.find(el=>{
                if (el.id === action.payload.id)
                    return {...el}
            })
            selectedPost.status = state.status === "1" ? "0" : "1"

            let newState = state.filter(el=>{
                if (el.id !== action.payload.id)
                    return {...el}
            })

            return [...newState,selectedPost]
        },
        editPost:(state,action)=>{
            let selectedPost = state.find(el=>{
                if (el.id === action.payload.id)
                    return {...el}
            })

            let newPost = {
                id: selectedPost.id,
                userID: selectedPost.userID,
                status: selectedPost.status,
                content: action.payload.content?? selectedPost.content,
                files: action.payload.files ?? selectedPost.files,
                images: action.payload.images ?? selectedPost.images,
                videos: action.payload.videos ?? selectedPost.videos,
                reactions:{
                    likes:selectedPost.reactions.likes,
                    recommendations:selectedPost.reactions.likes
                },
                coments: selectedPost.comments
            }

            let newState = state.filter(el=>{
                if (el.id !== action.payload.id)
                    return {...el}
            })

            return [...newState,newPost]
        }
    }
})

export const {createPost,changePostStatus,editPost} = posts.actions;
export const postsReducer = posts.reducer;