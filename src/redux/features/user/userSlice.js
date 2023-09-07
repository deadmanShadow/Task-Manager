import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: 'Raihan Shamil',
    email: 'raihanshamil33@gmail.com',
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;