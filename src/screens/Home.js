import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import {observer, inject} from 'mobx-react/native'
import {navigationStyle} from '../styles'
import Button from '../components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainWrap: {
    flex: 1
  },
  btnWrap: {
    height: 97,
    paddingLeft: 23,
    paddingRight: 23,
    justifyContent: 'center',
    width: '100%'
  }
})

@inject('user')
@observer
class Home extends React.Component {
  render() {
    const {navigation} = this.props
    const {aboutus} = this.props.user
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.mainWrap}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={styles.logo}>{aboutus.website}</Text>
          <Text style={styles.desc}>{aboutus.keywords}</Text>
        </ScrollView>
        <View style={styles.btnWrap}>
          <Button
            onPress={() => navigation.navigate('Profile', {name: 'rvajs'})}
            text="Goto Profile"
            height={50}
            radius={24}
            active={true}
          />
        </View>
      </View>
    )
  }
}

Home.navigationOptions = ({navigation}) => {
  return {
    title: 'Home',
    ...navigationStyle.defaultOptions
  }
}

export default Home
