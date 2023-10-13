import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {getData} from '../../utils';
import {useFocusEffect} from '@react-navigation/native';
import {Fonts} from '../../assets';
import {CardUsers} from '../../components';

interface User {
  email: string;
}

const Home: FC<User> = () => {
  const [user, setUser] = useState<User | null>(null);

  useFocusEffect(
    useCallback(() => {
      getData('users').then(res => {
        setUser(res);
      });
    }, []),
  );

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.headerHome}>
        <Text style={styles.titleEmail}>{user?.email}</Text>
      </View>
      <View>
        <CardUsers />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerHome: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 61,
    paddingHorizontal: 16,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  titleEmail: {
    fontSize: 16,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
  },
  buttonAdd: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
    paddingHorizontal: 16,
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  secondButtonAdd: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: '100%',
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleButton: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.semibold,
    color: '#FFFFFF',
  },
});
