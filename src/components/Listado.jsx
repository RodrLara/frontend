import useRegistrados from "../hooks/useRegistrados"
import Registrado from "./Registrado"

const Listado = () => {

	const { registrados } = useRegistrados()

	return (
		<>
			{ registrados.length  ? 
			(
				<>
					<h2 className="bg-black flex-items-start text-3xl py-4 mx-10 rounded-md text-white text-center ">Registros de sensores
					</h2>
					
					{registrados.map(registrado => (
						<Registrado
							key={registrado._id}
							registrado={registrado}
						/>
					))}
				</>
			) :
			(
				<>
					<h2 className="bg-black flex-items-start text-3xl py-4 mx-10 rounded-md text-yellow-400 text-center">No hay registros</h2>
				</>
			)}
		</>
	)
	
}

export default Listado