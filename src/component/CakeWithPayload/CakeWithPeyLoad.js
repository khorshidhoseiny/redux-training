import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../../redux/cake/CakeActions";

const CakeWithPeyLoad = () => {
	
	const numOfCakes = useSelector((state) => state.cake.numOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<h3>Num Of Cakes ={numOfCakes}</h3>
			
		</div>
	);
};

export default CakeWithPeyLoad;
