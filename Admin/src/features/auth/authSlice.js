import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit'
import authServices from './authService'


const userDefaultState = {
    _id: null,
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    token: null
}

const initialState = {
    user: userDefaultState,
    isError: false,
    isLoading: false,
    isSucess: false,
    message: "",
}

const login = createAsyncThunk('auth/admin-login', async (user, thunkAPI) => {
    try {
        return await authServices.login(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSucess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isSucess = false;
                state.isError = true
                state.user = null;
            })
    }
})

export default authSlice.reducer;