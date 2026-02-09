/* eslint-disable */

import type { State, Actions } from "./ui-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import createSelectors from "../selectors";

const initState: State = {
  isMobileSideMenuOpen: false,
  isDesktopSideMenuOpen: true,
  noticesDisplayed: false
};

const uiStore = create<State & Actions>()(persist(immer((set, get) => ({
  ...initState,

  openMobileSideMenu: () => set((state) => { state.isMobileSideMenuOpen = true; }),
  closeMobileSideMenu: () => set((state) => { state.isMobileSideMenuOpen = false; }),
  toggleMobileSidebar: () => set((state) => { state.isMobileSideMenuOpen = !state.isMobileSideMenuOpen; }),
  openDesktopSideMenu: () => set((state) => { state.isDesktopSideMenuOpen = true; }),
  closeDesktopSideMenu: () => set((state) => { state.isDesktopSideMenuOpen = false; }),
  toggleDesktopSidebar: () => set((state) => { state.isDesktopSideMenuOpen = !state.isDesktopSideMenuOpen; }),

  setNoticesDisplayed: (open) => set((state) => { state.noticesDisplayed = open }),

})), { name: "uiStore" }));

export const useUIStore = createSelectors(uiStore);
