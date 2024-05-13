import React, { useState } from 'react';
import './App.scss';
import Login from './pages/login/login';
import { userLoggin } from './api';

function App() {
	const [userInfo, setUserInfo] = useState({});
	const getCredentials = (e) => {
		userLoggin(e.email, e.password).then((res) => {
			if (res.status === 'success') {
				setUserInfo(res);
				localStorage.setItem('player', userInfo.player.name);
			}
		});
	};
	return (
		<div className="App">
			<header className="App-header">
				<Login credentials={getCredentials} />
			</header>
		</div>
	);
}

export default App;
