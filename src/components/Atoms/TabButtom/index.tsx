import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

import Gap from '../Gap';
import {
  Fonts,
  IconHome,
  IconHomeActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';

export type Props = {
  icon: 'Home' | 'Profile';
  active?: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

const TabButtom: FC<Props> = ({icon, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (icon === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (icon === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };

  const styleTitleVIew = [active ? styles.titleView : styles.secondTitleView];

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.iconView}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={6} width={0} />
      <Text style={styleTitleVIew}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default TabButtom;

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    fontSize: 12,
    fontFamily: Fonts.Poppins.medium,
    color: 'red',
  },
  secondTitleView: {
    fontSize: 12,
    fontFamily: Fonts.Poppins.medium,
    color: '#CFD1CD',
  },
});
