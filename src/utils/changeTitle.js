export const changeTitle = () => {
  switch (window.location.pathname) {
    case "/schedule":
      return "Schedule";
    case "/overview":
      return "Overview";
    case "/chat":
      return "Chat";
    case "/settings":
      return "Settings";
    default:
      return "Profile";
  }
};
