// Import the liberary to create components
import React from 'react';
import {AppRegistry, View, ScrollView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// create the components

const App = () =>(
  <View style={{flex:1}}>
    <Header headerText={'Albums'}/>
    <ScrollView >
     <AlbumList />
    </ScrollView>
  </View>
  );


// render it to the devices

AppRegistry.registerComponent('albums2', () => App);
