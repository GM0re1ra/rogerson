import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Página não encontrada, volta ae doidão' }} />
            <View style={styles.container}>
            
                <Link href="/(tabs)" style={styles.button}>
                    Voltar à página inicial
                </Link>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#935A54'
    },

    button: {
        fontSize: 50,
        textDecorationLine: 'underline',
        fontFamily: 'monospace',
        color: '#E6AF85'
    },
});

