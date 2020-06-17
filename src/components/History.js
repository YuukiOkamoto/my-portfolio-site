import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme, Box, Flex } from '@chakra-ui/core';
import { RiComputerLine, RiTeamLine } from 'react-icons/ri';
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs';
import { MdBuild } from 'react-icons/md';
import { IoIosBody, IoMdBody } from 'react-icons/io';
import { GiMuscleUp, GiMuscleFat, GiFat } from 'react-icons/gi';

import ExternalLink from './widgetComponents/ExternalLink';

const Timeline = props => {
  const { colors } = useTheme();
  const gray = colors.gray[100];

  return (
    <VerticalTimeline
      css={{
        '&::before': {
          width: '6px',
          background: gray,
        },
      }}
      {...props}
    />
  );
};

const TimelineElement = props => {
  const { colors } = useTheme();
  const gray = colors.gray[50];

  return (
    <VerticalTimelineElement
      contentStyle={{ background: gray }}
      contentArrowStyle={{ borderRight: `10px solid ${gray}` }}
      {...props}
    />
  );
};

const EngineerHistory = () => {
  const {
    colors: { blue, green, yellow },
  } = useTheme();

  return (
    <Timeline>
      <TimelineElement
        date='2018.12 - 2020.6'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<RiComputerLine />}
      >
        <Box>株式会社SIVA</Box>
        <Box fontSize='xs'>Webエンジニア</Box>
        <p>
          中東向けのECサイトや旅行サイト、広告マーケティング総合ツールを開発。
          <br />
          扱っていた主な技術はRuby on Rails, React, AWS, MySQL。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2018.4 - 2020.7'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<RiComputerLine />}
      >
        <Box>株式会社セカンドファクトリー</Box>
        <Box fontSize='xs'>システムエンジニア</Box>
        <p>
          自社飲食系サービスを開発。
          <br />
          扱っていた主な技術はC#, ASP.NET。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2017.4 - 2017.12'
        iconStyle={{ background: green[400], color: 'white' }}
        icon={<BsFileEarmarkSpreadsheet />}
      >
        <Box>トリートメント株式会社</Box>
        <Box fontSize='xs'>管理部情シス</Box>
        <p>
          個室居酒屋を多店舗展開運営する会社。
          <br />
          経理で採用されるが、Excelスキルやコミュニケーション力を買われ情シスを担当。
          <br />
          社内外様々な人とやり取りしてシステム化を進める。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2011.4 - 2017.3'
        iconStyle={{ background: yellow[400], color: 'white' }}
        icon={<MdBuild />}
      >
        <Box>防水業</Box>
        <Box fontSize='xs'>シーリング工</Box>
        <p>
          大手ゼネコンのもと新築工事や、マンションの改修まで広く経験。
          <br />
          6現場を職長として管理。
        </p>
      </TimelineElement>
    </Timeline>
  );
};

const MuscleHistory = () => {
  const {
    colors: { blue, red, cyan, teal },
  } = useTheme();

  return (
    <Timeline>
      <TimelineElement
        date='2020.5 - 現在'
        iconStyle={{ background: red[400], color: 'white' }}
        icon={<GiMuscleFat />}
      >
        <Box>2021年東京オープンに向けて肉体改造</Box>
        <Box fontSize='xs'>トレーニングセンターサンプレイ所属</Box>
        <p>
          弱点の腕肩や上半身の厚みの強化中。
          <br />
          挙上重量を増やすことが当面の目標。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2020.5 - 2020.5'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<GiMuscleUp />}
      >
        <Box>2020年東京オープンボディビル選手権大会</Box>
        <Box fontSize='xs'>トレーニングセンターサンプレイ所属</Box>
        <p>
          75kg級にエントリーするもコロナウイルスで中止。
          <br />
          強みと弱みを把握できたので来年こそは！
        </p>
      </TimelineElement>
      <TimelineElement
        date='2019.12 - 2020.4'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<GiMuscleUp />}
      >
        <Box>2020年東京オープンに向けて減量</Box>
        <Box fontSize='xs'>トレーニングセンターサンプレイ所属</Box>
        <p>
          初めての大会出場に向けて減量。
          <br />
          ボディビルのポージングも練習。
          <br />
          己の肉体の限界を目指す減量に楽しさを覚える。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2019.12 - 2020.4'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<GiMuscleUp />}
      >
        <Box>2020年東京オープンに向けて減量</Box>
        <Box fontSize='xs'>トレーニングセンターサンプレイ所属</Box>
        <p>
          初めての大会出場に向けて減量。
          <br />
          ボディビルのポージングも練習。
          <br />
          己の肉体の限界を目指す減量に楽しさを覚える。
        </p>
      </TimelineElement>{' '}
      <TimelineElement
        date='2019.6 - 2020.11'
        iconStyle={{ background: cyan[400], color: 'white' }}
        icon={<IoMdBody />}
      >
        <Box> ボディビルに憧れて新天地でトレーニング</Box>
        <Box fontSize='xs'>トレーニングセンターサンプレイ所属</Box>
        <p>
          同年5月にボディビルを初観戦し衝撃を受ける。
          <br />
          高みを目指し、ボディビルで古くから有名なジムに移籍。
          <br />
          筋肉エンジニアとの同居も開始。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2018.11 - 2019.5'
        iconStyle={{ background: red[400], color: 'white' }}
        icon={<GiFat />}
      >
        <Box>筋トレ中心の生活</Box>
        <Box fontSize='xs'>ReXeR所属</Box>
        <p>
          月会費約6万円のジムでトレーニングに没頭。
          <br />
          自己流のトレーニングだったが初めてパーソナルトレーニングを受け上達する。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2018.7 - 現在'
        iconStyle={{ background: teal[400], color: 'white' }}
        icon={<RiTeamLine />}
      >
        <Box>筋肉エンジニアの活動開始</Box>
        <p>
          筋肉エンジニアとしてもくもく会や食事会や合同トレーニングなどの活動を開始する。
          <br />
          これをきっかけに多くの筋トレ好きなエンジニアさんやデザイナーさんと出会うことになる。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2017.11 - 2018.10'
        iconStyle={{ background: cyan[400], color: 'white' }}
        icon={<IoIosBody />}
      >
        <Box>筋トレにハマる</Box>
        <Box fontSize='xs'>エニタイムフィットネス所属</Box>
        <p>
          ジムに入会して筋トレ沼にハマる。
          <br />
          YouTubeで情報収集する日々。
        </p>
      </TimelineElement>
    </Timeline>
  );
};

