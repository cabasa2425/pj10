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

        <View style={estils.buttonsWrapper} testID="contenidorBotons">
          <FlipButton
            title="Detall"
            frontColor="#FF8A65"
            backColor="#FFCCBC"
            backTextColor="black"
            backText="Detall: clica para ver información sobre el desarrollador de la app"
            onPress={() => this.props.navigation.navigate('Detall', { nom: 'Sergi Grau' })}
          />
          
          <FlipButton
            title="Mapes"
            frontColor="#4DB6AC"
            backColor="#B2DFDB"
            frontTextColor="white"
            backTextColor="black"
            backText="Mapes: clica para ver tu ubicación"
            onPress={() => this.props.navigation.navigate('Mapes')}
          />
          
          <FlipButton
            title="SQLite"
            frontColor="#BA68C8"
            backColor="#E1BEE7"
            frontTextColor="white"
            backTextColor="black"
            backText="SQLite: clica para ver nuestra base de datos"
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
  buttonsWrapper: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});