import {StyleSheet, Text, View, TextInput as InputText} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../../../assets';
import Gap from '../Gap';

type Props = {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
};

const TextInput: FC<Props> = ({title, placeholder, value, onChangeText}) => {
  return (
    <>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Gap height={10} width={0} />
        <View style={styles.contentInput}>
          <InputText
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'#C9C9C9'}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.medium,
    color: 'red',
  },
  contentInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 41,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 41,
    color: '#000000',
  },
});
