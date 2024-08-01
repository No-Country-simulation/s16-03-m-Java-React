import { create } from "zustand";

import { createUserSlice, createSidebarSlice } from "./slices";
import { UserType } from "@/types";

export const useUserStore = create<UserType>()((...a) => ({
  ...createUserSlice(...a),
}));

export const useGenericStore = create<any>()((...a) => ({
  ...createSidebarSlice(...a),
}));
