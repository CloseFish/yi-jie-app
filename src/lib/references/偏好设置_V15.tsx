// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const App: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50">
			<Card className="w-[400px] h-[474px] p-6 space-y-4">
				<div className="flex items-center h-12 border-b border-gray-100">
					<Button variant="ghost" className="!rounded-button p-2 mr-2">
						<i className="fas fa-arrow-left text-gray-600 text-base"></i>
					</Button>
					<h1 className="text-lg font-medium">偏好设置</h1>
				</div>
				<div className="space-y-4">
					<div className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-md border-b border-gray-100">
						<div className="flex items-center space-x-2">
							<div className="w-7 h-7 flex items-center justify-center">
								<i className="fas fa-moon text-blue-600 text-lg"></i>
							</div>
							<span className="text-gray-700 text-base">深色模式</span>
						</div>
						<Switch />
					</div>
					<div className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-md border-b border-gray-100">
						<div className="flex items-center space-x-2">
							<div className="w-7 h-7 flex items-center justify-center">
								<i className="fas fa-language text-blue-600 text-lg"></i>
							</div>
							<span className="text-gray-700 text-base">语言选择</span>
						</div>
						<i className="fas fa-chevron-right text-gray-400 text-base"></i>
					</div>
					<div className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-md border-b border-gray-100">
						<div className="flex items-center space-x-2">
							<div className="w-7 h-7 flex items-center justify-center">
								<i className="fas fa-text-height text-blue-600 text-lg"></i>
							</div>
							<span className="text-gray-700 text-base">字体大小</span>
						</div>
						<i className="fas fa-chevron-right text-gray-400 text-base"></i>
					</div>
					<div className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-md border-b border-gray-100">
						<div className="flex items-center space-x-2">
							<div className="w-7 h-7 flex items-center justify-center">
								<i className="fas fa-heart text-blue-600 text-lg"></i>
							</div>
							<span className="text-gray-700 text-base">关怀模式</span>
						</div>
						<Switch />
					</div>
				</div>
			</Card>
		</div>
	);
};
export default App
