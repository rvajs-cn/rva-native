import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {observer, inject} from 'mobx-react/native'
import {navigationStyle} from '../styles'
import BackButton from '../components/BackButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60
  }
})

@inject('user')
@observer
class Profile extends React.Component {
  componentWillMount() {
    const {params} = this.props.navigation.state
    const failure = err => {
      console.log(err)
    }
    this.props.user.getProfile(params.name).catch(failure)
  }

  render() {
    const {profile} = this.props.user
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: profile.picture}} />
        <Text>{`${profile.username}'s profile page`}</Text>
      </View>
    )
  }
}

Profile.navigationOptions = ({navigation}) => {
  return {
    title: 'Profile',
    ...navigationStyle.defaultOptions,
    headerLeft: <BackButton onPress={() => navigation.goBack()} />
  }
}

export default Profile
