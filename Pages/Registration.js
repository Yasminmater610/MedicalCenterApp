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
import {email} from '../constant/Images';
import Color from '../constant/Color';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {height, width} = Dimensions.get('screen');
export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      pass: '',
      confirmpass: '',
      colorerror: Color.grey,
      sec: false,
      sec2: false,
    };
  }
  change_sec() {
    this.setState({sec: !this.state.sec});
  }
  change_sec2() {
    this.setState({sec2: !this.state.sec2});
  }
  submit() {
    let name = this.state.name;
    let phone = this.state.phone;
    let email = this.state.email;
    let pass = this.state.pass;
    let confirmpass = this.state.confirmpass;
    let error_count = 0;
    let sec = this.state.sec;
    // name
    if (name.trim().length < 3) {
      error_count++;
    }
    // phone
    if (phone.trim().length < 11 || phone / 1 != phone) {
      error_count++;
    }
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

    // confirmpassword
    if (pass != confirmpass) {
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
              height: height,
              backgroundColor: Color.grey,
              padding: width * 0.06,
            }}>
            <Text
              style={{
                fontSize: height * 0.035,
                color: Color.blue,
                marginBottom: height * 0.08,
                fontFamily: 'Almarai-Bold',
                alignSelf: 'center',
              }}>
              إنشاء حساب جديد الأن !
            </Text>

            <Text
              style={{
                fontSize: height * 0.025,
                color: Color.blue,

                fontFamily: 'Almarai-Bold',
              }}>
              اسم المستخدم
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.babyblue,
                alignSelf: 'center',
                borderRadius: height * 0.012,
                // opacity: 0.3,
                marginTop: height * 0.01,
                marginBottom: height * 0.02,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: width * 0.02,
              }}>
              <Icon
                name={'user'}
                size={height * 0.03}
                style={{color: '#84b3d1'}}
              />

              <TextInput
                onChangeText={newvalue => {
                  this.setState({name: newvalue});
                }}
                style={{
                  height: height * 0.06,
                  width: width * 0.75,
                  color: Color.blue,
                  fontSize: height * 0.025,
                }}></TextInput>
            </View>

            <Text
              style={{
                fontSize: height * 0.025,
                color: Color.blue,
                fontFamily: 'Almarai-Bold',
              }}>
              رقم الهاتف
            </Text>

            <View
              style={{
                flexDirection: 'row',
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.babyblue,
                alignSelf: 'center',
                marginTop: height * 0.01,
                marginBottom: height * 0.02,
                borderRadius: height * 0.012,
                // opacity: 0.3,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: width * 0.02,
              }}>
              <Icon
                name={'phone'}
                style={{color: '#84b3d1'}}
                size={height * 0.03}
              />
              <TextInput
                keyboardType="number-pad"
                onChangeText={newvalue => {
                  this.setState({phone: newvalue});
                }}
                style={{
                  height: height * 0.06,
                  width: width * 0.75,
                  color: Color.blue,
                  fontSize: height * 0.025,
                }}></TextInput>
            </View>

            <Text
              style={{
                fontSize: height * 0.025,
                color: Color.blue,
                fontFamily: 'Almarai-Bold',
              }}>
              البريد الإلكترونى
            </Text>

            <View
              style={{
                flexDirection: 'row',
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.babyblue,
                alignSelf: 'center',
                marginTop: height * 0.01,
                marginBottom: height * 0.02,
                borderRadius: height * 0.012,
                // opacity: 0.3,
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
                  width: width * 0.75,
                  color: Color.blue,
                  fontSize: height * 0.025,
                }}></TextInput>
            </View>
            <Text
              style={{
                fontSize: height * 0.025,
                color: Color.blue,
                fontFamily: 'Almarai-Bold',
              }}>
              كلمة المرور
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.babyblue,
                alignSelf: 'center',
                marginTop: height * 0.01,
                marginBottom: height * 0.02,
                borderRadius: height * 0.012,
                // opacity: 0.3,
                // justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: width * 0.02,
              }}>
              <Icon
                name={'key'}
                style={{color: '#84b3d1'}}
                size={height * 0.03}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  this.change_sec();
                }}
                >
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
                  width: width * 0.65,
                  color: Color.blue,
                  fontSize: height * 0.025,
                }}></TextInput>
            </View>

            <Text
              style={{
                fontSize: height * 0.025,
                color: Color.blue,
                fontFamily: 'Almarai-Bold',
              }}>
              تأكيد كلمة المرور مره أخرى
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: height * 0.06,
                width: width * 0.9,
                backgroundColor: Color.babyblue,
                alignSelf: 'center',
                marginTop: height * 0.01,
                // marginBottom: height * 0.02,
                borderRadius: height * 0.012,
                // opacity: 0.3,
                // justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: width * 0.02,
              }}>
              <Icon
                name={'key'}
                style={{color: '#84b3d1'}}
                size={height * 0.03}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  this.change_sec2();
                }}>
                <Icon
                  name={this.state.sec2 ? 'eye-slash' : 'eye'}
                  style={{color: '#84b3d1', paddingHorizontal: 10}}
                  size={height * 0.03}
                />
              </TouchableOpacity>
              <TextInput
                secureTextEntry={this.state.sec2}
                onChangeText={newvalue => {
                  this.setState({confirmpass: newvalue});
                }}
                style={{
                  height: height * 0.06,
                  width: width * 0.65,
                  color: Color.blue,
                  fontSize: height * 0.025,
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
              رجاء ادخال البيانات بطريقة صحيحة
            </Text>
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
                marginTop: height * 0.01,
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
          </View>
        </ScrollView>
      </>
    );
  }
}
