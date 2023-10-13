import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Gap from '../Gap';
import {Fonts, IconEyeClose, IconEyeOpen} from '../../../assets';

type Props = {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
};

const Password: FC<Props> = ({title, placeholder, value, onChangeText}) => {
  const [eye, setEye] = useState(false);

  const eyeContent = () => {
    setEye(!eye);
  };

  return (
    <>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Gap height={10} width={0} />
        <View style={styles.contentInput}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'#C9C9C9'}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={eye ? false : true}
            // maxLength={16}
          />
          {eye ? (
            <TouchableOpacity activeOpacity={0.5} onPress={() => eyeContent()}>
              <IconEyeOpen />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={0.5} onPress={() => eyeContent()}>
              <IconEyeClose />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Password;

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    width: '100%',
    height: 41,
    color: '#000000',
  },
});
