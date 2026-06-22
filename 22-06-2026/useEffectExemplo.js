import React, {useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';


export default function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
      async function buscarDadosApi() {
        try {

          const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
          const dados = await resposta.json();

          setUsuarios(dados);
        } catch (erro) {
          console.log("Erro ao buscar dados: ", erro)
        } finally {

          setCarregando(false);
        }
      }

      buscarDadosApi();
    }, []);

    if (carregando) {
      return (
        <View style={styles.centro}>
          <ActivityIndicator size= 'large' color= '#3b82f6'/>
          <Text style={{marginTop: 10}}>Buscando usuários...</Text>
        </View>
      );
    }


    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content'/>
        <Text style={styles.titulo}>Usuários da API</Text>
        <FlatList
            data={usuarios}
            keyExtractor={item=> item.id.toString()}
            renderItem={({ item }) => (
                  <View style={styles.card}>
                      <Text style={styles.nome}>{ item.name }</Text>
                      <Text style={styles.email}>{item.email}</Text>
                  </View>
            )}
        />
      </View>
    );
}

const styles = StyleSheet.create( {
  container: {flex: 1, padding: 40, backgroundColor: "#f8fafc"},
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {padding: 15, backgroundColor:'#fff', marginBottom: 10, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0'},
  nome : {fontSize: 16, fontWeight: 'bold'},
  email: {fontSize: 14, color: '#64748b'}
})