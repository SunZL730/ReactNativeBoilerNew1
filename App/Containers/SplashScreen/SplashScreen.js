import React from 'react'
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './SplashScreenStyle'
import dummyUsers from './dummy'
import { ApplicationStyles, Helpers, Images } from 'App/Theme'

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userIndex : -1
    }
  }
  renderItems = ({ item, index }) => {
    let {userIndex} = this.state
    let isSelected = userIndex === index
    return (
      <TouchableOpacity 
        activityOpacity={0.8}
        style={styles.userBoard}
        onPress={() => {
          this.setState({
            userIndex: index
          })
        }}
        >
        <View style={[styles.userBoard1, !isSelected && { opacity: 0.7 }]}>
          <Image style={styles.userIcon} source={item.image} resizeMode={'contain'} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.username}>{item.firstName} {item.lastName}</Text>
            <View style={styles.userInfoView}>
              <View style={{ width: 80 }}>
                <Text style={styles.labelTitle}>Rate/Hr</Text>
                <Text style={styles.userInfoText}>{item.rate}</Text>
              </View>
              <View>
                <Text style={styles.labelTitle}>Sessions</Text>
                <Text style={styles.userInfoText}>{item.sessions}</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.chatView}>
          <Text style={styles.chatText}>Chat</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.logoView}>
          <Image style={styles.logo} source={Images.search} resizeMode={'contain'} />
          <Text style={styles.text}>Find tutors or students who have taken your exact class</Text>
        </View>
        <FlatList
          data={dummyUsers}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.signup}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
