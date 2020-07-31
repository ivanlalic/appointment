import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; // para crear id unico de cada cita
import PropTypes from 'prop-types'; // para documentar componentes, abajo de todo

const Form = ({crearCita}) => {              //props, destructuring object

    // Crear state de citas
    const [cita, actualizarCita] = useState({   // el objeto se llama Cita
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);



    // Funcion ejecudata cada vez que usuario escribe en input
    const actualizarState = e => {
        actualizarCita({                        // funcion que modifica al State
            ...cita,                           // Spread operator para no modificar el cita original
            [e.target.name]: e.target.value, // agrega el valor del campo name en el state

        })                          
    }

    // Extraer los valores
    
    const { mascota, propietario, fecha, hora, sintomas} = cita; // evita escribir cita.mascota, cita.propietario, etc →pero debo pasarlo como value en cada item


    
    // When user press subtmit→send form

    const submitCita = e => {
        e.preventDefault();
        
        
        // 1ero→Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true) // si el error sale, se cambia a true, originalmente en false
            return;                         // Cuando hay un error, debo poner return; para que no se siga ejecutando codigo. Luego me voy a crear el useState del error → const [error, actualizarError] = useState(false);
        }

        // 1.5→En caso que aplique mostrar el error, luego hay que eliminar el cartel en la web→
        actualizarError(false);

        // 2do→Asignar ID (key)
        cita.id = uuidv4();             // crea ID unico de cada cita
        
        
        // 3ero→Crear la cita
        crearCita(cita);    


        // 4to→Reiniciar Form SIEMPRE con el modificador del state!!!!!!!!!
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }



    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null} 

            <form           // le agrego el onSubmit
                onSubmit={submitCita}
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text" 
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState} // Should be called handleChange
                    value={mascota}
                    />

                <label>Nombre del dueño</label>
                <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState} // Should be called handleChange
                    value={propietario}
                    />

                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState} // Should be called handleChange
                    value={fecha}
                    />

                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState} // Should be called handleChange
                    value={hora}
                    />

                <label>Sintoma</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState} // Should be called handleChange
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
                    
            </form>


        </Fragment>
        
    );
}

Form.propTypes = {
    crearCita: PropTypes.func.isRequired
};
 
export default Form;