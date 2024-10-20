import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { agendarPaciente } from './Api';
import { useState } from 'react';
import './css/Botones.css';
import './css/AgendarPaciente.css';
import { Alert, Collapse, Container, Form, FormControl, FormLabel } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AgendarPaciente = () => {

    const [pacienteData, setPacienteData] = useState({
        dni: null,
        nombre: "",
        email: "",
        telefono: null,
        edad: null,
        obraSocial: "",
        plan: ""
    })
    const [emailAlert, setEmailAlert] = useState("")

    const handleAgendar = (e) => {
        e.preventDefault()
        //Validaciones pre-envio
        setEmailAlert("")
        const regExEmail = /\S+@\S+\.\S+/;
        if(!regExEmail.test(pacienteData.email)){
            setEmailAlert('Direccion de correo no valida. La direccion debe tener el formato "correo@electronico.com"')
            return
        }

        agendarPaciente(pacienteData)
            .then(
                data => {
                    if (typeof data === "string") {
                        Swal.fire ({
                            title: 'No se pudo agendar al paciente',
                            text: data,
                            icon: 'error'
                        })
                        return
                    }
                    Swal.fire ({
                        title: 'Agendado con exito!',
                        text: '¿Desea agendar un nuevo paciente?',
                        showCancelButton: true,
                        confirmButtonText: 'Nuevo paciente',
                        cancelButtonText: 'Volver a inicio',
                        allowOutsideClick: false,
                        icon: 'success'
                    }).then ((result) => {
                        if(result.isConfirmed) {
                            e.target.reset()
                            setPacienteData({
                                dni: null,
                                nombre: "",
                                email: "",
                                telefono: null,
                                edad: null,
                                obraSocial: "",
                                plan: ""
                            })
                        } else {
                            window.location='/'
                        }
                    })
                }
            )
            .catch( 
                error => {
                    Swal.fire({
                        title: "Error de conexión",
                        text: "No se pudieron guardar los datos del paciente.",
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    })
                }
            )
    }

    const setNombre = (e) => {
        setPacienteData({
            ...pacienteData,
            nombre: e.target.value
        })
    }

    const setDocumentoIdentidad = (e) => {
        setPacienteData({
            ...pacienteData,
            dni: e.target.value.trim()
        })
    }

    const setEmail = (e) => {
        setEmailAlert("")
        setPacienteData({
            ...pacienteData,
            email: e.target.value.trim()
        })
    }

    const setTelefono = (e) => {
        setPacienteData({
            ...pacienteData,
            telefono: e.target.value.trim()
        })
    }

    const setEdad = (e) => {
        setPacienteData({
            ...pacienteData,
            edad: e.target.value.trim()
        })
    }

    const setObraSocial = (e) => {
        setPacienteData({
            ...pacienteData,
            obraSocial: e.target.value.trim()
        })
    }

    const setPlan = (e) => {
        setPacienteData({
            ...pacienteData,
            plan: e.target.value.trim()
        })
    }
    return HTML;// agendatPaciente.html
}

export default AgendarPaciente;