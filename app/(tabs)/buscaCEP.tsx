import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { useBuscaCep } from '../hooks/useBuscaCep';

export default function BuscaCEP() {
    const { cep, setCep, endereco, buscarCEP} = useBuscaCep();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Consulte seu CEP</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textinput}
                    value={cep}
                    onChangeText={setCep}
                    placeholder="Digite o CEP..."
                    keyboardType="numeric"
                />
            </View>

            <Text style={styles.cep}>{cep}</Text>

            <Button color = "#28737b" title="Buscar" onPress={buscarCEP}
            />

            {endereco.logradouro !== '' && (
                <View style={styles.result}>
                    <Text style={styles.resultado}>Logradouro: {endereco.logradouro}</Text>
                    <Text style={styles.resultado}>Bairro: {endereco.bairro}</Text>
                    <Text style={styles.resultado}>Cidade: {endereco.localidade}</Text>
                    <Text style={styles.resultado}>Estado: {endereco.uf}</Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004149',
        alignItems: 'center',
        padding: 16,
    },
    textinput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#28737b',
        padding: 8,
        marginVertical: 10,
        color: '#35838c',
        borderRadius: 5,
    },
    inputContainer: { 
        flexDirection: 'row', 
        marginBottom: 10 
    },
    result: {
        marginTop: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#28737b',
        borderRadius: 8,
    },
    resultado: {
        color: '#35838c',
        fontSize: 17,
    },
    titulo: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 20 
    },
    cep: {
        color: '#35838c',
        fontSize: 17,
        fontWeight: 'bold', 
    }
});