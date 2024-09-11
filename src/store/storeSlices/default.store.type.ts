import type { UserData } from "./userData.type";

export type DefaultStoreType = {
  isUserConnected: boolean;
  setIsUserConnected: (payload: boolean) => void;
  userData: UserData | undefined;
  setUserData: (payload: UserData | undefined) => void;
};
