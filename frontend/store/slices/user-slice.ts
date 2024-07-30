import { StateCreator } from "zustand";

import { UserType } from "@/types";

const createUserSlice: StateCreator<UserType> = (set) => ({
  user: null,
  setUser: (user: UserType) => set((state) => ({ ...state, user })),
});

export default createUserSlice;
