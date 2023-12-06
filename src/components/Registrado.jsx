import useRegistrados from "../hooks/useRegistrados"

const Registrado = ({ registrado }) => {

	const { setEdicion, eliminarRegistrado} = useRegistrados()
	const { LUMINOSIDAD, TEMPERATURA, HUMEDAD, _id } = registrado

	return (
		<>
			<div>
				< div className="mx-10 my-10 bg-gray-100 shadow-md rounded-md px-7 py-5 " >
					<div className="flex justify-center pb-5 mx-3">
						<h1 className="text-gray-700 font-bold text-xl uppercase">REGISTRO DE SENSOR</h1>
					</div>

					<div className=" bg-gray-100 py-1 pl-3 mx-3 rounded">
						<p className="font-bold text-gray-800 ml-3 my-6 uppercase">LUMINOSIDAD : {' '}
							<span className="font-normal text-black normal-case">{LUMINOSIDAD}</span>
						</p>
						<p className="font-bold text-gray-800 ml-3 my-6 uppercase">TEMPERATURA : {' '}
							<span className="font-normal text-black normal-case">{TEMPERATURA}</span>
						</p>
						<p className="font-bold text-gray-800 ml-3 my-6 uppercase">HUMEDAD:{' '}
							<span className="font-normal text-black normal-case">{HUMEDAD}</span>
						</p>
					</div>
					
					<div className="flex mt-5 py-2 pl-3 justify-between">
						<button
							type="button"
							className="py-3 px-10 bg-black text-lime-400 hover:bg-sky-500 hover:text-white uppercase font-semibold rounded transition-colors duration-300"
							onClick={() => setEdicion(registrado)}
						>Editar
						</button>
						
						<button
							type="button"
							className=" py-3 px-10 bg-black text-lime-400 mr-2 hover:bg-red-500 hover:text-white uppercase font-semibold rounded transition-colors duration-300"
							onClick={() => eliminarRegistrado(_id)}
						>Eliminar
						</button>
					</div>

				</div>
			</div>
		</>
	)
}

export default Registrado