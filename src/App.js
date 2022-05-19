import "./App.css";
import { Provider } from "react-redux";
import store from "./component/redux/Store";

import HookCakeContainer from "./component/HookCakeContainer";
import HookIceCreamContainer from "./component/HookIceCreamContainer";
import CakeWithPeyLoad from "./component/CakeWithPeyLoad";
import UserContainer from "./component/UserContainer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <HookCakeContainer />
				<HookIceCreamContainer />
				<CakeWithPeyLoad /> */}
				<UserContainer/>
			</div>
		</Provider>
	);
}

export default App;
