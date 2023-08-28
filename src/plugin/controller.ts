import { EVENT_TYPE } from '../app/constants/event';
import { setUserDetails } from './user';

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === EVENT_TYPE.SET_USER_IN_LOCAL_STORAGE) {
    if (msg.userDetails) {
      await figma.clientStorage.setAsync('userDetails', JSON.stringify(msg.userDetails));
    }
  }
  if (msg.type === EVENT_TYPE.GET_USER_FROM_LOCAL_STORAGE) {
    setUserDetails();
  }
};
