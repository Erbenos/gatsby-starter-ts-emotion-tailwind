import 'twin.macro';
import styledImport from '@emotion/styled';
import { css as cssImport } from '@emotion/core';

declare module 'twin.macro' {
  export const styled: typeof styledImport;
  export const css: typeof cssImport;
}
