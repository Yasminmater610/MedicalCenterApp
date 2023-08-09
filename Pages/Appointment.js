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
import {Appointmentt} from '../constant/Images';
import Color from '../constant/Color';
const {height, width} = Dimensions.get('screen');
export default class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booked: 'محجوزه',
      to_book: 'حجز',
      dayes: [
        {
          day: 'السبت',
          day_check: false,
          times: [
            {
              time: 'الساعه 8 مساء ',
              time_ckeck: false,
            },
            {
              time: 'الساعه 9 مساء ',
              time_ckeck: false,
            },
          ],
        },
        {
          day: 'الخميس',
          day_check: false,
          times: [
            {
              time: 'الساعه 9 مساء ',
              time_ckeck: false,
            },
          ],
        },
      ],
    };
  }

  checked_day(index) {
    let dayes = this.state.dayes;
    dayes[index].day_check = !dayes[index].day_check;

    this.setState({dayes});
  }
  checked_time(index, indexx) {
    var dayes = this.state.dayes;
    this.state.dayes[index].times[indexx].time_ckeck =
      !this.state.dayes[index].times[indexx].time_ckeck;
    this.setState({dayes});
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
              إحجز موعدك الان
            </Text>

            <Image
              source={Appointmentt}
              style={{
                height: height * 0.2,
                width: height * 0.2,
                alignSelf: 'center',
                marginTop: height * 0.01,
                marginBottom: height * 0.01,
              }}></Image>

            {this.state.dayes.map((item, index) => (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width * 0.9,
                    backgroundColor: Color.babyblue,
                    alignSelf: 'center',
                    marginTop: height * 0.03,
                    borderRadius: height * 0.012,
                    borderBottomLeftRadius: this.state.dayes[index].day_check
                      ? 0
                      : height * 0.012,
                    borderBottomRightRadius: this.state.dayes[index].day_check
                      ? 0
                      : height * 0.012,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: width * 0.02,
                  }}>
                  <Text
                    style={{
                      fontSize: height * 0.025,
                      color: Color.blue,
                      fontFamily: 'Almarai-Bold',
                    }}>
                    {item.day}
                  </Text>

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
                    onPress={() => {
                      this.checked_day(index);
                    }}>
                    <Text
                      style={{
                        fontSize: height * 0.025,
                        color: '#fff',
                        fontFamily: 'Almarai-Bold',
                        alignSelf: 'center',
                      }}>
                      المواعيد
                    </Text>
                  </TouchableOpacity>
                </View>
                {item.day_check ? (
                  <>
                    <View
                      style={{
                        width: width * 0.9,
                        padding: width * 0.02,
                        backgroundColor: '#dda9be',
                        alignSelf: 'center',
                        borderBottomLeftRadius: height * 0.012,
                        borderBottomRightRadius: height * 0.012,
                      }}>
                      {this.state.dayes[index].times.map((itemm, indexx) => (
                        <>
                          <View
                            style={{
                             
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              alignItems: 'center',
                              marginVertical: height * 0.01,
                              borderRadius: height * 0.012,
                            }}>
                            <Text
                              style={{
                                fontSize: height * 0.025,
                                color: Color.blue,
                                fontFamily: 'Almarai-Bold',
                              }}>
                              {itemm.time}
                            </Text>

                            <TouchableOpacity
                              activeOpacity={0.7}
                              style={{
                                height: height * 0.06,
                                width: width * 0.3,
                                backgroundColor: this.state.dayes[index].times[
                                  indexx
                                ].time_ckeck
                                  ? Color.babyblue
                                  : Color.blue,
                                borderRadius: height * 0.012,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                              onPress={() => {
                                this.checked_time(index, indexx);
                              }}>
                              <Text
                                style={{
                                  fontSize: height * 0.025,
                                  color: '#fff',
                                  fontFamily: 'Almarai-Bold',
                                  alignSelf: 'center',
                                }}>
                                {this.state.dayes[index].times[indexx]
                                  .time_ckeck
                                  ? this.state.booked
                                  : this.state.to_book}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      ))}
                    </View>
                  </>
                ) : null}
              </>
            ))}
          </View>
        </ScrollView>
      </>
    );
  }
}
