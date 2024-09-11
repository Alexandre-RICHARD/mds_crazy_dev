import type { StateCreator } from "zustand";

import type { DefaultStoreType } from "./default.store.type";

export const useTranslationStore: StateCreator<DefaultStoreType> = (set) => ({
  something: "something",
  setSomething: (newSomething: string) =>
    set(() => ({ something: newSomething })),
});
