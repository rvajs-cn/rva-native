import React from 'react'
import {StyleSheet} from 'react-native'
import {useStrict, autorun} from 'mobx'
import {Provider, observer} from 'mobx-react/native'
import {AppNavigator} from './routes'
import RootStore from './stores'

useStrict(true)

const rootStore = new RootStore()

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props)
    autorun(() => {
      rootStore.user.getAboutus()
    })
  }

  render() {
    return (
      <Provider {...rootStore}>
        <AppNavigator />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
