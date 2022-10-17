import {Platform} from 'react-native';
export const ENV_KEY = {
  DEV: 'DEV',
  PRO: 'PRO',
};

const commonConfigs = {};

const AppConfigs = {
  DEV: {
    END_POINT:
      Platform.OS === 'android'
        ? 'https://mobileapii.herokuapp.com' //         http://10.0.2.2:3000
        : 'https://mobileapii.herokuapp.com', //  :  : 'http://127.0.0.1:3000',
    ...commonConfigs,
  },
  PRO: {
    END_POINT: '',
    ...commonConfigs,
  },
};

export default AppConfigs.DEV;
