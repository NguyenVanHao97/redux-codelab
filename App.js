import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import FeedScreen from './Component/FeedScreen'
import HomeScreen from './Component/HomeScreen'
import MyKitchen from './Component/MyKitchen'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from '../codelab_redux/Redux/Reducer/RootReducer'
import SaveRecipesScreen from './Component/SaveRecipesScreen'
import { UserReducer } from './Redux/Reducer/UserReducer'
import EditProfile from './Component/EditProfile'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const persistConfig = {
  key : 'root',
  storage : AsyncStorage,
};
// const persistReducer = persistReducer(persistConfig ,  rootReducer)
const store =  createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        {/* <HomeScreen/> */}
        {/* <MyKitchen/> */}
        {/* <FeedScreen/> */}
        {/* <SaveRecipesScreen/> */}
        {/* <EditProfile/> */}
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
        >
          {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
          <Tab.Screen name="MyKitchen" component={MyKitchen} />
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Save" component={SaveRecipesScreen} />
          <Tab.Screen name="Edit" component={EditProfile} />
        </Tab.Navigator>

      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
