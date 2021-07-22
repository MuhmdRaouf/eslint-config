import type { AppType, AppReturnType } from './types/App';

import { instruction } from './Instruction';

export const App: AppType = (): AppReturnType => {
  instruction();
};
