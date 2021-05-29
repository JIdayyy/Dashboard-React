import { atom } from 'recoil';

const isDashboardState = atom({
  key: 'adminState',
  default: true,
});

const isNotificationState = atom({
  key: 'isNotificationState',
  default: false,
});

const isHouseState = atom({
  key: 'isHouse',
  default: false,
});

const isSurfCampState = atom({
  key: 'isSurfCamp',
  default: false,
});

export { isDashboardState, isNotificationState, isHouseState, isSurfCampState };
