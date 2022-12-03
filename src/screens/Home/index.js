import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default function Home() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent"></StatusBar>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LinearGradient
          colors={['#0c798f', '#2dc0de']}
          style={styles.linearGradient}>
          <View style={styles.hederContainer}>
            <Image style={styles.profileImg}></Image>
            <View style={styles.nameContainer}>
              <Text style={styles.greet}>Hello</Text>
              <Text style={styles.name}>John Doe</Text>
            </View>
          </View>
        </LinearGradient>
        <View>
          <Text>Tasks</Text>
        </View>
      </ScrollView>
    </>
  );
}
