import React from 'react'
import {Grid} from "@material-ui/core"
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../redux/action'
import { postState$ } from '../../redux/selectors';
import Post from './Post';
export default function PostList(){
 const dispatch = useDispatch ();
 const post = useSelector(postState$)// get state 
 React.useEffect(()=>{
    dispatch(actions.getPost.getPostsRequest())
 },[dispatch])
 return (
   <Grid container spacing={2} alignItems='stretch'>
     {post.map((post) => (
       <Grid key={post._id} item xs={12} sm={6}>
         <Post post={post} />
       </Grid>
     ))}
   </Grid>
 );
}