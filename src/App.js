import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/form';
import Cita from './components/cita';

function App() {

  // ACA SE PUEDE ESCRIBIR CODIGO DE JS VANILLA

  //CITAS EN LOCALSTORAGE
  let citasIniciales = JSON.parse(localStorage.getItem('citas')); //JSON.parse → lo convierte todo a string que es lo unico que puede guardar localStorage
  if (!citasIniciales) {
    citasIniciales = [];
  } 


  // Array Citas (todas las citas vienen aca), no es el singular -cita- del form.js
  const [citas, guardarCitas] = useState(citasIniciales); // esto seria que el valor inicial de citas = citasIniciales que es un array vacio o lo que tome del localStorage

  // useEffect (siempre arrow function) para realizar ciertas operaciones cuando el state cambia→simil DOMContentLoaded()
  // se ejecuta cuando el componente esta listo o cuando hya cambios en el componente.
  // si le pasas un [] vacio, se ejecuta 1 sola vez.
  // Lo quiero usar para que vez que se modifique el state de citas→localStorage
  // si le paso [citas]→ejectua cada vez que se modifica ese state de citas!

  useEffect( () => {
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas)) //citas (no 'citas') es la del useState...el array
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }
  , [citas, citasIniciales]);



  // Creo funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas, //copia del stateoriginal
      cita //le agrego la cita que viene mandandose cuando le di click al submit
    ]) // vendria a ser lo mismo que hacer→ citas.push(cita); pero en react hay que usar la funcion guardarCitas del useState
  }

  // FUNCION QUE ELIMINA CITA POR SU ID → debo pasarsela al componente <Cita />
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);         // itera en todas las citas y el filter te deja las citas cuyos id sean distintos del que pasas, el que pasaste te lo filtra*elimina
    guardarCitas(nuevasCitas); // le paso nuevasCitas que ya es un array, por eso no lo pongo entre []
  }

    // MENSAJE CONDICIONAL CUANDO NO HAY CITAS
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';


  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">  
            <Form 
              crearCita={crearCita} // para comunicarse, props, con el formulario componente.
            />
          </div>   
          <div className="one-half column">  
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita} // debo pasarla al componente tambien como props
              />
            ))}
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
