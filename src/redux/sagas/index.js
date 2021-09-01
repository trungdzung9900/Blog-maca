import {takeLatest, call,put} from 'redux-saga/effects';
import  * as actions from '../action';
import * as api from '../../api'

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPost);
        console.log(posts);
        yield put(actions.getPost.getPostsSuccess(posts.data))
      } catch (err) {
        console.error(err);
        yield put(actions.getPost.getPostsFailure(err));
      }
}


function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

// function* updatePostSaga(action) {
//   try {
//     const updatedPost = yield call(api.updatePost, action.payload);
//     yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
//   } catch (err) {
//     console.error(err);
//     yield put(actions.updatePost.updatePostFailure(err));
//   }
// }


function* mySaga(){
    yield takeLatest(actions.getPost.getPostsRequest,fetchPostSaga)
    yield takeLatest(actions.createPost.createPostRequest,createPostSaga)
    
}

export default mySaga