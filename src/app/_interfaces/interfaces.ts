export interface ITopBar {
  isLoggedIn?: boolean;
  isCodingPage?: boolean;
  hasNewNotice?: boolean;
}

export interface ISearchBar {
  isSmall?: boolean;
}

export interface ITabBar {
  menuList: string[];
}

// 전역 변수 관련 Interface
export interface ITabStore {
  tab: string;
  setTab: (newTab: string) => void;
}
