import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native';

const plants = [
  {
    id: 0,
    name: 'Irene',
    image: 'https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
  },
  {
    id: 1,
    name: 'Lucy',
    image: 'https://images.unsplash.com/photo-1459664018906-085c36f472af?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
  },
]

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>

        {plants.map(plant => {
          return (
            <View key={plant.id}>
              <Text>{plant.name}</Text>
              <Image
                source={{uri: plant.image}}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>
          )
        })}

        <Link to={`/plants`}>
          <Text>Go to plants</Text>
        </Link>
      </View>
    )
  }
}

class Plants extends React.Component {
  render() {
    return (
      <View>
        <Text>Plants</Text>
        <Link to={`/plants/1`}>
          <Text>Go to plant</Text>
        </Link>
      </View>
    )
  }
}

class Plant extends React.Component {
  render() {

    return (
      <View>
        <Text>Plant {this.props.match.params.id}</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/plants" component={Plants} />
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
