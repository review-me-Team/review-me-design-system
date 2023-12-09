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
  S: '.75rem',
};
const LINE_HEIGHT = {
  XXL: '3rem',
  XL: '2.5rem',
  L: '2rem',
  M: '1.75rem',
  S: '1.25rem',
};

const font = {
  body: {
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
      font-size: ${FONT_SIZE.S};
      line-height: ${LINE_HEIGHT.S};
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
    font-size: 14px;
    line-height: ${LINE_HEIGHT.S};
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
  grey50: '#FEFEFE',
  grey100: '#F7F7FC',
  grey200: '#EFF0F6',
  grey300: '#D9DBE9',
  grey400: '#BEC1D5',
  grey500: '#A0A3BD',
  grey600: '#6E7191',
  grey700: '#4E4B66',
  grey800: '#2A2A44',
  grey900: '#14142B',
} as const;

const color = {
  neutral: {
    text: {
      weak: palette.white,
      default: palette.grey800,
      sub: palette.grey400,
      strong: palette.grey900,
    },
    bg: {
      default: palette.white,
      light: palette.grey100,
      deep: palette.grey400,
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

const theme = { font, palette, color };
type ThemeType = typeof theme;

export { theme, ThemeType };
