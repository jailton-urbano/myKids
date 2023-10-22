import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const initialState = {
    user: null,
    token: null,
    role: null,
    notifications: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        setNotification(state, action) {
            state.notifications = action.payload;
        }
    },
});



export const fetchUser = createApi({
    reducerPath: process.env.BACKEND_API_URL,
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/user' }),
    endpoints: builder => ({
        getLoggedUser: builder.query({
            query: () => ''
        }),
        getNotifications: builder.query({
            query: (userId) => `/${userId}/notifications`,
            transformResponse: (response) => {
                return response.data
            },
        })
    })
})

export const { useGetLoggedUserQuery, useGetNotificationsQuery } = fetchUser
export const { setUser, setNotification } = userSlice.actions;


