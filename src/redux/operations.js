import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://65bbe1ab52189914b5bd44d1.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get("/contacts");
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

    export const addContact = createAsyncThunk("contacts/addContact",
    async ({name, number}, thunkAPI) => {
        try {
            const { data } = await axios.post("/contacts", {name, number });
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });


    export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });




