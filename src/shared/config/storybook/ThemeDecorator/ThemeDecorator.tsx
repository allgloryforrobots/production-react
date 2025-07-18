import type { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

// export const ThemeDecorator: Decorator = (Story) => (
//   <div className={`app `}>
//     <Story />
//   </div>
// );
// @ts-ignore
export const ThemeDecorator = (theme: Theme) => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);