import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  useTheme,
  Flex,
  SimpleGrid,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';

import Header from './Header';
import Skill from './Skill';
import Ability from './Ability';
import { generateAlphaColors } from '../../theme/colors-utils';

const Status = () => {
  const { colors } = useTheme();
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
          <Header isEngineer />
          <Flex
            flexDirection={['column', 'column', 'row']}
            bg={generateAlphaColors(colors.blue[500])[100]}
            p='2'
            borderRadius='lg'
          >
            <Stack w={['100%', '100%', '240px']} mr={[0, 0, 2]} mb={[2, 2, 0]}>
              {engineer_abilities.map(ability => (
                <Ability
                  key={ability.name}
                  name={ability.name}
                  value={ability.value}
                />
              ))}
            </Stack>
            <SimpleGrid columns={[2, 3, 4]} gap='2px' h='max-content' flex='1'>
              {engineer_skills.map(skill => (
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
        </TabPanel>
        <TabPanel>
          <Header />
          <Flex
            flexDirection={['column', 'column', 'row']}
            bg={generateAlphaColors(colors.blue[500])[100]}
            p='2'
            borderRadius='lg'
          >
            <Stack w={['100%', '100%', '240px']} mr={[0, 0, 2]} mb={[2, 2, 0]}>
              {muscle_abilities.map(ability => (
                <Ability
                  key={ability.name}
                  name={ability.name}
                  value={ability.value}
                />
              ))}
            </Stack>
            <SimpleGrid columns={[2, 3, 4]} gap='2px' h='max-content' flex='1'>
              {muscle_skills.map(skill => (
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
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Status;
