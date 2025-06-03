import { Text, View, StyleSheet } from "react-native";
import Button from '../components/Button';
import ImageViewer from "../components/imageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert ('Você não selecionou nenhuma imagem');
    }
  };

const PlaceholderImage = require('@/assets/images/fundo.jpg')

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha a foto" onPress={pickImageAsync}/>
        <Button label="Use essa foto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#004149'
  },
  text: {
    fontSize: 50,
    fontFamily: 'monospace',
    color: '#35838c'
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
})