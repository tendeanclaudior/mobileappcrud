import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API} from '../../../RequestAPI';
import {Gap, Loading} from '../../Atoms';
import {Fonts, IconDelete} from '../../../assets';

type ItemProps = {
  avatar: string;
  first_name: string;
  email: string;
  deleteView: () => void;
};

const Item = ({avatar, first_name, email, deleteView}: ItemProps) => (
  <View style={styles.container}>
    <View style={styles.cardUsers}>
      <View style={styles.containerCard}>
        <Image alt="/" source={{uri: avatar}} style={styles.image} />
        <Gap height={0} width={10} />
        <View>
          <Text style={styles.titleName}>{first_name}</Text>
          <Text style={styles.titleEmail}>{email}</Text>
        </View>
      </View>
      <View style={styles.contentCrud}>
        <Gap height={0} width={10} />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonView}
          onPress={() => deleteView()}>
          <IconDelete />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const CardUsers = () => {
  const [dataUser, setDataUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/users`)
      .then(res => {
        setDataUser(res.data.data);
        setLoading(false);
      })
      .catch(error => {
        Alert.alert('Error', error);
        setLoading(false);
      });
  }, []);

  const deleteUser = async userId => {
    setLoading(true);
    try {
      await axios.delete(`${API}/users/${userId}`);

      setDataUser(prevData => prevData.filter(user => user.id !== userId));
      setLoading(false);
    } catch {
      Alert.alert('Error');
      setLoading(false);
    }
  };

  return (
    <>
      <FlatList
        data={dataUser}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Item
            avatar={item.avatar}
            first_name={item.first_name}
            email={item.email}
            deleteView={() => deleteUser(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      {loading && <Loading />}
    </>
  );
};

export default CardUsers;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  cardUsers: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  titleName: {
    fontSize: 20,
    fontFamily: Fonts.Poppins.semibold,
    color: '#000000',
  },
  titleEmail: {
    fontSize: 9,
    fontFamily: Fonts.Poppins.medium,
    color: '#000000',
  },
  contentCrud: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonView: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
