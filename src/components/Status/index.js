import React from 'react';
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

const Ability = () => {
  const { colors } = useTheme();

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
              <Ability name='HTML' value='70' />
              <Ability name='CSS' value='65' />
              <Ability name='JS' value='65' />
              <Ability name='TS' value='9' />
              <Ability name='React' value='40' />
              <Ability name='Gatsby' value='74' />
              <Ability name='ReactNative' value='15' />
              <Ability name='Ruby' value='58' />
              <Ability name='Rails' value='67' />
              <Ability name='Java' value='10' />
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
          <Header />
          <Flex
            flexDirection={['column', 'column', 'row']}
            bg={generateAlphaColors(colors.blue[500])[100]}
            p='2'
            borderRadius='lg'
          >
            <Stack w={['100%', '100%', '240px']} mr={[0, 0, 2]} mb={[2, 2, 0]}>
              <Ability name='胸' value='30' />
              <Ability name='背中' value='18' />
              <Ability name='肩' value='39' />
              <Ability name='腕' value='14' />
              <Ability name='脚' value='84' />
              <Ability name='腹筋' value='59' />
            </Stack>
            <SimpleGrid columns={[2, 3, 4]} gap='2px' h='max-content' flex='1'>
              <Skill mainType='special'>痛覚耐性</Skill>
              <Skill mainType='special'>闘魂</Skill>
              <Skill mainType='special'>筋肉痛製造機</Skill>
              <Skill mainType='special'>脚職人</Skill>
              <Skill mainType='special'>ド根性</Skill>
              <Skill mainType='special'>苦痛を愛する者</Skill>
              <Skill mainType='special'>体重操作</Skill>
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
              <Skill mainType='bad'>満腹無効</Skill>
              <Skill mainType='bad'>肩幅狭</Skill>
              <Skill mainType='bad'>顔デカ</Skill>
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
