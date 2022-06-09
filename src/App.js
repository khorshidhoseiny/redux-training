import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import UserContainer from "./component/UserContainer/UserContainer"
import PostSaga from "./component/postSaga/PostSaga";

function App() {
	return (
		<Provider store={Store}>
			<div className="App">
				<PostSaga/>
			</div>
		</Provider>
	);
}

export default App;
