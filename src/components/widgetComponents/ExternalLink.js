import React from 'react';
import { Icon, Link} from '@chakra-ui/core';
import { FiExternalLink } from 'react-icons/fi';

const ExternalLink = ({ color = 'orange.300', children, ...props }) => (
  <Link isExternal color={color} wordBreak='break-all' {...props}>
    {children}
    <Icon as={FiExternalLink} pb='.15em' />
  </Link>
);

export default ExternalLink;
