import 'antd/dist/antd.css';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path='/' element={<Home/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
