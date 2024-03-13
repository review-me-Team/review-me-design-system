import { css } from 'styled-components';

const FONT_WEIGHT = {
  REGULAR: 400,
  BOLD: 700,
};
const FONT_SIZE = {
  XXL: '2rem',
  XL: '1.5rem',
  L: '1.125rem',
  M: '1rem',
  SM: '.875rem',
  S: '.75rem',
};
const LINE_HEIGHT = {
  XXL: '3rem',
  XL: '2.5rem',
  L: '2rem',
  M: '1.75rem',
  SM: '1.5rem',
  S: '1.25rem',
};

const font = {
  body: {
    weak: css`
      font-weight: ${FONT_WEIGHT.REGULAR};
      font-size: ${FONT_SIZE.SM};
      line-height: ${LINE_HEIGHT.SM};
    `,
    default: css`
      font-weight: ${FONT_WEIGHT.REGULAR};
      font-size: ${FONT_SIZE.M};
      line-height: ${LINE_HEIGHT.M};
    `,
    medium: css`
      font-weight: ${FONT_WEIGHT.REGULAR};
      font-size: ${FONT_SIZE.L};
      line-height: ${LINE_HEIGHT.L};
    `,
  },
  title: {
    weak: css`
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.SM};
      line-height: ${LINE_HEIGHT.SM};
    `,
    default: css`
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.L};
      line-height: ${LINE_HEIGHT.L};
    `,
    medium: css`
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.XL};
      line-height: ${LINE_HEIGHT.XL};
    `,
    strong: css`
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.XXL};
      line-height: ${LINE_HEIGHT.XXL};
    `,
  },
  button: {
    weak: css`
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.SM};
      line-height: ${LINE_HEIGHT.SM};
    `,
    default: css`
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.M};
      line-height: ${LINE_HEIGHT.M};
    `,
    strong: css`
      font-weight: ${FONT_WEIGHT.BOLD};
      font-size: ${FONT_SIZE.L};
      line-height: ${LINE_HEIGHT.L};
    `,
  },
  placeholder: css`
    font-weight: ${FONT_WEIGHT.BOLD};
    font-size: ${FONT_SIZE.M};
    line-height: ${LINE_HEIGHT.M};
  `,
  label: css`
    font-weight: ${FONT_WEIGHT.BOLD};
    font-size: ${FONT_SIZE.SM};
    line-height: ${LINE_HEIGHT.SM};
  `,
  caption: css`
    font-weight: ${FONT_WEIGHT.BOLD};
    font-size: ${FONT_SIZE.S};
    line-height: ${LINE_HEIGHT.S};
  `,
} as const;

const palette = {
  blue: '#007AFF',
  red: '#FF3B30',
  navy: '#0025E6',
  white: '#FFFFFF',
  black: '#000000',
  green50: '#F8FBF4',
  green100: '#D8F3DC',
  green200: '#B7E4C7',
  green300: '#95D5B2',
  green400: '#74C69D',
  green500: '#52B788',
  green600: '#40916C',
  green700: '#2D6A4F',
  green800: '#1B4332',
  green900: '#081C15',
  gray50: '#FEFEFE',
  gray100: '#F7F7FC',
  gray200: '#EFF0F6',
  gray300: '#D9DBE9',
  gray400: '#BEC1D5',
  gray500: '#A0A3BD',
  gray600: '#6E7191',
  gray700: '#4E4B66',
  gray800: '#2A2A44',
  gray900: '#14142B',
} as const;

const color = {
  neutral: {
    text: {
      weak: palette.white,
      default: palette.gray900,
      sub: palette.gray400,
      strong: palette.black,
    },
    bg: {
      default: palette.white,
      light: palette.gray100,
      deep: palette.gray400,
    },
  },
  accent: {
    text: {
      weak: palette.green400,
      strong: palette.green700,
    },
    bg: {
      default: palette.green400,
      strong: palette.green600,
    },
    bd: {
      weak: palette.green400,
      strong: palette.green700,
    },
  },
  system: {
    red: palette.red,
    blue: palette.blue,
    navy: palette.navy,
  },
} as const;

const zIndex = {
  modal: 20,
  backDrop: 10,
  floating: 1,
} as const;

const theme = { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, font, palette, color, zIndex };
type ThemeType = typeof theme;

export { theme, ThemeType };
