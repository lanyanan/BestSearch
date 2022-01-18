//demoaction
export const CHANGE_DEMO_ACTION = 'CHANGE_DEMO_ACTION';
export const ASYNC_GET_DATA = 'ASYNC_GET_DATA';

export function changeDemoAction(data) {
  return { type: CHANGE_DEMO_ACTION, data }
}