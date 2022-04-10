import { useEffect } from "react"
import Pacientes from "./Pacientes"
const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
    useEffect(()=>{
        if(pacientes.length > 0){
            console.log('Nuevo paciente')
        }
    },[pacientes])
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="text-3xl font-black text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y citas </span></p>

                    {pacientes.map( (paciente) =>(
                            <Pacientes 
                                key = {paciente.id}
                                paciente = {paciente}
                                setPaciente = {setPaciente}
                                eliminarPaciente = {eliminarPaciente}
                            />
                        )
                    )}
                </>
            ) : 
                <>
                    <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center"> Comienza agregando pacientes <span className="text-indigo-600 font-bold"> y Aparecerán en este lugar </span></p>
                </>
            }

        </div>
    )
}

export default ListadoPaciente