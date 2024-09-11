import { create } from "zustand";

import type { CombinedStoreType } from "./combinedStore.type";
import { useTranslationStore } from "./storeSlices/default.store";

export const useCombinedStore = create<CombinedStoreType>()((...a) => ({
  ...useTranslationStore(...a),
}));

export const { getInitialState, getState, setState, subscribe } =
  useCombinedStore;
