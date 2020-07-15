import React, { FC, ComponentProps } from 'react';
import { css } from '@emotion/core';
import { useTheme, Heading as ChakraHeading } from '@chakra-ui/core';

const Heading: FC<ComponentProps<typeof ChakraHeading>> = props => {
  const { colors } = useTheme();

  return (
    <ChakraHeading
      css={css`
        &:hover {
          a.anchor svg {
            visibility: visible;
          }
        }
        a.anchor {
          color: inherit;
          float: left;
          padding-right: 4px;
          margin-left: -20px;

          svg {
            visibility: hidden;
            fill: currentColor;
          }

          &:hover {
            color: ${colors.orange[300]};
          }
        }
      `}
      {...props}
    />
  );
};

const H2: FC<ComponentProps<typeof Heading>> = props => (
  <Heading
    as='h2'
    size='lg'
    mt='20'
    mb='8'
    py='3'
    pl='1'
    borderTop='2px'
    borderBottom='2px'
    borderStyle='dotted'
    {...props}
  />
);

const H3: FC<ComponentProps<typeof Heading>> = props => (
  <Heading
    as='h3'
    size='md'
    mt='16'
    mb='6'
    py='2'
    pl='1'
    borderBottom='1px dotted'
    {...props}
  />
);

const H4: FC<ComponentProps<typeof Heading>> = props => (
  <Heading as='h4' size='sm' mt='16' mb='3' {...props} />
);

const H5: FC<ComponentProps<typeof Heading>> = props => (
  <Heading as='h5' size='xs' mt='10' mb='2' {...props} />
);

const H6: FC<ComponentProps<typeof Heading>> = props => (
  <Heading as='h6' size='xs' mt='8' mb='1' {...props} />
);

export { H2, H3, H4, H5, H6 };
export default Heading;
