import * as React from 'react'
import { View , StatusBar , Dimensions, Image } from 'react-native'
const { height } = Dimensions.get('window');
import Color from '../constant/Color';
import {Logo} from '../constant/Images';
export default class Splash extends React.Component{
    render(){
        return(
            <>
            <StatusBar backgroundColor={Color.grey} barStyle="dark-content"></StatusBar>
            <View
          style={{
            flex: 1,
            backgroundColor: Color.grey,
            justifyContent:"center"
          }}>
          <Image
            source={Logo}
            style={{
              height: height * 0.35,
              width: height * 0.6,
              alignSelf: 'center',
              
            }}
          />
      
       
        </View>
            </>
        )
    }
}