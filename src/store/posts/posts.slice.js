import { createSlice } from "@reduxjs/toolkit";

import { getPosts, getRecentPosts, setPost } from './posts.thunks';

const initialState = {
  items: {
    content: null,
    isLoading: false,
    isError: false
  },
  recent: {
    content: null,
    isLoading: false,
    isError: false
  },
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.items.isError = false;
      state.items.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.items.content = action.payload;
      state.items.isLoading = false;
      state.items.isError = false;
    },
    [getPosts.rejected]: (state) => {
      state.items.isLoading = false;
      state.items.isError = true;
    },

    [getRecentPosts.pending]: (state) => {
      state.recent.isError = false;
      state.recent.isLoading = true;
    },
    [getRecentPosts.fulfilled]: (state, action) => {
      state.recent.content = action.payload;
      state.recent.isLoading = false;
      state.recent.isError = false;
    },
    [getRecentPosts.rejected]: (state) => {
      state.recent.isLoading = false;
      state.recent.isError = true;
    },

    [setPost.pending]: (state) => {
      state.recent.isError = false;
      state.recent.isLoading = true;
    },
    [setPost.fulfilled]: (state, action) => {
      if (state.recent.content.data) {
        state.recent.content.data.unshift(action.payload);
      }
      
      state.recent.isLoading = false;
      state.recent.isError = false;
    },
  }
});

export const PostsActions = {
  ...PostsSlice.actions,
  getPosts
};

export default PostsSlice.reducer;