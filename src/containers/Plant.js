// dependencies
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';

// services
import PlantService from '../services/plant'

export default class Plant extends React.Component {
  render() {
    var plant = PlantService.getById(this.props.match.params.id)

    return (
      <View>
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
  }
}
