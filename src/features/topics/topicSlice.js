import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, { payload }) {
      state.topics[payload.id] = { ...payload, quizIds: [] };
    },
    addQuizId(state, { payload }) {
      state.topics[payload.topicId].quizIds.push(payload.quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;
