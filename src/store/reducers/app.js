import { APP_TOGGLE_SIDEBAR, APP_TOGGLE_SETTING_PANEL } from "../action-types";

const initState = {
  sidebarCollapsed: false,
  settingPanelVisible: false,
};
function app(state, action) {
  switch (action.type) {
    case APP_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    case APP_TOGGLE_SETTING_PANEL:
      return {
        ...state,
        settingPanelVisible: !state.settingPanelVisible,
      };
    default:
      return initState;
  }
}

export default app;
