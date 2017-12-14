// dependencies
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native';

// containers
import Plants from './src/containers/Plants'
import Plant from './src/containers/Plant'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Plants} />
          <Route exact path="/plants/:id" component={Plant} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
