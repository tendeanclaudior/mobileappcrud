import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {Fonts, IllustratorSignIn} from '../../assets';
import {Button, Gap, Loading, Password, TextInput} from '../../components';
import {storeData, useForm} from '../../utils';
import axios from 'axios';
import {API} from '../../RequestAPI';

type Props = {
  navigation: {replace: Function; navigate: Function};
};

const SignIn: FC<Props> = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const signinContent = async () => {
    setLoading(true);
    try {
      await axios.post(`${API}/login`, {
        email: form.email,
        password: form.password,
      });

      const data = {
        email: form.email,
      };
      storeData('users', data);
      setForm('reset');
      setLoading(false);
      navigation.replace('MainApp');
    } catch {
      Alert.alert('Error', 'Your password or email is incorrect');
      setLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.page}>
        <View style={styles.container}>
          <View style={styles.contentIllustrator}>
            <Gap height={25} width={0} />
            <IllustratorSignIn />
          </View>
          <View>
            <TextInput
              title={'Email'}
              placeholder={'Type your email...'}
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={30} width={0} />
            <Password
              title={'Password'}
              placeholder={'Type your password...'}
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
            <Gap height={30} width={0} />
            <Button title={'Sign In'} onPress={() => signinContent()} />
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.createAccContent}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.titleCreateAcc}>Don't have account? </Text>
              <Text style={styles.titleCreateAccTwo}>Sign Up</Text>
            </TouchableOpacity>
            <Gap height={25} width={0} />
          </View>
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  contentIllustrator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  titleCreateAcc: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.medium,
    color: '#000000',
    textDecorationLine: 'underline',
  },
  titleCreateAccTwo: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.semibold,
    color: 'red',
    textDecorationLine: 'underline',
  },
});
