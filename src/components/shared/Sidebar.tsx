import React from 'react';
import Button from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Sidebar: React.FC = () => {
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
				<Button variant="ghost" className="w-full justify-start text-blue-400 text-lg py-6">
					<i className="fas fa-home mr-3 text-lg"></i>
					我的家
				</Button>
				<Button variant="ghost" className="w-full justify-start text-gray-600 text-lg py-4">
					<i className="fas fa-cog mr-3 text-lg"></i>
					设备
				</Button>
				<Button variant="ghost" className="w-full justify-start text-gray-600 text-lg py-4">
					<i className="fas fa-chart-line mr-3 text-lg"></i>
					智能分析
				</Button>
				<Button variant="ghost" className="w-full justify-start text-gray-600 text-lg py-4">
					<i className="fas fa-database mr-3 text-lg"></i>
					使用数据
				</Button>
				<Button variant="ghost" className="w-full justify-start text-gray-600 text-lg py-4">
					<i className="fas fa-history mr-3 text-lg"></i>
					历史数据
				</Button>
				<Button variant="ghost" className="w-full justify-start text-gray-600 text-lg py-4">
					<i className="fas fa-cog mr-3 text-lg"></i>
					设置
				</Button>
			</nav>
		</aside>
	);
};

export default Sidebar;