import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import {
  useTheme,
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';

import AuthorName from './AuthorName';
import Skill from './Skill';
import Status from './Status';
import UniformNumber from './UniformNumber';
import { generateAlphaColors } from '../../theme/colors-utils';

const Ability = () => {
  const { colors } = useTheme();
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          snsAccounts {
            twitter
            github
            note
          }
        }
      }
    }
  `);
  const { author, snsAccounts } = data.site.siteMetadata;

  return (
    <Tabs>
      <TabList>
        <Tab>電脳能力</Tab>
        <Tab>筋肉能力</Tab>
      </TabList>

      <TabPanels p={[0, 0, 8]}>
        <TabPanel>
          <Stack isInline wrap='wrap' spacing='2' my='3' p='2'>
            <Stack isInline spacing='4' mb='3' w={['100%', '100%', '240px']}>
              <AuthorName>{author.name.split('@')[0]}</AuthorName>
              <UniformNumber number='29' />
            </Stack>
            <Stack align='center'>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                css={{
                  marginBottom: '0',
                  minHeight: '80px',
                  minWidth: '80px',
                }}
              />
              <Box></Box>
            </Stack>
          </Stack>
          <Flex
            flexDirection={['column', 'column', 'row']}
            bg={generateAlphaColors(colors.blue[500])[100]}
            p='2'
            borderRadius='lg'
          >
            <Stack w={['100%', '100%', '240px']} mr={[0, 0, 2]} mb={[2, 2, 0]}>
              <Status name='HTML' value='70' />
              <Status name='CSS' value='65' />
              <Status name='JS' value='65' />
              <Status name='TS' value='9' />
              <Status name='React' value='40' />
              <Status name='Gatsby' value='74' />
              <Status name='ReactNative' value='15' />
              <Status name='Ruby' value='58' />
              <Status name='Rails' value='67' />
              <Status name='Java' value='10' />
            </Stack>
            <SimpleGrid columns={[2, 3, 4]} gap='2px' h='max-content' flex='1'>
              <Skill mainType='special'>勤勉</Skill>
              <Skill mainType='special'>純潔</Skill>
              <Skill mainType='good'>逆境○</Skill>
              <Skill mainType='good'>威圧感</Skill>
              <Skill mainType='good'>ブログ◯</Skill>
              <Skill mainType='good'>対ｸﾗｲｱﾝﾄ○</Skill>
              <Skill mainType='good'>精神攻撃耐性</Skill>
              <Skill mainType='good'>ﾘﾌｧｸﾀﾘﾝｸﾞ○</Skill>
              <Skill mainType='bad'>見積もり☓</Skill>
              <Skill mainType='good'>プレゼン○</Skill>
              <Skill mainType='good'>帳尻合わせ</Skill>
              <Skill mainType='normal'>ﾏﾙﾁﾀｽｸ</Skill>
              <Skill mainType='good' subType='bad'>
                力配分
              </Skill>
              <Skill mainType='good'>ｹｶﾞしにくさ○</Skill>
              <Skill mainType='good'>HP自動回復</Skill>
              <Skill mainType='good'>MP自動回復</Skill>
              <Skill mainType='good'>体調管理○</Skill>
              <Skill mainType='good' subType='bad'>
                n%I＝W
              </Skill>
            </SimpleGrid>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Stack isInline wrap='wrap' my='3'>
            <Stack isInline spacing='4' mb='3' w={['100%', '100%', '240px']}>
              <AuthorName>{author.name.split('@')[0]}</AuthorName>
              <UniformNumber number='29' />
            </Stack>
            <Stack align='center'>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                css={{
                  marginBottom: '0',
                  minHeight: '80px',
                  minWidth: '80px',
                }}
              />
              <Box></Box>
            </Stack>
          </Stack>
          <Flex
            flexDirection={['column', 'column', 'row']}
            bg={generateAlphaColors(colors.blue[500])[100]}
            p='2'
            borderRadius='lg'
          >
            <Stack w={['100%', '100%', '240px']} mr={[0, 0, 2]} mb={[2, 2, 0]}>
              <Status name='胸' value='30' />
              <Status name='背中' value='18' />
              <Status name='肩' value='39' />
              <Status name='腕' value='14' />
              <Status name='脚' value='84' />
              <Status name='腹筋' value='59' />
            </Stack>
            <SimpleGrid columns={[2, 3, 4]} gap='2px' h='max-content' flex='1'>
              <Skill mainType='special'>痛覚耐性</Skill>
              <Skill mainType='special'>闘魂</Skill>
              <Skill mainType='special'>筋肉痛製造機</Skill>
              <Skill mainType='special'>脚職人</Skill>
              <Skill mainType='special'>ド根性</Skill>
              <Skill mainType='special'>苦痛を愛する者</Skill>
              <Skill mainType='good'>筋肉操作◎</Skill>
              <Skill mainType='good'>減量◎</Skill>
              <Skill mainType='good'>粘り強さ◎</Skill>
              <Skill mainType='good'>逆境○</Skill>
              <Skill mainType='good'>威圧感</Skill>
              <Skill mainType='good'>切磋琢磨</Skill>
              <Skill mainType='good'>ﾃｨｱﾄﾞﾛｯﾌﾟ◎</Skill>
              <Skill mainType='good'>ｹｶﾞしにくさ○</Skill>
              <Skill mainType='good'>筋肉お菓子職人</Skill>
              <Skill mainType='good'>筋肉料理職人</Skill>
              <Skill mainType='special'>絶対切断</Skill>
              <Skill mainType='good' subType='bad'>
                暴食者
              </Skill>
              <Skill mainType='good' subType='bad'>
                理屈屋
              </Skill>
              <Skill mainType='good'>鑑定</Skill>
              <Skill mainType='good'>リベンジ</Skill>
              <Skill mainType='good'>連筋○</Skill>
            </SimpleGrid>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Ability;
