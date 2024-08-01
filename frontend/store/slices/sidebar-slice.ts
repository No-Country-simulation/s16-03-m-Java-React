import { StateCreator } from "zustand";

type State = {
  activeSidebar: boolean;
};

type Action = {
  // eslint-disable-next-line no-unused-vars
  setActiveSidebar: (active: State["activeSidebar"]) => void;
};

const createSidebarSlice: StateCreator<State & Action> = (set) => ({
  activeSidebar: true,
  setActiveSidebar: (active: boolean) =>
    set((state) => ({ ...state, activeSidebar: active })),
});

export default createSidebarSlice;
