// In App.js in a new project

import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import Home from './src/screens/Home';
import Create from './src/screens/Task/Create';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <PersistGate loading={<Text>...</Text>} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Create" component={Create} />
              <Stack.Screen name="Edit" component={Create} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
