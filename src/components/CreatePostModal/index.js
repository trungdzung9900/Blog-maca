import {Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalState$ } from "../../redux/selectors";
import useStyles from './style';
import FileBase64 from 'react-file-base64';
import { createPost, hideModal } from '../../redux/action';
export default function CreatePostModal(){
    const dispatch = useDispatch();
    const { isShow } = useSelector(modalState$);
    const createModal = useStyles();
    const [data, setData] = React.useState({
        title: '',
        content: '',
        attachment: '',
      });// create state

    const onClose = React.useCallback(() => {
        dispatch(hideModal());
        setData({
          title: '',
          content: '',
          attachment: '',
  
        });
      }, [dispatch]);

    const onSubmit = React.useCallback(() =>{
      dispatch(createPost.createPostRequest(data))
      onClose();
    },[data, dispatch])
    const body =  <div className={createModal.paper} id= "simple-modal-title">
        <h2>Create New Post </h2>
        <form noValidate autoComplete = "off" className= {createModal.form}>
            <TextField
            className = {createModal.title}
            required
            label = 'Title'
            value = {data.title}
            onChange = {(e) => setData({...data, title: e.target.value})}
            />
            <TextareaAutosize
                className = {createModal.textarea}
                rowsMin={10}
                rowsMax={15}
                placeholder = 'Content...'
                value= {data.content }
                onChange={(e) => setData({ ...data, content: e.target.value })}
            />
             <FileBase64
          accept='image/*'
          multiple={false}
          type='file'
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}// update finish update statement
        />
        <div className={createModal.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
        </form>
     </div>
    
    return (
        <div>
          <Modal open= {isShow} onClose={onClose} >
            {body}
          </Modal>
        </div>
      );
}