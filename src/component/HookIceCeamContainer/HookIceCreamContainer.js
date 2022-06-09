import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "./redux/iceCream/IceCreamActions";

const HookIceCreamContainer = () => {
	const NumOfIceCream = useSelector((state) => state.IceCream.NumOfIceCream);
	const dispatch = useDispatch();
	return (
		<div>
			<h3>Num Of IceCream ={NumOfIceCream}</h3>
			<button onClick={() => dispatch(buyIceCream())}>buy IceCream :)</button>
		</div>
	);
};

export default HookIceCreamContainer;
