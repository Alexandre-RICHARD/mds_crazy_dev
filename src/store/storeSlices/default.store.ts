import type { StateCreator } from "zustand";

import type { DefaultStoreType } from "./default.store.type";

export const useTranslationStore: StateCreator<DefaultStoreType> = (set) => ({
  isUserConnected: false,
  setIsUserConnected: (payload) => set(() => ({ isUserConnected: payload })),

  userData: undefined,
  setUserData: (payload) => set(() => ({ userData: payload })),
});
