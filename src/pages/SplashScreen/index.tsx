import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Fonts} from '../../assets';

type Props = {
  navigation: {replace: Function};
};

const SplashScreen: FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Aplikasi Mobile CRUD</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

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
  title: {
    fontSize: 30,
    fontFamily: Fonts.Poppins.semibold,
    color: 'red',
    maxWidth: 300,
    textAlign: 'center',
  },
});
