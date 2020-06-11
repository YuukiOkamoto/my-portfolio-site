import React from 'react';
import { Flex, Stack, Text } from '@chakra-ui/core';

const Label = ({ children, ...props }) => (
  <Flex
    align='center'
    justify='center'
    border='1px'
    borderColor='gray.300'
    borderRadius='lg'
    fontSize='sm'
    h='100%'
    w='80px'
    {...props}
  >
    {children}
  </Flex>
);

const Remark = ({ children, ...props }) => (
  <Flex
    align='center'
    p='2'
    border='1px'
    borderColor='gray.300'
    borderRadius='lg'
    color='blue.600'
    fontWeight='bold'
    h='45px'
    {...props}
  >
    {children}
  </Flex>
);

const Remarks = ({ isEngineer, ...props }) => (
  <Stack spacing='2' {...props}>
    <Remark>
      <Label>所属</Label>
      <Text ml='4'>{isEngineer ? '求職中' : 'サンプレイ'}</Text>
    </Remark>
    <Remark>
      <Label>{isEngineer ? '職種' : '身長/体重'}</Label>
      <Text ml='4'>{isEngineer ? '筋肉エンジニア' : '178cm/75kg~85kg'}</Text>
    </Remark>
  </Stack>
);

export default Remarks;
