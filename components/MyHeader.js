import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'
//import { RFValue } from 'react-native-responsive-fontsize';

export default class MyHeader extends Component{



  render(){
    return(
        <Header
          centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:30,fontWeight:"bold", } }}
          backgroundColor = "#eaf8fe"          
        />

)
}

}
