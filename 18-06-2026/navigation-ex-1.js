import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function TelaInicial({navigation}) {
  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Tela principal</Text>
      <TouchableOpacity
      style={styles.botao}
      onPress = {() => navigation.navigate('Detalhes')}
      >
        <Text style={styles.textoBotao}>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

function TelaDetalhes({navigation}) {
  return (
    <View style={styles.telaDetalhe}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>
      <TouchableOpacity
      style={styles.botaoVoltar}
      onPress = {() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component= {TelaInicial} options={{ title: 'Meu App'}}/>
            <Stack.Screen name="Detalhes" component= {TelaDetalhes}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    tela: {flex: 1, justfyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc'},
    telaDetalhe: {flex: 1, justfyContent: 'center', alignItems: 'center', backgroundColor: '#ff6ff'},
    titulo: {fontsize: 24, fontWeight: 'bold', marginBottom:20},
    botao: {backgroundColor: '#3b82f6', padding: 15, borderRadius: 10},
    botaoVoltar: {backgroundColor: '#64748b', padding: 15, borderRadius: 10},
    textoBotao: {color: 'white', fontWeight: 'bold', fontSize: 16}});
