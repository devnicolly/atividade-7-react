import React, {useState} from "react";

const Contador = () => {

	const [count, setCount] = useState(0);

	const incrementar = () => setCount(count + 1);
	const decrementar = () => {
		if (count > 0) setCount(count - 1);
	}

	return (
	<div>
		<h1>contador: {count}</h1>
		<button className="botao-contador" onClick={incrementar}>incrementar</button>
		<button className="botao-contador" onClick={decrementar}>decrementar</button>
	</div>
)

}

export default Contador