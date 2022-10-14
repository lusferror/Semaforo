import React, { useEffect, useState } from "react";
import Rojo from "./rojo.jsx"
import Amarillo from "./amarillo.jsx"
import Verde from "./verde.jsx"
import Boton from "./boton.jsx"
import Purple from "./purple.jsx";
import BotonAdd from "./boton_add.jsx";
import { func } from "prop-types";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [rojo, setRojo] = useState("");
	const [amarillo, setAmarillo] = useState("");
	const [verde, setVerde] = useState("");
	const [purple, setPurple] = useState("");
	const [bombillo, setBombillo] = useState(0);
	const [nuevo, setNuevo] = useState(false);
	const [visible, setVisible] = useState("");
	const [bot, setBot] = useState("AGREGAR");
	// useEffect(()=>{
	// 	setColor(color=>"")
	// },[color])
	function lrojo(event) {

		setAmarillo(amarillo => "")
		setVerde(verde => "")
		setBombillo(bombillo => 1)
		setPurple(purple => "")
		setRojo(rojo => "Luz")

	}

	function lamarillo() {
		setAmarillo(amarillo => "Luz")
		setRojo(rojo => "")
		setVerde(verde => "")
		setPurple(purple => "")
		setBombillo(bombillo => 2)
	}

	function lverde() {
		setAmarillo(amarillo => "")
		setRojo(rojo => "")
		setVerde(verde => "Luz")
		setPurple(purple => "")
		setBombillo(bombillo => 3)
	}

	function lpurple() {
		setAmarillo(amarillo => "")
		setRojo(rojo => "")
		setVerde(verde => "")
		setPurple(purple => "Luz")
		setBombillo(bombillo => 4)
	}

	function cambiar() {
		if (bombillo == 0) {
			lrojo();
		}
		else if (bombillo == 1) {
			lamarillo()
		}
		else if (bombillo == 2) {
			lverde()
		}
		else if (nuevo == true && bombillo == 3) {
			lpurple()
		}
		else {
			lrojo()
		}
	}

	function agregar() {
		if (nuevo == false) {
			setVisible(visible => "mostrar")
			setNuevo(nuevo => true);
			setBot(bot=>"OCULTAR")
		}
		else {
			setNuevo(nuevo=>false);
			setVisible(visible=>"ocultar")
			setBot(bot=>"AGREGAR")
		}
	}

	return (
		<div className="d-flex">
			<div className="text-center TrafficLight mx-auto d-flex justify-content-center" id="semaforo">
				<div className="col-8 m-3 d-flex flex-column justify-content-between align-items-center">
					<Rojo color={rojo} luz={lrojo} />
					<Amarillo color={amarillo} luz={lamarillo} />
					<Verde color={verde} luz={lverde} />
					<Purple color={purple} luz={lpurple} estilos={visible} />
				</div>
			</div>
			<div className="col-5 d-flex align-items-center flex-column m-2">
				<Boton cambio={cambiar} />
				<BotonAdd add={agregar} nombre={bot} />
			</div>
		</div>
	);
};

export default Home;
