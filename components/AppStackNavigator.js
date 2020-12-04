import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import StoriesScreen from '../screens/StoriesScreen.js';
import StoryScreen  from '../screens/StoryScreen';




export const AppStackNavigator = createStackNavigator({
  Stories : {
    screen : StoriesScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Story : {
    screen : StoryScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Stories'
  }
);
