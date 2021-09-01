import React from 'react'
import { Container, Fab } from '@material-ui/core'
import PostList from '../components/PostList'
import AddIcon from '@material-ui/icons/Add'
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import useStyles from './style'
import { showModal } from '../redux/action'
import CreatePostModal from '../components/CreatePostModal'
export default function HomePage() {
    const classes = useStyles(); 
    const dispatch = useDispatch();
    const openCreatePostModal = React.useCallback(()=>{
        dispatch(showModal())
    },[dispatch]);
    return(
        <Container maxWidth = "lg" >
            <Header/> 
            <PostList/>
            <CreatePostModal/>
            <Fab color = 'primary' className= {classes.fab} onClick= {openCreatePostModal}>
                <AddIcon/>
            </Fab>
        </Container>
    )
}