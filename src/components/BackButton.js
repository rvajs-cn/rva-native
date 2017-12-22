import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'

const styles = StyleSheet.create({
  backbtn: {
    width: 68,
    paddingLeft: 25,
    // backgroundColor: 'red',
    height: '100%',
    justifyContent: 'center'
  }
})

class BackButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.backbtn} onPress={this.props.onPress}>
        <Image source={require('../assets/img/back-arrow.png')} />
      </TouchableOpacity>
    )
  }
}

export default BackButton
