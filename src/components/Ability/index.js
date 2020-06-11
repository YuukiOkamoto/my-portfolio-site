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
  Text,
} from '@chakra-ui/core';

import AuthorName from './AuthorName';
import Skill from './Skill';
import Status from './Status';
import Timestamp from './Timestamp';
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
            <Stack
              spacing='3'
              w={['100%', '100%', '240px']}
              flexDirection={['row', 'row', 'colum']}
              flexWrap='wrap'
            >
              <Stack isInline spacing='4' mx='auto'>
                <AuthorName>{author.name.split('@')[0]}</AuthorName>
                <UniformNumber number='29' />
              </Stack>
              <Timestamp isEngineer />
            </Stack>
            <Flex flex='1'>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                css={{
                  marginBottom: '0',
                  minHeight: '100px',
                  minWidth: '100px',
                }}
              />
              <Stack spacing='2' w='100%'>
                <Flex
                  align='center'
                  p='2'
                  ml='4'
                  border='1px'
                  borderColor='gray.300'
                  borderRadius='lg'
                  color='blue.600'
                  fontWeight='bold'
                  h='45px'
                >
                  <Flex
                    align='center'
                    justify='center'
                    border='1px'
                    borderColor='gray.300'
                    borderRadius='lg'
                    h='100%'
                    w='100px'
                  >
                    所属
                  </Flex>
                  <Text ml='4'>求職中</Text>
                </Flex>
                <Flex
                  align='center'
                  p='2'
                  ml='4'
                  border='1px'
                  borderColor='gray.300'
                  borderRadius='lg'
                  color='blue.600'
                  fontWeight='bold'
                  h='45px'
                >
                  <Flex
                    align='center'
                    justify='center'
                    border='1px'
                    borderColor='gray.300'
                    borderRadius='lg'
                    h='100%'
                    w='100px'
                  >
                    職種
                  </Flex>
                  <Text ml='4'>筋肉エンジニア</Text>
                </Flex>
              </Stack>
            </Flex>
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
              <Skill mainType='normal'>ﾏﾙﾁﾀｽｸ☓</Skill>
              <Skill mainType='normal'>メール☓</Skill>
              <Skill mainType='good'>チャット○</Skill>
              <Skill mainType='good'>ムード○</Skill>
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
          <Stack isInline wrap='wrap' spacing='2' my='3' p='2'>
            <Stack
              spacing='3'
              w={['100%', '100%', '240px']}
              flexDirection={['row', 'row', 'colum']}
              flexWrap='wrap'
            >
              <Stack isInline spacing='4' mx='auto'>
                <AuthorName>{author.name.split('@')[0]}</AuthorName>
                <UniformNumber number='29' />
              </Stack>
              <Timestamp />
            </Stack>
            <Flex flex='1'>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                css={{
                  marginBottom: '0',
                  minHeight: '100px',
                  minWidth: '100px',
                }}
              />
              <Stack spacing='2' w='100%'>
                <Flex
                  align='center'
                  p='2'
                  ml='4'
                  border='1px'
                  borderColor='gray.300'
                  borderRadius='lg'
                  color='blue.600'
                  fontWeight='bold'
                  h='45px'
                >
                  <Flex
                    align='center'
                    justify='center'
                    border='1px'
                    borderColor='gray.300'
                    borderRadius='lg'
                    h='100%'
                    w='100px'
                  >
                    所属
                  </Flex>
                  <Text ml='4'>サンプレイ</Text>
                </Flex>
                <Flex
                  align='center'
                  p='2'
                  ml='4'
                  border='1px'
                  borderColor='gray.300'
                  borderRadius='lg'
                  color='blue.600'
                  fontWeight='bold'
                  h='45px'
                >
                  <Flex
                    align='center'
                    justify='center'
                    border='1px'
                    borderColor='gray.300'
                    borderRadius='lg'
                    h='100%'
                    w='100px'
                  >
                    身長・体重
                  </Flex>
                  <Text ml='4'>178cm・75kg/85kg(オン/オフ)</Text>
                </Flex>
              </Stack>
            </Flex>
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
