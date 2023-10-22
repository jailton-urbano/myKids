import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


const initialState = {
    lines: [],
    students: [],
    selectedLine: null,
    timeTable: [],
    icons: [],
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setLines(state, action) {
            state.lines = action.payload;
        },
        setStudents(state, action) {
            state.students = action.payload;
        },
        setSelectedLine(state, action) {
            state.selectedLine = action.payload;
        },
        setTimeTable(state, action) {
            state.timeTable = action.payload;
        },
        setIcons(state, action) {
            state.icons = action.payload;
        }
    },
});

export const fetchContent = createApi({
    reducerPath: process.env.BACKEND_API_URL,
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
    endpoints: builder => ({
        getLines: builder.query({
            query: () => `lines`
        }),
        getLine: builder.query({
            query: (lineId) => `lines/${lineId}`
        }),
        getStudents: builder.query({
            query: () => `students`
        }),
        getStudent: builder.query({
            query: (studentId) => `students/${studentId}`
        }),
        getIcons: builder.query({
            query: () => `icons`
        }),
        getTimeTable: builder.query({
            query: (userId) => `user/${userId}/timetable`
        }),

    })
})


export const { setLines, setStudents, setSelectedLine, setTimeTable, setIcons } = contentSlice.actions;

export const { useGetIconsQuery, useGetLineQuery, useGetLinesQuery, useGetStudentQuery, useGetStudentsQuery, useGetTimeTableQuery } = fetchContent
