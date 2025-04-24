import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { FlipButton } from '../widget/FlipButton/FlipButton';

/**
 * Classe que hereta de Component i que implementa un component
 * independent en l'app. És un component bàsic sense estils
 * Fa servir routing
 * @version 2.0 23.03.2025
 * @author sergi.grau@fje.edu
 */

export class M06_Home extends React.Component {
  render() {
    return (
      <View style={estils.contenidors}>
        <View style={estils.contenidorLogo}>
          <Image
            source={require('../../assets/logo.png')}
            style={estils.logo}
            resizeMode="contain"
          />
        </View>

        <View style={estils.contenidorBotons} testID="contenidorBotons">
          <FlipButton
            title="Detall"
            frontColor="#4caf50"
            backColor="#66bb6a"
            onPress={() => this.props.navigation.navigate('Detall', { nom: 'Sergi Grau' })}
          />
          
          <FlipButton
            title="Mapes"
            frontColor="#2196f3"
            backColor="#42a5f5"
            frontTextColor="white"
            backTextColor="white"
            onPress={() => this.props.navigation.navigate('Mapes')}
          />
          
          <FlipButton
            title="SQLite"
            frontColor="#ff9800"
            backColor="#ffeb3b"
            frontTextColor="black"
            backTextColor="black"
            onPress={() => this.props.navigation.navigate('SQLite')}
          />
        </View>
      </View>
    );
  }
}

const estils = StyleSheet.create({
  contenidors: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#c3cfe2',
  },
  contenidorLogo: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 100,
  },
  contenidorBotons: {
    width: '100%',
    alignItems: 'center',
  },
});