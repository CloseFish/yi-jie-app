// components/shared/Sidebar.tsx
import React from 'react';
import Button from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
	currentPage: 'home' | 'devices' | 'analysis' | 'history' | 'settings' | 'login' | 'smart' | 'yijie';
	setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'devices' | 'analysis' | 'history' | 'settings' | 'login' | 'smart' | 'yijie'>>;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
	const handlePageChange = (page: 'home' | 'devices' | 'analysis' | 'history' | 'settings' | 'login' | 'smart') => {
		// 只有在页面已实现时才切换页面
		if (['home', 'devices', 'analysis'].includes(page)) {
			setCurrentPage(page);
		}
	};

	return (
		<aside className="w-72 bg-[#e0ebe0] p-6">
			<div className="flex flex-col items-center mb-8">
				<Avatar className="w-20 h-20 mb-2">
					<AvatarImage src="https://ai-public.mastergo.com/ai/img_res/2d092d3f29a9675b8b68fe77df639fc2.jpg" />
					<AvatarFallback>用户</AvatarFallback>
				</Avatar>
				<div className="text-center">
					<h3 className="font-medium">不亮头小姐</h3>
					<p className="text-sm text-gray-600">中关村光电机组541号</p>
				</div>
			</div>
			<nav className="space-y-6">
				<Button
					variant="ghost"
					className={`w-full text-left text-lg py-6 ${currentPage === 'home' ? 'text-blue-400' : 'text-gray-600'}`}
					onClick={() => handlePageChange('home')}
				>
					<i className="fas fa-home mr-3 text-lg"></i>
					我的家
				</Button>
				<Button
					variant="ghost"
					className={`w-full text-left text-lg py-4 ${currentPage === 'devices' ? 'text-blue-400' : 'text-gray-600'}`}
					onClick={() => handlePageChange('devices')}
				>
					<i className="fas fa-database mr-3 text-lg"></i>
					设备
				</Button>
				<Button
					variant="ghost"
					className={`w-full text-left text-lg py-4 ${currentPage === 'analysis' ? 'text-blue-400' : 'text-gray-600'}`}
					onClick={() => setCurrentPage('analysis')}
				>
					<i className="fas fa-chart-line mr-3 text-lg"></i>
					智能分析
				</Button>
				<Button
					variant="ghost"
					className={`w-full text-left text-lg py-4 ${currentPage === 'history' ? 'text-blue-400' : 'text-gray-600'}`}
					onClick={() => setCurrentPage('history')}
				>
					<i className="fas fa-history mr-3 text-lg"></i>
					历史数据
				</Button>
				<Button
					variant="ghost"
					className={`w-full text-left text-lg py-4 ${currentPage === 'settings' ? 'text-blue-400' : 'text-gray-600'}`}
					onClick={() => setCurrentPage('settings')}
				>
					<i className="fas fa-cog mr-3 text-lg"></i>
					设置
				</Button>
			</nav>
		</aside>
	);
};

export default Sidebar;