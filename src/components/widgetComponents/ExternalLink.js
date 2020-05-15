import React from 'react';
import { Icon, Link} from '@chakra-ui/core';
import { FiExternalLink } from 'react-icons/fi';

const ExternalLink = ({ color = 'orange.300', children, ...props }) => (
  <Link color={color} {...props}>
    {children}
    <Icon as={FiExternalLink} pb='.15em' />
  </Link>
);

export default ExternalLink;
