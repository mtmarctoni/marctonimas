import { isTouchDevice } from './deviceDetection.js';

export const deviceState = {
  get hasTouch() {
    return typeof window !== 'undefined' && isTouchDevice();
  }
};
