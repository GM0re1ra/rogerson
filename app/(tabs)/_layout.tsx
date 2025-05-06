import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function tabLayout() {
    return (
        <Tabs
            screenOptions={{
                
                tabBarActiveTintColor: '#000', // cor dos icones 
                tabBarInactiveTintColor: '#35838c', // cor dos icones nao selecionados
                headerStyle: {  
                backgroundColor: '#1b626b'}, // cor de cima
                headerShadowVisible: false,
                tabBarStyle: {backgroundColor: '#1b626b'}  // cor de baixo
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicial',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />

            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre Os Deuses',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    ),
                }}
            />

            <Tabs.Screen
                name="toDoList"
                options={{
                    title: 'Lista de deuses',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'clipboard' : 'clipboard-outline'} color={color} size={24} />
                    ),
                }}
            />

        </Tabs>
    );
}
