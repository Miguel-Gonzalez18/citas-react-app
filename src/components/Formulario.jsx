import { useState, useEffect } from "react"
import Error from "./Error"
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
        const [nombre, setNombre] = useState('')
        const [propietario, setPropietario] = useState('')
        const [email, setEmail] = useState('')
        const [fecha, setFecha] = useState('')
        const [sintomas, setSintomas] = useState('')
        const [error, setError] = useState(false)

        useEffect(()=>{
            if(Object.keys(paciente).length > 0){
                setNombre(paciente.nombre)
                setPropietario(paciente.propietario)
                setEmail(paciente.email)
                setFecha(paciente.fecha)
                setSintomas(paciente.sintomas)
            }
        }, [paciente])

        const generarId = () =>{
            const random = Math.random().toString(36).substr(2)

            return random
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            if([nombre,propietario,email,fecha,sintomas].includes('')){
                e.preventDefault()
                setError(true)
                return;
            }
            setError(false)

            //Objeto de pacientes
            const objetoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas
            }

            if(paciente.id){
                //Editando paciente
                objetoPaciente.id = paciente.id
                const pacienteActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
                setPacientes(pacienteActualizados)
                setPaciente({})
            }
            else{
                objetoPaciente.id = generarId()
                setPacientes([...pacientes, objetoPaciente])
            }
            // resetear el form
            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
            
        }
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimientos pacientes</h2>
            <p className="text-lg mt-5 text-center">
                Agregue pacientes y {''}
                <span className="text-indigo-600 font-bold">Administrelos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mb-10">
                {error &&
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                }
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre mascota</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" id="nombre" value={nombre} onChange={ (e)=> setNombre(e.target.value) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombreP">Nombre propietario</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" id="nombreP" value={propietario} onChange={ (e)=> setPropietario(e.target.value) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">E-mail</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Correo del propietario" id="email" value={email} onChange={ (e)=> setEmail(e.target.value) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">De Alta</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" id="alta" value={fecha} onChange={ (e)=> setFecha(e.target.value) }/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas" name="" id="sintomas" cols="30" rows="10" value={sintomas} onChange={ (e)=> setSintomas(e.target.value) }></textarea>
                </div>
                
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md" value={ paciente.id ? 'Editar paciente' : 'Agregar nuevo paciente' }/> 
            </form>
            
        </div>
    )
}

export default Formulario