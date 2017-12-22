import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'

const styles = StyleSheet.create({
  mybtn: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgb(80, 219, 233)',
    backgroundColor: 'rgb(80, 219, 233)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mytext: {
    color: '#ffffff',
    fontSize: 20,
    color: 'rgb(37, 38, 43)'
  }
})

const btnStyles = {
  secondary: {
    wrap: {borderColor: 'rgb(80, 219, 233)', backgroundColor: 'transparent'},
    text: {color: 'rgb(180, 180, 180)'}
  },
  disabled: {
    wrap: {borderColor: 'rgb(130, 130, 130)', backgroundColor: 'transparent'},
    text: {color: 'rgb(130, 130, 130)'}
  }
}

class Button extends Component {
  render() {
    const {radius = 24, height = 50, text, type} = this.props
    const wrapStyle = btnStyles[type] && btnStyles[type].wrap
    const textStyle = btnStyles[type] && btnStyles[type].text
    return (
      <TouchableOpacity
        style={[
          styles.mybtn,
          wrapStyle,
          {borderRadius: radius, height: height}
        ]}
        onPress={this.props.onPress}>
        <Text style={[styles.mytext, textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  text: 'Default',
  type: '', // disabled, primary, secondary,
  onPress: () => {}
}

export default Button
