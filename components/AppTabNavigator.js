import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import NewStoryScreen from '../screens/NewStoryScreen';


export const AppTabNavigator = createBottomTabNavigator({
  Stories : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Read Story",
    }
  },
  New: {
    screen: NewStoryScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add Story",
    }
  }
  
},
{
  initialRouteName:'New'
}
);
