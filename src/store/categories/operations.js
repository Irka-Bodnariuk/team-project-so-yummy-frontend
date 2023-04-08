import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://team-project-so-yummy-backend.onrender.com/api",
});

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, thunkAPI) => {
        try {
            const res = await instance.get("/recipes/category-list");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)