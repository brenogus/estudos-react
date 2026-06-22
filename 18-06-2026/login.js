import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// --- TELA DE LOGIN ---
function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function validarLogin() {
    if (!email.includes('@')) {
      setErro('E-mail inválido! Precisa ter @.');
      return;
    }
    if (senha.length < 6) {
      setErro('Senha curta! Mínimo de 6 caracteres.');
      return;
    }
    setErro(''); 
    navigation.navigate('Painel', { email: email });
  }

  return (
    <View style={styles.telaCentrada}>
      <Text style={styles.titulo}>Acesso</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Seu E-mail" 
        placeholderTextColor="#94a3b8"
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Sua Senha" 
        secureTextEntry={true}
        placeholderTextColor="#94a3b8"
        onChangeText={setSenha}
      />

      {erro !== '' && <Text style={{ color: 'red', marginBottom: 10 }}>{erro}</Text>}

      <TouchableOpacity style={styles.botaoPrincipal} onPress={validarLogin}>
        <Text style={styles.textoBotaoBranco}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Recuperar')}>
        <Text style={styles.textoLink}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

// --- TELA DE RECUPERAR SENHA ---
function TelaRecuperar({ navigation }) {
  const [email, setEmail] = useState('');

  function enviarEmail() {
    if (email.includes('@')) {
      Alert.alert(
        "Sucesso!",
        "Enviamos um link de recuperação para seu e-mail.",
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    } else {
      Alert.alert("Erro", "Digite um e-mail válido.");
    }
  }

  return (
    <View style={styles.telaCentrada}>
      <Text style={styles.titulo}>Recuperação</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu e-mail" 
        placeholderTextColor="#94a3b8"
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.botaoPrincipal} onPress={enviarEmail}>
        <Text style={styles.textoBotaoBranco}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
  );
}

// --- TELA DE PAINEL ---
function TelaPainel({ navigation,route }) {
  const { email } = route.params || { email: 'Visitante' };

  return (
    <View style={styles.telaCentrada}>
      <Text style={styles.titulo}>Bem-vindo!</Text>
      <Text style={{ fontSize: 18 }}>Você logou com:</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3b82f6' }}>{email}</Text>
    </View>
  );
}

// --- APP PRINCIPAL ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Recuperar" component={TelaRecuperar} options={{ title: 'Esqueci a Senha' }} />
        <Stack.Screen name="Painel" component={TelaPainel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  telaCentrada: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f8fafc' },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#0f172a', marginBottom: 30 },
  input: { width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 15 },
  botaoPrincipal: { width: '100%', backgroundColor: '#3b82f6', padding: 18, borderRadius: 10, alignItems: 'center' },
  textoBotaoBranco: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  textoLink: { color: '#3b82f6', fontSize: 14, fontWeight: 'bold', marginTop: 15 }
});