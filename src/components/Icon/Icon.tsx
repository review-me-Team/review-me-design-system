import React from 'react';

import BookMark from '@assets/BookMark.svg';
import CheckMark from '@assets/CheckMark.svg';
import Clip from '@assets/Clip.svg';
import Communication from '@assets/Communication.svg';
import DownArrow from '@assets/DownArrow.svg';
import Emoji from '@assets/Emoji.svg';
import FilledBookMark from '@assets/FilledBookMark.svg';
import FilledCheckMark from '@assets/FilledCheckMark.svg';
import LeftArrow from '@assets/LeftArrow.svg';
import Menu from '@assets/Menu.svg';
import Minus from '@assets/Minus.svg';
import More from '@assets/More.svg';
import Person from '@assets/Person.svg';
import Plus from '@assets/Plus.svg';
import RightArrow from '@assets/RightArrow.svg';
import UpArrow from '@assets/UpArrow.svg';
import XMark from '@assets/XMark.svg';

const ICON_NAME = {
  BOOK_MARK: 'bookMark',
  CHECK_MARK: 'checkMark',
  CLIP: 'clip',
  COMMUNICATION: 'communication',
  DOWN_ARROW: 'downArrow',
  EMOJI: 'emoji',
  FILLED_BOOK_MARK: 'filledBookMark',
  FILLED_CHECK_MARK: 'filledCheckMark',
  LEFT_ARROW: 'leftArrow',
  MENU: 'menu',
  MINUS: 'minus',
  MORE: 'more',
  PERSON: 'person',
  PLUS: 'plus',
  RIGHT_ARROW: 'rightArrow',
  UP_ARROW: 'upArrow',
  X_MARK: 'xMark',
} as const;

const IconComponents = {
  [ICON_NAME.BOOK_MARK]: BookMark,
  [ICON_NAME.CHECK_MARK]: CheckMark,
  [ICON_NAME.CLIP]: Clip,
  [ICON_NAME.COMMUNICATION]: Communication,
  [ICON_NAME.DOWN_ARROW]: DownArrow,
  [ICON_NAME.EMOJI]: Emoji,
  [ICON_NAME.FILLED_BOOK_MARK]: FilledBookMark,
  [ICON_NAME.FILLED_CHECK_MARK]: FilledCheckMark,
  [ICON_NAME.LEFT_ARROW]: LeftArrow,
  [ICON_NAME.MENU]: Menu,
  [ICON_NAME.MINUS]: Minus,
  [ICON_NAME.MORE]: More,
  [ICON_NAME.PERSON]: Person,
  [ICON_NAME.PLUS]: Plus,
  [ICON_NAME.RIGHT_ARROW]: RightArrow,
  [ICON_NAME.UP_ARROW]: UpArrow,
  [ICON_NAME.X_MARK]: XMark,
};

type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME];

interface Props {
  iconName: IconName;
  width?: number;
  height?: number;
  color?: string;
}

const Icon = ({ iconName, width = 28, height = 28, color = 'black' }: Props) => {
  const IconComponent = IconComponents[iconName];

  if (IconComponent) {
    return <IconComponent width={width} height={height} fill={color} />;
  }

  return null;
};

export default Icon;
