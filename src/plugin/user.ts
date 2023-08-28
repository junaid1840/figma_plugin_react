import { EVENT_TYPE } from '../app/constants/event';

export const setUserDetails = async () => {
  const userDetails = await figma.clientStorage.getAsync('userDetails');
  if (userDetails) {
    figma.ui.postMessage({
      type: EVENT_TYPE.GET_USER_FROM_LOCAL_STORAGE,
      data: JSON.parse(userDetails),
    });
  }
};
