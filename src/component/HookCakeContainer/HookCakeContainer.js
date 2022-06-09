import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../../redux/cake/CakeActions";

const HookCakeContainer = () => {
	const [numbers, setNumber] = useState(0);
	const numOfCakes = useSelector((state) => state.cake.numOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<h3>Num Of Cakes ={numOfCakes}</h3>
			<input type="text" onChange={(e) => setNumber(e.target.value)} />
			<button onClick={() => dispatch(buyCake(numbers))}>
				buy {numbers}Cake
			</button>
		</div>
	);
};

export default HookCakeContainer;
