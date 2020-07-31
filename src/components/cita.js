import React from 'react'
import PropTypes from 'prop-types'; // para documentar componentes, abajo de todo

const Cita = ({cita, eliminarCita}) =>  (    //le pasamos la cita completa
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span> </p>
        <p>Owner: <span>{cita.propietario}</span> </p>
        <p>Date: <span>{cita.fecha}</span> </p>
        <p>Hour: <span>{cita.hora}</span> </p>
        <p>Symptoms: <span>{cita.sintomas}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) }
        >Delete &times;</button>
    </div>
);

Cita.propType = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;