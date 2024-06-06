import { TypographyOptions } from '@mui/material/styles/createTypography';

const fontFamily1 = '"Fraunces", serif !important';
const fontFamily2 = '"Barlow", sans-serif !important';

const typography: TypographyOptions = {
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 900,
  h1: {
    fontWeight: 400,
    fontSize: '1.75rem',
    lineHeight: '2rem',
    fontFamily: fontFamily1,
  },
  h2: {
    fontWeight: 500,
    fontSize: '1.55rem',
    lineHeight: '1.75rem',
    fontFamily: fontFamily1,
  },
  h3: {
    fontWeight: 500,
    fontSize: '1.4rem',
    lineHeight: '1.5rem',
    fontFamily: fontFamily1,
  },
  h4: {
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.3rem',
    fontFamily: fontFamily1,
  },
  h5: {
    fontSize: '1.1rem',
    lineHeight: '1.2rem',
    fontWeight: 400,
    textTransform: 'none',
    fontFamily: fontFamily1,
  },
  h6: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.1rem',
    fontFamily: fontFamily1,
  },
  body1: {
    fontSize: '0.938rem',
    lineHeight: '1.313rem',
    fontFamily: fontFamily2,
  },
  body2: {
    fontSize: '0.8125rem',
    lineHeight: '1.25rem',
    fontFamily: fontFamily2,
  },
  subtitle1: {
    fontSize: '0.938rem',
    lineHeight: '1.438rem',
    fontFamily: fontFamily2,
  },
  subtitle2: {
    fontWeight: 300,
    fontSize: '0.9rem',
    lineHeight: '1rem',
    fontFamily: fontFamily2,
  },
  button: {
    fontSize: '1rem',
    lineHeight: '1.438rem',
    fontWeight: 400,
    textTransform: 'none',
    fontFamily: fontFamily2,
  },
};

export default typography;
