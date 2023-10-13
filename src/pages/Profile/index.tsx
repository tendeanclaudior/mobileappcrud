import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Fonts} from '../../assets';
import {useFocusEffect} from '@react-navigation/native';
import {getData} from '../../utils';

interface User {
  email: string;
}

const Profile = () => {
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
      <View style={styles.container}>
        <Text style={styles.titleEmail}>{user?.email}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleEmail: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
  },
});
