import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Input, Box} from 'native-base';
import Header from '../../components/Header';
import TaskList from '../../components/List';
import BottomNav from '../../components/BottomNav';

export default function Home({navigation}) {
  const [value, setValue] = React.useState('');
  const handleChange = text => setValue(text);
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Header />
        <TaskList navigation={navigation} />
        <BottomNav navigation={navigation} />
      </ScrollView>
    </>
  );
}
