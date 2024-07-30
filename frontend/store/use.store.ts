import { create } from "zustand";

import { createUserSlice } from "./slices";
import { UserType } from "@/types";

export const useUserStore = create<UserType>()((...a) => ({
  ...createUserSlice(...a),
}));
