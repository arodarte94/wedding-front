import { configureStore, createSlice } from "@reduxjs/toolkit";

// Stolen from old Nallely's birthday project 2022, ugly code but it does the job
const weddingStore = createSlice({
  name: "wedding",
  initialState: {
    time: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
    },
    isWeddingDate: false,
  },
  reducers: {
    tick: (state, action) => {
      const countDownDate = new Date("Nov 9, 2024 00:00:00").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) state.isWeddingDate = true;
      else {
        state.time.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        state.time.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        state.time.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60),
        );
        state.time.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    },
  },
});

export const { tick } = weddingStore.actions;

export default configureStore({
  reducer: {
    wedding: weddingStore.reducer,
  },
});
