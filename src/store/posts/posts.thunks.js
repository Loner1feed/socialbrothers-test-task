import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiService } from "../../services/ApiService";
import { message } from "antd";


const getPostsCall = async (params, { rejectWithValue }) => {
  try {
    const res = await ApiService.getPosts(params);

    if (!res.data && res.status !== 200) {
      throw res;
    }

    return res.data;
  } catch (error) {
    message.error("error");
    return rejectWithValue(error.message);
  }
}

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (params, { rejectWithValue }) => getPostsCall(params, { rejectWithValue })
);

export const getRecentPosts = createAsyncThunk(
  "posts/getRecentPosts",
  async (params, { rejectWithValue }) => getPostsCall(params, { rejectWithValue })
);

export const setPost = createAsyncThunk(
  "posts/setPost",
  async (params, { rejectWithValue }) => {
    try {
      const res = await ApiService.setPost(params);

      if (res.data) {
        message.success("Bericht succesvol gemaakt");
        return res.data;
      }
    } catch (error) {
      message.error("Fout opgetreden");
      return rejectWithValue(error.message);
    }
  }
)