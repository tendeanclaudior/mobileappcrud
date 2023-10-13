import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {Fonts, IconBack} from '../../../assets';

type Props = {
  onPress: () => void;
  title: string;
};

const Header: FC<Props> = ({onPress, title}) => {
  return (
    <>
      <View style={styles.headerView}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonBack}
          onPress={onPress}>
          <IconBack />
        </TouchableOpacity>
        <Text style={styles.titleView}>{title}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonBack: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  titleView: {
    fontSize: 18,
    fontFamily: Fonts.Poppins.medium,
    color: '#000000',
  },
});
