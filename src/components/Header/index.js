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
import {useRoute} from '@react-navigation/native';

export default function Header(props) {
  const [value, setValue] = React.useState('');
  const handleChange = text => setValue(text);
  const route = useRoute();
  return (
    <>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <LinearGradient
        colors={['#3366ff', '#3366ff']}
        style={styles.linearGradient}>
        <View style={styles.hederContainer}>
          <Image
            style={styles.profileImg}
            source={require('../../../assets/img/profilepic.jpeg')}></Image>
          <View style={styles.nameContainer}>
            <Text style={styles.greet}>Hello</Text>
            <Text style={styles.name}>John Doe</Text>
          </View>
        </View>
        {/* {route.name === 'Home' && (
          <View style={styles.searchWrapper}>
            <Input
              size="md"
              variant="rounded"
              borderWidth="0"
              onChangeText={handleChange}
              value={value}
              w={{
                base: '85%',
                md: '25%',
              }}
              style={styles.inputItem}
              InputRightElement={
                <Box style={styles.iconWrapper}>
                  <Image
                    style={styles.searchIcon}
                    source={require('../../../assets/img/search.png')}></Image>
                </Box>
              }
              placeholder="Search the Tasks"
            />
          </View>
        )} */}
      </LinearGradient>
    </>
  );
}
