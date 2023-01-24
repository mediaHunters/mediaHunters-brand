import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        white: string,
        gray: string,
        black: string,
        bittersweet: string
      },
      zIndex: {
        "z-index-1": nubmer,
        "z-index-10": number,
        "z-index-100": number,
        "z-index-1000":number,
        "z-index-10000": numebr,
    
      },
      fonts: number[],
      fontSizes: unknown
  }
}