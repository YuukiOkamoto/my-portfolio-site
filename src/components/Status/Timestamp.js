import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/core';
import dayjs from 'dayjs';

const Timestamp = ({ isEngineer, ...props }) => {
  const [engineerYears, setEngineerYears] = useState('');
  const [muscleYears, setMuscleYears] = useState('');

  useEffect(() => {
    const { diffYear, diffMonth, diffWeek } = getDiff('2018-04-01');

    setEngineerYears(`${diffYear}年${diffMonth}ヶ月${diffWeek}週`);
  }, []);

  useEffect(() => {
    const { diffYear, diffMonth, diffWeek } = getDiff('2017-11-01');

    setMuscleYears(`${diffYear}年${diffMonth}ヶ月${diffWeek}週`);
  }, []);

  const getDiff = from => {
    const diffYear = dayjs().diff(dayjs(from), 'year');
    const diffMonth = dayjs().diff(dayjs(from).add(diffYear, 'year'), 'month');
    const diffWeek =
      dayjs().diff(
        dayjs(from).add(diffYear, 'year').add(diffMonth, 'month'),
        'week'
      ) + 1;

    return { diffYear, diffMonth, diffWeek };
  };

  return (
    <Box
      fontSize='xl'
      fontWeight='bold'
      textAlign='center'
      letterSpacing='0.25em'
      w='100%'
      {...props}
    >
      {isEngineer ? engineerYears : muscleYears}
    </Box>
  );
};

export default Timestamp;
