import {View} from 'react-native';
import React, {FC} from 'react';

type Props = {
  width: number;
  height: number;
};

const Gap: FC<Props> = ({width, height}) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
