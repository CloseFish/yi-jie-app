import React, { useState } from 'react';
import MyHomePage from './pages/MyHomePage';
import DevicePage from './pages/DevicePage';
import LoginPage from './pages/LoginPage';
import AnalysisPage from './pages/AnalysisPage';
import SmartPage from './pages/SmartPage';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';
import YijieMainPage from './pages/YijieMainPage'; // 引入 YijieMainPage 组件

const App: React.FC = () => {
	// 扩展 currentPage 的状态类型，添加 'yijie'
	const [currentPage, setCurrentPage] = useState<'home' | 'devices' | 'analysis' | 'history' | 'settings' | 'login' | 'smart' | 'yijie'>('home');

	return (
		<div className="min-h-screen bg-[#f0f5f0] text-gray-800">
			<div className="w-[1440px] mx-auto min-h-[1024px] p-6">
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
				<div className="flex">
					{currentPage !== 'login' && currentPage !== 'smart' && currentPage !== 'yijie' && <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />}
					<main className="flex-1 p-6">
						{currentPage === 'home' && <MyHomePage />}
						{currentPage === 'devices' && <DevicePage />}
						{currentPage === 'login' && <LoginPage />}
						{currentPage === 'analysis' && <AnalysisPage />}
						{currentPage === 'smart' && <SmartPage />}
						{currentPage === 'yijie' && <YijieMainPage />}
						{/* 其他页面 */}
					</main>
				</div>
			</div>
		</div>
	);
};

export default App;
