/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Cita from './componentes/Cita';
import {
  Text,
  StyleSheet,
  View, FlatList,
  TouchableHighlight
} from 'react-native';


import Formulario from './componentes/Formulario';
const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(true);
  // deefinir starte d e citas
  const [citas, setCitas] = useState([
    { id: '1', paciente: 'espuma', propietario: 'Carlos', sintomas: 'no come' },
    { id: '2', paciente: 'lisa', propietario: 'mari', sintomas: 'no come' },
    { id: '3', paciente: 'chispa', propietario: 'vane', sintomas: 'no come' },

  ]);

  const eliminarPaciente = id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id)
    })
  }

  const mostrarFormulario = () => {

    guardarMostrarForm(!mostrarForm);
  }
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Administrador de Citas</Text>
      <View>
        <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}> Crear Nueva Cita</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.contenido}>
        {mostrarForm ? (
          <Formulario />
        ) : (
          <>
            {/*
            dejo este comment xq esta no seria la mejor forma de renderar
            los elemendos debido al performance
            {citas.map(cita => (
              <View>
                <Text>{cita.paciente}</Text>
              </View>
            ))} */}
            <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>

            <FlatList
              style={styles.listado}
              data={citas}
              renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}
              keyExtractor={citas.id}
            />
          </>


        )}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  titulo: {
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
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
  },
  textoMostrarForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default App;
