import { Text, View, StyleSheet, Image } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Na mitologia grega, os Deuses do Olimpo formam o principal panteão divino, 
                habitando o topo do Monte Olimpo, a montanha mais alta da Grécia. Eles são representações poderosas de 
                forças da natureza, emoções humanas e aspectos fundamentais da vida. Entre os mais conhecidos estão Zeus, 
                o rei dos deuses e senhor dos céus; Hera, deusa do casamento; Poseidon, deus dos mares; Atena, deusa da 
                sabedoria; Apolo, deus do sol e das artes; Ártemis, deusa da caça; Ares, deus da guerra; e Afrodite, deusa
                do amor. Cada divindade tem sua personalidade, símbolos e histórias marcantes, influenciando a cultura, a 
                arte e a filosofia até os dias de hoje.
            </Text>

                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#004149',
    },
    text: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#35838c',
    margin: 30,
    },
});