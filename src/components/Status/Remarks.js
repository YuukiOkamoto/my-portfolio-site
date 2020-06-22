import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/core';

const Label = props => (
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
  />
);

const Remark = props => (
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
  />
);

const Remarks = ({ isEngineer, ...props }) => (
  <Stack spacing='2' {...props}>
    <Remark>
      <Label>所属</Label>
      <Box ml='4'>{isEngineer ? '求職中' : 'サンプレイ'}</Box>
    </Remark>
    <Remark>
      <Label>{isEngineer ? '職種' : '身長/体重'}</Label>
      <Box ml='4'>{isEngineer ? '筋肉エンジニア' : '178cm/75kg~85kg'}</Box>
    </Remark>
  </Stack>
);

export default Remarks;
