import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './pages/Category';
import Detail from './pages/Detail';
import Meals from './pages/Meals';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoryPage">
        <Stack.Screen name="CategoryPage" component={Categories} />
        <Stack.Screen name="DetailPage" component={Detail} />
        <Stack.Screen name="Meals" component={Meals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
