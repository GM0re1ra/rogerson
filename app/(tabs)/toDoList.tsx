import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from "../hooks/useTarefas";

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Deuses</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu deus..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <Button color = "#28737b" title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList 
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>
                                <Ionicons name={'close'} color={''} size={24} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#004149' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    inputContainer: { flexDirection: 'row', marginBottom: 10 },
    input: { flex: 1, borderWidth: 1, borderColor: '#28737b', padding: 10, borderRadius: 5, marginRight: 10, color: '#35838c' },
    tarefaContainer: {
        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#35838c', padding: 15, color: '#fff',
        marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2
    },


});