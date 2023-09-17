import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // GET TASKS
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ["Tasks"],
        }),
        // UPDATE TASKS
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Tasks"],
        }),
        // ADD TASKS
        addTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ["Tasks"],
        }),
    })
});

export const {useAddTaskMutation, useGetTasksQuery , useUpdateTaskMutation  }  = taskApi;