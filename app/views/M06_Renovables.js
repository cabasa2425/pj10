// M06_Renovables.js

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { BotoPersonalitzat } from '../widget/BotoPesonalitzat';

/**
 * Pantalla: Evolución de las Energías Renovables en Europa
 * @version 1.0 25.04.2025
 * @author 
 */

export class M06_Renovables extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Energías Renovables en Europa
        </Text>

        <Text style={styles.paragraph}>
          En la última década, Europa ha dado pasos de gigante hacia la descarbonización. 
          La capacidad instalada de eólica y solar ha crecido más de un 150%, 
          mientras que el coste de producción ha caído un 70%.
        </Text>

        {/* Placeholder para gráfico de evolución */}
        <Image
          source={require('../../assets/renewables_trend.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.caption}>
          Gráfico 1: Evolución de la potencia instalada (2010–2024)
        </Text>

        <Text style={styles.paragraph}>
          Países como Alemania, España y Dinamarca lideran la producción eólica, 
          aportando conjuntamente más de 40 GW. Por su parte, Francia y Italia 
          han sido muy activos en solar fotovoltaica, con más de 30 GW cada uno.
        </Text>

        {/* Placeholder para mapa por país */}
        <Image
          source={require('../../assets/renewables_map.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.caption}>
          Mapa 1: Reparto geográfico de energías renovables en Europa
        </Text>

        <Text style={styles.paragraph}>
          El objetivo de la Unión Europea es alcanzar el 40% de electricidad 
          procedente de renovables para 2030. El impulso a la eficiencia 
          energética y al almacenamiento avanzan en paralelo, dando forma 
          a una red más estable y descentralizada.
        </Text>

        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 16,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333333',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#EEE', // placeholder mientras añades la imagen
  },
  caption: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
});
