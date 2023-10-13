import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import {
  Button,
  Gap,
  Header,
  Loading,
  Password,
  TextInput,
} from '../../components';
import {IllustratorSignUp} from '../../assets';
import {storeData, useForm} from '../../utils';
import axios from 'axios';
import {API} from '../../RequestAPI';

type Props = {
  navigation: {goBack: Function; replace: Function};
};

const SignUp: FC<Props> = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const signupContent = async () => {
    setLoading(true);
    try {
      await axios.post(`${API}/register`, {
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
        <Header title={'Sign Up'} onPress={() => navigation.goBack('SignIn')} />
        <View style={styles.container}>
          <Gap height={25} width={0} />
          <View style={styles.contentIllustrator}>
            <IllustratorSignUp />
          </View>
          <View>
            <TextInput
              title={'Email Address'}
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
            <Button title={'Continue'} onPress={() => signupContent()} />
          </View>
          <Gap height={50} width={0} />
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default SignUp;

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
});
