import type { StateCreator } from "zustand";

import type { DefaultStoreType } from "./default.store.type";
import type { UserData } from "./userData.type";

export const useTranslationStore: StateCreator<DefaultStoreType> = (set) => ({
  isUserConnected: false,
  setIsUserConnected: (payload: boolean) =>
    set(() => ({ isUserConnected: payload })),

  userData: undefined,
  setUserData: (payload: UserData) => set(() => ({ userData: payload })),
});
