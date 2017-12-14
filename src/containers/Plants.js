// dependencies
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-native';

// services
import PlantService from '../services/plant'

export default class Home extends React.Component {
  render() {
    var plants = PlantService.getAll()

    return (
      <View>
        {plants.map(plant => {
          return (
            <Link to={`/plants/${plant.id}`} key={plant.id}>
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
            </Link>
          )
        })}

        <Link to={`/plants`}>
          <Text>Go to plants</Text>
        </Link>
      </View>
    )
  }
}
