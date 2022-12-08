import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Icon, AddIcon, HamburgerIcon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useRoute} from '@react-navigation/native';

export default function BottomNav(props) {
  const {navigation} = props;
  console.log('navigation', navigation);
  const route = useRoute();
  console.log('route', route);
  return (
    <View style={styles.navWrapper}>
      <TouchableOpacity
        style={[
          styles.btnWrapper,
          route.name === 'Home' ? styles.activeNav : '',
        ]}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <HamburgerIcon
          size="5"
          mt="0.5"
          style={route.name === 'Home' ? styles.activeNav : ''}
        />

        <Text style={route.name === 'Home' ? styles.activeText : ''}>
          Tasks
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnWrapper,
          route.name === 'Create' ? styles.activeNav : '',
        ]}
        onPress={() => {
          navigation.navigate('Create');
        }}>
        <AddIcon
          size="5"
          mt="0.5"
          style={route.name === 'Create' ? styles.activeNav : ''}
        />
        <Text style={route.name === 'Create' ? styles.activeText : ''}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}
