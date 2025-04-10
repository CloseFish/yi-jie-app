// App.tsx
import React, { useState } from 'react';
import MyHomePage from './pages/MyHomePage';
import DevicePage from './pages/DevicePage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';

const App: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<'myhome' | 'devices' | 'login'>('myhome');

	return (
		<div className="min-h-screen bg-[#f0f5f0] text-gray-800">
			<div className="w-[1440px] mx-auto min-h-[1024px] p-6">
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
				<div className="flex">
					{currentPage !== 'login' && <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />}
					<main className="flex-1 p-6">
						{currentPage === 'myhome' && <MyHomePage />}
						{currentPage === 'devices' && <DevicePage />}
						{currentPage === 'login' && <LoginPage />}
					</main>
				</div>
			</div>
		</div>
	);
};

export default App;