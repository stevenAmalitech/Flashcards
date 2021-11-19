import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard(state, { payload }) {
      state.cards[payload.id] = payload;
    }
  }
});

export const selectCards = state => state.cards.cards

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer
