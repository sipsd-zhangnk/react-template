import { APP_TOGGLE_SIDEBAR, APP_TOGGLE_SETTING_PANEL } from "../action-types";
export const toggleSiderBar = () => {
  return {
    type: APP_TOGGLE_SIDEBAR,
  };
};

export const toggleSettingPanel = () => {
  return {
    type: APP_TOGGLE_SETTING_PANEL,
  };
};
