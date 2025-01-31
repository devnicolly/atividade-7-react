import React, {useState, useEffect} from "react";

function MudarBackground (){
	const [color, setColor] = useState ('#ffffff');


	// Math.random vai retornar um número decimal entre 0 e 1 (arredondado por conta do Math.floor), que será multiplicado por 16777215 (pesquisando para cumprir o desafio, vi que a cor hexadecimal "máxima" é #FFFFFF, ou seja, branco, essa cor em decimal é 16,777,215.) a multiplicação transforma esse número em um decimal válido para ser convertido para código hexadecimal, e logicamente uma cor válida, o toString faz essa conversão em base hexadecimal (16). o padStart é para garantir que esse código tenha apenas 6 dígitos.

	function gerarCor () {
		const corAleatoria = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
		setColor(corAleatoria);
	}


	useEffect(() => {
		const divBackground = document.querySelector('.div-background');
		if (divBackground) {
		  divBackground.style.backgroundColor = color;
		}
	  }, [color]);

	return (
		<div className="div-background">
			<h1 className="titulo-background">cor atual: {color}</h1>
			<button className="botao-background" onClick={gerarCor}>alterar</button>
		</div>
	)
}

export default MudarBackground