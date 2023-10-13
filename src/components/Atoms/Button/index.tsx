import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../../../assets';

type Props = {
  onPress: () => void;
  title: string;
};

const Button: FC<Props> = ({onPress, title}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonView}
        onPress={onPress}>
        <Text style={styles.titleButton}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: 'red',
    width: '100%',
    height: 41,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButton: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.semibold,
    color: '#FFFFFF',
  },
});
