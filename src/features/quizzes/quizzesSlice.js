import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz(state, { payload }) {
      state.quizzes[payload.id] = payload;
    }
  }
});

export const addQuizThunk = (quiz) => {
  const { id, topicId } = quiz;
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizId({ quizId: id, topicId: topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
