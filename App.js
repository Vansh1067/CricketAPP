/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {LoginNavigation} from './navigation/LoginNavigation'




const App= () => {
  return (
    <NavigationContainer>
      <LoginNavigation/>
    </NavigationContainer>
  );
};


{/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="always"
          style={styles.scrollView}>
          
        </ScrollView>
      </SafeAreaView> */}
export default App;
