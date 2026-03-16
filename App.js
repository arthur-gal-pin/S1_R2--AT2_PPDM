import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>CADASTRO</Text>
      <View style={styles.card}>
        <Text style={styles.legenda}>NOME</Text>
        <TextInput style={styles.input}  keyboardType='default' autoCapitalize='words'></TextInput>
        <Text style={styles.legenda}>E-MAIL</Text>
        <TextInput style={styles.input} placeholder='Exemplo: exemplo@demonstracao.com' keyboardType='email-address'></TextInput>
        <Text style={styles.legenda}>TELEFONE</Text>
        <TextInput style={styles.input} placeholder='Exemplo: 19 99999-0800' keyboardType='phone-pad'></TextInput>
        <Text style={styles.legenda}>DATA DE NASCIMENTO</Text>
        <TextInput style={styles.input} placeholder='Formato: DD/MM/AAAA' keyboardType='numeric' maxLength={10}></TextInput>

        <Pressable style={styles.button} onPress={() => {
          Alert.alert(
            'Cadastro Realizado',
            'Os seus dados foram salvos com sucesso!'
          );
        }}>
          <Text style={styles.salvar}>
            SALVAR
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000480',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: '95%',
    height: '75%',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2e41a0',
    elevation: 10
  },
  input: {
    alignSelf: 'center',
    padding: 5,
    width: '95%',
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 40,
    borderColor: '#3b3ed8',
    backgroundColor: 'lightgray'
  },
  titulo: {
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 90,
    fontSize: 40,
    fontWeight: '800',
    color: '#ffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b3ed8',
    padding: 15,
    borderRadius: 10,
    width: '95%'
  },
  salvar: {
    color: 'white'
  },
  legenda: {
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2
  }
});