const DevelopmentHistory = () => {
  const {
    colors: { blue, red },
  } = useTheme();

  const LetterIcon = props => (
    <Flex
      as='span'
      align='center'
      justify='center'
      h='full'
      fontSize='2xl'
      fontWeight='bold'
      {...props}
    />
  );

  return (
    <Timeline>
      <TimelineElement
        date='2020.5 - 2020.6'
        iconStyle={{ background: red[400], color: 'white' }}
        icon={<LetterIcon>私</LetterIcon>}
      >
        <Box>当サイト開発</Box>
        <Box fontSize='xs'>React, Gatsby</Box>
        <p>
          個人の技術ブログやプロフィールサイト。
          <br />
          ライブラリのドキュメントやポートフォリオサイトやブログなど、GitHub上に公開された参考にできるソースコードが多いことから学習目的も兼ねて作成。
        </p>
      </TimelineElement>
      <TimelineElement
        date='2019.8 - 2020.6'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<LetterIcon>公</LetterIcon>}
      >
        <Box>マーケティング総合支援ツール開発</Box>
        <Box fontSize='xs'>Ruby on Rails, React</Box>
        <p>
          APIやスクレイピングで様々な広告媒体からデータを取得。
          <br />
          取得した広告データをレポートに出力。
          <br />
          既存の表示部分をすべてReactに置き換え。
          <br />
          サービス内のエディターで使うウィジェットの要望をユーザーから受け、作成。など
        </p>
      </TimelineElement>
      <TimelineElement
        date='2019.12 - 2020.2'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<LetterIcon>公</LetterIcon>}
      >
        <Box>中東の方向けの日本の旅行サイト開発</Box>
        <Box fontSize='xs'>Ruby on Rails</Box>
        <p>
          ビジネスサイドや中東の方とコミュニケーションをとりながら、要件定義から開発まで。
          <br />
          開発はインターン生と2名で担当。
          <br />
          初めて新規事業を任されましたが、コロナウイルスの影響などで開発中止
        </p>
      </TimelineElement>
      <TimelineElement
        date='2019.6 - 2019.8'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<LetterIcon>公</LetterIcon>}
      >
        <Box>コーポレートサイト、企業ブログ作成</Box>
        <Box fontSize='xs'>Ruby on Rails</Box>
        <p>
          インターン生と2名で設計開発。
          <br />
          <ExternalLink href='https://siva-s.com/'>
            https://siva-s.com/
          </ExternalLink>
        </p>
      </TimelineElement>
      <TimelineElement
        date='2018.12 - 2019.8'
        iconStyle={{ background: blue[400], color: 'white' }}
        icon={<LetterIcon>公</LetterIcon>}
      >
        <Box>日本の製品を中東に販売するECサイト開発</Box>
        <Box fontSize='xs'>Ruby on Rails</Box>
        <p>
          他ECサイトからスクレイピング。
          <br />
          商品ページ、レビュー機能。
          <br />
          日本語、英語、アラビア語の形態素解析をして頻出語を抽出。
          <br />
          ElasticSearchで商品検索。
          <br />
          Stripe, paypal決済。など
          <br />
          <ExternalLink href='https://en.ganso.co.jp/'>
            https://en.ganso.co.jp/
          </ExternalLink>
        </p>
      </TimelineElement>
      <TimelineElement
        date='2020.5 - 2020.6'
        iconStyle={{ background: red[400], color: 'white' }}
        icon={<LetterIcon>私</LetterIcon>}
      >
        <Box>Twitter戦闘力測定アプリScoutter開発</Box>
        <Box fontSize='xs'>Ruby on Rails</Box>
        <p>
          1日の活動量をスカウターで測定し日々加算してキャラを育成。
          <br />
          フォロワーからの反応が少ない人でもゲーム感覚でTwitterを楽しめるアプリ。
          <br />
          <ExternalLink href='https://www.wantedly.com/users/73593015/post_articles/143247'>
            サービス終了予定なので、当時書いたこちらを参照
          </ExternalLink>
        </p>
      </TimelineElement>
    </Timeline>
  );
};

export { EngineerHistory, MuscleHistory, DevelopmentHistory };
