import * as React from 'react';
import {
  View,
  StatusBar,
  Dimensions,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Color from '../constant/Color';
import {
  Logoo,
  digestivesystem,
  teeth,
  skin,
  surgeon,
  man,
  plan,
  abortion,
  head,
  chest,
  newborn,
  urinary,
  brain,
  joint,
  therapy,
  thyroid,
} from '../constant/Images';
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search_key: '',
      found: true,
      Sections: [
        {
          section_id: 1,
          section_name: 'قسم الأسنان',
          section_Image: teeth,
          show: true,
        },
        {
          section_id: 2,
          section_name: ' قسم الأمراض الجلدية',
          section_Image: skin,
          show: true,
        },
        {
          section_id: 3,
          section_name: ' قسم جراحة عامة   ',
          section_Image: surgeon,
          show: true,
        },
        {
          section_id: 4,
          section_name: ' قسم التغذية والنحافة',
          section_Image: man,
          show: true,
        },
        {
          section_id: 5,
          section_name: ' قسم التغذية والعلاج والسمنة والنحافة',
          section_Image: plan,
          show: true,
        },
        {
          section_id: 6,
          section_name: ' قسم الجهاز الهضمى والباطنة',
          section_Image: digestivesystem,
          show: true,
        },
        {
          section_id: 7,
          section_name: 'قسم امراض النسا والتوليد',
          section_Image: abortion,
          show: true,
        },
        {
          section_id: 8,
          section_name: 'قسم انف و أذن و حنجرة',
          section_Image: head,
          show: true,
        },
        {
          section_id: 9,
          section_name: 'قسم امراض الصدر والاطفال',
          section_Image: chest,
          show: true,
        },
        {
          section_id: 10,
          section_name: 'قسم الاطفال وحديثى الولادة',
          section_Image: newborn,
          show: true,
        },
        {
          section_id: 11,
          section_name: 'قسم المسالك البولية والذكورة',
          section_Image: urinary,
          show: true,
        },
        {
          section_id: 12,
          section_name: 'قسم المخ والاعصاب',
          section_Image: brain,
          show: true,
        },
        {
          section_id: 13,
          section_name: 'قسم جراحة العظام والكسور',
          section_Image: joint,
          show: true,
        },
        {
          section_id: 14,
          section_name: 'قسم العلاج الطبيعى',
          section_Image: therapy,
          show: true,
        },
        {
          section_id: 15,
          section_name: 'قسم الغدد',
          section_Image: thyroid,
          show: true,
        },
      ],
    };
  }

  search(section) {
    let list = this.state.Sections;
    for (let i = 0; i < list.length; i++) {
      if (list[i].section_name.toLowerCase().includes(section)) {
        list[i].show = true;
        found = true;
      } else {
        list[i].show = false;
      }
    }

    this.setState({sections: list});
  }

  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Color.grey}
          barStyle="dark-content"></StatusBar>
        <View style={{flex: 1, backgroundColor: Color.grey}}>
          <View
            style={{
              padding: width * 0.06,
              backgroundColor: Color.grey,
              alignItems: 'center',
              flexDirection: 'row',
              textAlign: 'center',
            }}>
            <Image
              source={Logoo}
              style={{
                height: height * 0.07,
                width: height * 0.16,
                elevation: 16,
              }}
            />
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.035,
                fontFamily: 'Almarai-Bold',
                marginLeft: height * 0.01,
                color: Color.blue,
              }}>
              العيادة الخيرية
            </Text>
          </View>
          <View
            style={{
              width: height * 0.55,
              alignSelf: 'center',
              padding: 10,
              height: height * 0.1,
            }}>
            <TextInput
              placeholder="ابحث"
              value={this.state.search_key}
              style={{
                backgroundColor: Color.babyblue,
                borderColor: Color.babyblue,
                borderWidth: 2,
                borderRadius: height * 0.02,
                paddingRight: 16,
                paddingLeft: 16,
                color: Color.blue,
                fontSize:height*0.025
              }}
              onChangeText={value => {
                this.setState({search_key: value});
                this.search(value);
              }}
            />
          </View>

          <ScrollView>
            <View
              style={{
                width: width,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: width * 0.06,
                marginBottom: height * 0.1,
              }}>
              {this.state.Sections.map((item, index) =>
                item.show ? (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      padding: 5,
                      width: '45%',
                      backgroundColor: '#fff',
                      borderRadius: height * 0.02,
                      marginBottom: height * 0.03,
                      shadowColor: '#000',
                      elevation: 16,
                    }}>
                    <View style={{padding: 25}}>
                      <Image
                        source={item.section_Image}
                        style={{
                          height: height * 0.15,
                          //  padding:20,
                          borderRadius: height * 0.02,
                          width: '100%',
                        }}></Image>
                    </View>

                    <Text
                      style={{
                        fontSize: height * 0.025,
                        fontFamily: 'Almarai-Bold',
                        color: '#000',
                        textAlign: 'center',
                      }}>
                      {item.section_name}
                    </Text>
                  </TouchableOpacity>
                ) : null,
              )}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
