import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch {
    // error reading value
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('error clearing asynStorage');
  }
};
