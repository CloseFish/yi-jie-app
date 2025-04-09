// App.tsx
import React, { useState } from 'react';
import MyHomePage from './pages/MyHomePage';
import DevicePage from './pages/DevicePage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
	const [currentPage, setCurrentPage] = useState('myhome');

	return (
		<div>
			<header>
				<nav>
					<button onClick={() => setCurrentPage('myhome')}>我的家</button>
					<button onClick={() => setCurrentPage('devices')}>设备</button>
					<button onClick={() => setCurrentPage('login')}>登录</button>
				</nav>
			</header>
			<main>
				{currentPage === 'myhome' && <MyHomePage />}
				{currentPage === 'devices' && <DevicePage />}
				{currentPage === 'login' && <LoginPage />}
			</main>
		</div>
	);
};

export default App;