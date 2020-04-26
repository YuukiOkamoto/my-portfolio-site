import Typography from 'typography';
import theme from 'typography-theme-japanese-tofu';
import gray from 'gray-percentage';

theme.overrideStyles = ({ scale, rhythm }, options, styles) => ({
  html: {
    WebkitFontSmoothing: 'antialiased',
  },
  'h1,h2,h3,h4,h5,h6': {
    letterSpacing: '0.02em',
  },
  p: {
    textAlign: 'justify',
    wordBreak: 'break-all',
  },
  a: {
    color: 'inherit',
  },
  'a:hover': {
    color: '#666',
  },
  li: {
    marginBottom: '0px',
  },
  blockquote: {
    color: gray(47),
    fontSize: '85%',
    position: 'relative',
    margin: '0.5em',
    padding: '0.5em 1em 0.5em 2em',
  },
  'blockquote:before': {
    position: 'absolute',
    fontSize: '1.5em',
    lineHeight: '1',
    top: '0.2em',
    left: '0.5em',
    content: '"\\201C"',
    color: gray(30),
  },
  pre: {
    overflowX: 'auto',
    padding: '1rem',
    background: 'hsla(0,0%,0%,0.04)',
  },
});

const typography = new Typography(theme);

export const { scale, rhythm, options } = typography;
export default typography;
