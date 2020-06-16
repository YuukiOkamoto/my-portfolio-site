import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  useDisclosure,
  useTheme,
  Box,
  Flex,
  Icon,
  PseudoBox,
  SimpleGrid,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';
import { RiSearchEyeLine } from 'react-icons/ri';

import StoryModal from './StoryModal';
import Header from './Header';
import Skill from './Skill';
import Ability from './Ability';
import { generateAlphaColors } from '../../theme/colors-utils';
import useProfiles from '../../hooks/use-profiles';

const StatusContent = ({ isEngineer, abilities, skills }) => {
  const { colors } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { engineerStory, muscleStory } = useProfiles();

  console.log(engineerStory.body);
  return (
    <>
      <Header isEngineer={isEngineer} />
      <Flex
        flexDirection={['column', 'column', 'row']}
        bg={generateAlphaColors(colors.blue[500])[100]}
        p='2'
        borderRadius='lg'
      >
        <Stack w={['100%', '100%', '240px']} mr={[0, 0, 2]} mb={[2, 2, 0]}>
          {abilities.map(ability => (
            <Ability
              key={ability.name}
              name={ability.name}
              value={ability.value}
            />
          ))}
        </Stack>
        <SimpleGrid columns={[2, 3, 4]} gap='2px' h='max-content' flex='1'>
          {skills.map(skill => (
            <Skill
              key={skill.name}
              mainType={skill.mainType}
              subType={skill.subType}
            >
              {skill.name}
            </Skill>
          ))}
        </SimpleGrid>
      </Flex>
      <Box textAlign='center' my='6'>
        <PseudoBox
          fontSize='2xl'
          fontFamily='pawapuro'
          cursor='pointer'
          transition='all 0.15s ease-out'
          _hover={{
            color: 'orange.300',
            '& .chevrons': {
              transform: 'scale(1.2)',
            },
          }}
          css={{ svg: { marginBottom: '4px' } }}
          onClick={onOpen}
        >
          ストーリーをのぞく
          <Icon
            transition='transform .3s'
            className='chevrons'
            as={RiSearchEyeLine}
          />
        </PseudoBox>
        <StoryModal
          isOpen={isOpen}
          onClose={onClose}
          story={isEngineer ? engineerStory : muscleStory}
        />
      </Box>
    </>
  );
};

const Status = () => {
  const data = useStaticQuery(graphql`
    query {
      allGoogleSheet {
        nodes {
          engineer_abilities {
            name
            value
          }
          engineer_skills {
            name
            mainType
            subType
          }
          muscle_abilities {
            name
            value
          }
          muscle_skills {
            name
            mainType
            subType
          }
        }
      }
    }
  `);

  const {
    engineer_abilities,
    engineer_skills,
    muscle_abilities,
    muscle_skills,
  } = data.allGoogleSheet.nodes[0];

  return (
    <Tabs fontFamily='pawapuro'>
      <TabList>
        <Tab>電脳能力</Tab>
        <Tab>筋肉能力</Tab>
      </TabList>
      <TabPanels p={[0, 0, 8]}>
        <TabPanel>
          <StatusContent
            isEngineer
            abilities={engineer_abilities}
            skills={engineer_skills}
          />
        </TabPanel>
        <TabPanel>
          <StatusContent abilities={muscle_abilities} skills={muscle_skills} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Status;
