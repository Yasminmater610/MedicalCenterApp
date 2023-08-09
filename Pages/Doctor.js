import {tsImportEqualsDeclaration} from '@babel/types';
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {doctor, surgeon} from '../constant/Images';
import Color from '../constant/Color';

const {height, width} = Dimensions.get('screen');
export default class doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          section_name: 'الجراحه العامه',
          checked: true,
          doctors: [
            {
              doctor_name: 'فؤاد سلامه',
              dayes: 'السبت - الخميس',
              time: 'الساعه 8 مساء',
            },
            {
              doctor_name: 'فؤاد سلامه',
              dayes: 'السبت - الحد - الاثنين - الثلاثاء- الاربعاء',
              time: 'الساعه 8 مساء',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={Color.grey}></StatusBar>

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
                marginBottom: height * 0.02,
                fontFamily: 'Almarai-Bold',
                alignSelf: 'center',
              }}>
              قسم {this.state.sections[0].section_name}
            </Text>

            <Image
              source={surgeon}
              style={{
                height: height * 0.2,
                width: height * 0.2,
                alignSelf: 'center',
                marginTop: height * 0.01,
                marginBottom: height * 0.01,
                borderRadius: height * 0.1,
              }}></Image>

            {this.state.sections[0].doctors.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: width * 0.9,
                  backgroundColor: Color.babyblue,
                  alignSelf: 'center',
                  marginTop: height * 0.01,
                  marginBottom: height * 0.02,
                  borderRadius: height * 0.012,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: width * 0.02,
                }}>
                <Image
                  source={doctor}
                  style={{
                    height: height * 0.1,
                    width: height * 0.1,
                    alignSelf: 'center',
                    marginTop: height * 0.01,
                    marginBottom: height * 0.01,
                    borderRadius: height * 0.05,
                  }}></Image>
                <View
                  style={{
                    width: width * 0.32,
                  }}>
                  <Text
                    style={{
                      fontSize: height * 0.022,
                      color: Color.blue,

                      fontFamily: 'Almarai-Bold',
                    }}>
                    د/{item.doctor_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: height * 0.022,
                      color: Color.blue,

                      fontFamily: 'Almarai-Bold',
                    }}>
                    {item.dayes}
                  </Text>
                  <Text
                    style={{
                      fontSize: height * 0.022,
                      color: Color.blue,
                      fontFamily: 'Almarai-Bold',
                    }}>
                    {item.time}
                  </Text>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    height: height * 0.06,
                    width: width * 0.3,
                    backgroundColor: Color.blue,
                    borderRadius: height * 0.012,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {}}>
                  <Text
                    style={{
                      fontSize: height * 0.022,
                      color: '#fff',
                      fontFamily: 'Almarai-Bold',
                      alignSelf: 'center',
                    }}>
                    حجز معاد
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </>
    );
  }
}
