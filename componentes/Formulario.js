import React, { useState } from 'react';

import { 
  Text,
  StyleSheet, 
  View, 
  TextInput,
  Button, 
  TouchableHighlight
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarFecha = (date) => {
        console.warn("A date has been picked: ", date);
        const opciones = { year: 'numeric', month: 'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };
    const confirmarHora = (date) => {
        console.warn("A dora has been picked: ", date); 
        const opciones = { hour: 'numeric', minute: '2-digit'};
        guardarHora(date.toLocaleString('es-ES', opciones));
        hideTimePicker();
    };
    const crearNuevaCita = () =>{
        console.log(propietario);

    }
    return (
        <>
            <View  style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText = { (texto) => guardarPaciente(texto) }
                    />
                </View>
                <View>
                    <Text style={styles.label}>Dueno:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText = { (texto) => guardarPropietario(texto) }
                    />
                </View>
                <View>
                    <Text style={styles.label}>contacto</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText = { (texto) => guardarTelefono(texto) }
                        keyboardType='numeric'
                    />
                </View>

             

                <View>
                    <Text style={styles.label}>Fecha</Text>
                    <Button title="Seleccionar Fecha:" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                    />
                    <Text>{fecha}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Hora</Text>
                    <Button title="Seleccionar Hora:" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS='Elige una hora'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{hora}</Text>
                </View>

                <View>
                    <Text style={styles.label}>sintomas</Text>
                    <TextInput 
                        multiline
                        style={styles.input}
                        onChangeText = { (texto) => guardarSintomas(texto) }
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={() => crearNuevaCita() } style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}> Submit &times;</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </>
       
    )
}
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: 'white', 
        paddingHorizontal: 20,
        paddingVertical: 10, 
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold', 
        fontSize: 18,
        marginTop: 20
    },
    input:{
        marginTop: 10,
        height: 50, 
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
      
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoSubmit:{
        color: '#fff', 
        fontWeight: 'bold', 
        textAlign: 'center'
    }

})
export default Formulario;