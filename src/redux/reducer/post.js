import { createPost, getPost, getType } from "../action";
import { INIT_STATE } from "../../constant";

export default function postReducer(state = INIT_STATE.post, action){
 switch(action.type){
     case getType(getPost.getPostsRequest):
         return {
             ...state,
             isLoading : true
         }
     case getType(getPost.getPostsSuccess):
         return {
             ...state,
             isLoading : false,
             data: action.payload
         }
     case getType(getPost.getPostsFailure):
         return {
             ...state,
             isLoading : false,
         }
    case getType(createPost.createPostSuccess):
        return {
            ...state,
            data: [...state.data, action.payload],
        };
        // case getType(updatePost.updatePostSuccess):
        //     return {
        //       ...state,
        //       data: state.data.map((post) =>
        //         post._id === action.payload._id ? action.payload : post
        //       ),
        //     };
    default:
        return state
 }
}