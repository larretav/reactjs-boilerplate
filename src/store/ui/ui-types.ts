export type State = {
  isMobileSideMenuOpen: boolean;
  isDesktopSideMenuOpen: boolean;
  noticesDisplayed: boolean;
};

export type Actions = {
  openMobileSideMenu: () => void;
  closeMobileSideMenu: () => void;
  toggleMobileSidebar: () => void;
  openDesktopSideMenu: () => void;
  closeDesktopSideMenu: () => void;
  toggleDesktopSidebar: () => void;
  setNoticesDisplayed: (open: boolean) => void; 
};
