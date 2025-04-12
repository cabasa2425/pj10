import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 10,
  },
  preview: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 10,
    borderRadius: 10,
  },
  previewImage: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  }
});

export class M07_Camera extends React.Component {
  constructor(props) {
    super(props);
    this.cameraRef = React.createRef();
    this.state = {
      hasCameraPermission: null,
      hasMediaLibPermission: null,
      imageUri: null,
      type: Camera.Constants.Type.back
    };
  }

  async componentDidMount() {
    try {
      // Demanar permisos de càmera
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      this.setState({ hasCameraPermission: cameraStatus === 'granted' });
      
      // Demanar permisos de biblioteca multimèdia
      const { status: mediaLibStatus } = await MediaLibrary.requestPermissionsAsync();
      this.setState({ hasMediaLibPermission: mediaLibStatus === 'granted' });

      // Si tenim permís, obtenim l'última imatge
      if (mediaLibStatus === 'granted') {
        try {
          const { assets } = await MediaLibrary.getAssetsAsync({ first: 1 });
          if (assets.length > 0) {
            this.setState({ imageUri: assets[0].uri });
          }
        } catch (error) {
          console.log("Error carregant imatges:", error);
        }
      }
    } catch (error) {
      console.log("Error en componentDidMount:", error);
      this.setState({ hasCameraPermission: false });
    }
  }

  ferFoto = async () => {
    if (this.cameraRef.current) {
      try {
        const photo = await this.cameraRef.current.takePictureAsync();
        console.log("Foto feta:", photo.uri);
        this.setState({ imageUri: photo.uri });
        
        if (this.state.hasMediaLibPermission) {
          const asset = await MediaLibrary.createAssetAsync(photo.uri);
          try {
            await MediaLibrary.createAlbumAsync('DAW2', asset, false);
            console.log("Imatge desada a l'àlbum DAW2");
          } catch (albumError) {
            console.log("Error creant l'àlbum, desant a la galeria:", albumError);
          }
        }
      } catch (error) {
        console.log("Error fent la foto:", error);
      }
    } else {
      console.log("Referència de càmera no disponible");
    }
  };

  render() {
    const { hasCameraPermission, imageUri, type } = this.state;

    if (hasCameraPermission === null) {
      return <View style={styles.container}><Text>Sol·licitant permisos de càmera...</Text></View>;
    }
    
    if (hasCameraPermission === false) {
      return <View style={styles.container}><Text>No hi ha accés a la càmera</Text></View>;
    }

    return (
      <View style={styles.container}>
        <Camera 
          style={styles.camera}
          type={type}
          ref={this.cameraRef}
        />
        
        <View style={styles.controls}>
          <Button 
            title="Fes una foto" 
            onPress={this.ferFoto} 
          />
          <Button
            title="Canvia càmera"
            onPress={() => {
              this.setState({
                type: type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              });
            }}
          />
        </View>
        
        {imageUri && (
          <View style={styles.preview}>
            <Text>Última foto:</Text>
            <Image 
              source={{ uri: imageUri }} 
              style={styles.previewImage} 
            />
          </View>
        )}
      </View>
    );
  }
}

