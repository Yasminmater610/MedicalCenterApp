import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {Welcome, email} from '../constant/Images';
import Color from '../constant/Color';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {height, width} = Dimensions.get('screen');
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      colorerror: Color.grey,
      sec: false,
    };
  }
  change_sec() {
    this.setState({sec: !this.state.sec});
  }
  submit() {
    let email = this.state.email;
    let pass = this.state.pass;
    let colorerror = this.state.colorerror;
    let error_count = 0;

    // email
    if (!email.includes('@') || !email.includes('.')) {
      error_count++;
    }
    let at = email.indexOf('@');
    let dot = email.lastIndexOf('.');
    if (at + 1 == dot || dot < at) {
      error_count++;
    }
    if (email.trim().length < 5) {
      error_count++;
    }

    // password
    if (pass.length < 6) {
      error_count++;
    }

    if (error_count == 0) {
      this.setState({colorerror: '#fff'});
      
    } else {
    
      this.setState({colorerror: '#D71313'});
    }
  }
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Color.grey}
          barStyle="dark-content"></StatusBar>

        <ScrollView>
          <View
            style={{
              width: width,
              //   height:height,
              backgroundColor: Color.grey,
              padding: width * 0.08,
            }}>
            <Text
              style={{
                fontSize: height * 0.035,

                color: Color.blue,
                fontFamily: 'Almarai-Bold',
                alignSelf: 'center',
              }}>
              مرحبا بك
            </Text>
            <Text
              style={{
                fontSize: height * 0.025,
                color: Color.blue,
                fontFamily: 'Almarai-Bold',
                alignSelf: 'center',
              }}>
              الجمعيه الخيرية دائما فى خدمتك
            </Text>

            <Image
              source={Welcome}
              style={{
                height: height * 0.2,
                width: height * 0.2,
                alignSelf: 'center',
                marginTop: height * 0.02,
                marginBottom: height * 0.03,
              }}></Image>

            <View
              style={{
                flexDirection: 'row',
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.babyblue,
                alignSelf: 'center',
                marginTop: height * 0.01,
                borderRadius: height * 0.012,
                //   opacity:0.3,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: width * 0.02,
              }}>
              <Image
                source={email}
                style={{
                  height: width * 0.07,
                  width: width * 0.07, 
                }}></Image>

              <TextInput
                onChangeText={newvalue => {
                  this.setState({email: newvalue});
                }}
                style={{
                  height: height * 0.06,
                  width: width * 0.7,
                  color: Color.blue,
                  fontSize: height * 0.025,
                  paddingRight: 16,
                  paddingLeft: 16,
                 
                  marginRight:height*0.03
                }}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.babyblue,
                alignSelf: 'center',
                marginTop: height * 0.02,
                borderRadius: height * 0.012,
                //   opacity:0.3,
                // justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: width * 0.02,
              }}>
              <Icon
                name={'key'}
                style={{color: '#84b3d1'}}
                size={height * 0.03}
              />
              <TouchableOpacity activeOpacity={0.7}
                onPress={() => {
                  this.change_sec();
                }}>
                <Icon
                  name={this.state.sec ? 'eye-slash' : 'eye'}
                  style={{color: '#84b3d1', paddingHorizontal: 10}}
                  size={height * 0.03}
                />
              </TouchableOpacity>
              <TextInput
               secureTextEntry={this.state.sec}
                onChangeText={newvalue => {
                  this.setState({pass: newvalue});
                }}
                style={{
                  height: height * 0.06,
                  width: width * 0.7,
                  color: Color.blue,
                  fontSize: height * 0.025,
                  paddingRight: 16,
                  paddingLeft: 16,
                
                }}></TextInput>
            </View>
            <Text
              style={{
                fontSize: height * 0.025,
                color: this.state.colorerror,
                fontFamily: 'Almarai-Bold',
                //   alignSelf: 'center',
                marginTop: height * 0.01,
              }}>
              الايميل او الرقم السرى غير صحيح
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  fontSize: height * 0.025,
                  color: Color.blue,
                  fontFamily: 'Almarai-Bold',
                  alignSelf: 'center',
                  marginTop: height * 0.03,
                }}>
                نسيت كلمة المرور ؟
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                this.submit();
              }}
              style={{
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.blue,
                alignSelf: 'center',
                marginTop: height * 0.04,
                borderRadius: height * 0.012,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: height * 0.025,
                  color: '#fff',
                  fontFamily: 'Almarai-Bold',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                تسجيل الدخول
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: height * 0.025,
                  color: Color.blue,
                  fontFamily: 'Almarai-Bold',
                  alignSelf: 'center',
                  marginTop: height * 0.07,
                }}>
                ليس لديك حساب ؟
              </Text>
              <Text> </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text
                  style={{
                    fontSize: height * 0.025,
                    color: Color.blue,
                    fontFamily: 'Almarai-Bold',
                    alignSelf: 'center',
                    marginTop: height * 0.07,
                  }}>
                  إنشاء حساب
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
