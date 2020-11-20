import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Home from './Routes/Home.jsx';
import Drawer from './Components/Drawer';

function App() {
	useEffect(() => {
		// axios
		//   .get(
		//     "https://b2b.antey.com.ua/index.php?r=api/GetJSON&key=741684b81242d7cc2c682bc4f53760c7403b923124c58cbaeae12af7706b396d"
		//   )
		//   .then((response) => {
		//     console.log(response);
		//   })
		//   .catch((error) => {
		//     console.log(error);
		//   });

		fetch(
			'https://b2b.antey.com.ua/index.php?r=api/GetJSON&key=741684b81242d7cc2c682bc4f53760c7403b923124c58cbaeae12af7706b396de'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			});
	}, []);

	return (
		<div className="App">
			<div>
				<Drawer />
			</div>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route
					render={() => (
						<h1
							style={{
								color: 'red',
								textAlign: 'center',
								fontSize: '60px',
							}}
						>
							404 error
						</h1>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
