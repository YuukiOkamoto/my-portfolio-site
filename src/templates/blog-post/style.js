import styled from '@emotion/styled';

export const MDXWrapper = styled.main`
  .gatsby-code-title {
    margin-bottom: -0.6rem;
    padding: 0.5em 1em;
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
      monospace;

    background-color: #444;
    color: white;
    z-index: 0;

    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }
  code {
    padding: 0;
  }
  a.anchor {
    position: absolute;
    left: -0.8em;
  }
`;
