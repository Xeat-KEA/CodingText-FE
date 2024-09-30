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
