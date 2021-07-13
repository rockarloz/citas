/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState} from 'react';
import Cita from './componentes/Cita';
import { 
  Text,
  StyleSheet, 
  View, FlatList
} from 'react-native';


import Formulario from './componentes/Formulario';
const App = () => {
// deefinir starte d e citas
const [citas, setCitas] = useState([
  {id: '1', paciente: 'espuma', propietario: 'Carlos', sintomas: 'no come'},
  {id: '2', paciente: 'lisa', propietario: 'mari', sintomas: 'no come'},
  {id: '3', paciente: 'chispa', propietario: 'vane', sintomas: 'no come'},
  
]);

const eliminarPaciente = id => {
  setCitas( (citasActuales) => {
    return citasActuales.filter( cita => cita.id !== id)
  })
}
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Administrador de Citas</Text>
      <Formulario></Formulario>
      {/* {citas.map(cita => (
        <View>
          <Text>{cita.paciente}</Text>
        </View>
      ))} */}
      <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas': 'No hay citas, agrega una'} </Text>

      <FlatList 
        data= {citas} 
        renderItem= { ({item}) => <Cita cita ={item } eliminarPaciente= {eliminarPaciente}/> }
        keyExtractor = {citas.id}
      />

    </View>

    
   
  );
};

const styles = StyleSheet.create({
  titulo:{
    color: '#fff',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold', 
    textAlign: 'center'
  }, 
  contenedor: {
    backgroundColor: '#aa076d',
    //minHeight: '100%'
    flex: 1
  }
});
export default App;
