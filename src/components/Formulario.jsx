const Formulario = () => {

	return (
		<>

			<form className="bg-gray-200 bg-opacity-50 py-7 px-6 mb-10 lg:mb-5 shadow-sm rounded-md" >
				<p className="px-10 py-3 mb-6 text-gray-100 uppercase font-bold rounded text-center text-xl">
					Promedio de Datos
				</p>

				<div className="flex flex-row -mx-3 mb-6">
					<div className="w-full px-3 mb-6 md:mb-0">
						<label
							htmlFor="LUMINOSIDAD"
							className="text-gray-800 uppercase font-bold"
						>LUMINOSIDAD</label>
						
					</div>
				</div>
				<div className="flex flex-row -mx-3 mb-6">
					<div className="w-full px-3 mb-6 md:mb-0">
						<label
							htmlFor="TEMPERATURA"
							className="text-gray-800 uppercase font-bold"
						>TEMPERATURA</label>
					</div>
				</div>
				<div className="flex flex-row -mx-3 mb-6">
					<div className="w-full px-3 mb-6 md:mb-0">
						<label
							htmlFor="HUMEDAD"
							className="text-gray-800 uppercase font-bold"
						>HUMEDAD</label>
					</div>
				</div>
				
			</form>
		
		</>
	)

}

export default Formulario