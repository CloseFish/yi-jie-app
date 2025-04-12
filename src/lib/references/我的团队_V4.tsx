// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="w-[400px] h-[474px] mx-auto px-6 py-8">
				{/* 顶部标题栏 */}
				<div className="flex items-center justify-between mb-8">
					<h1 className="text-2xl font-semibold">我的团队</h1>
					<Button variant="ghost" className="!rounded-button">
						<i className="fas fa-arrow-left mr-2"></i>
						返回
					</Button>
				</div>
				{/* 添加团队按钮 */}
				<Button
					className="w-full mb-6 bg-blue-500 hover:bg-blue-600 text-white h-12 !rounded-button"
					variant="default"
				>
					<i className="fas fa-plus text-xl mr-3"></i>
					添加团队
				</Button>
				{/* 团队列表 */}
				<Card className="p-6 mb-6 hover:shadow-lg transition-shadow cursor-pointer">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-4">
							<Avatar className="h-12 w-12">
								<AvatarImage src="https://ai-public.mastergo.com/ai/img_res/097cf6967afc4f4f1e996d5a505ad0a4.jpg" />
								<AvatarFallback>UI</AvatarFallback>
							</Avatar>
							<div>
								<h3 className="text-lg font-medium">UUII</h3>
								<div className="flex items-center mt-1 text-sm text-gray-500">
									<span className="mr-4">成员: 8</span>
									<span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">共享 UI 设计</span>
								</div>
							</div>
						</div>
						<i className="fas fa-chevron-right text-gray-400"></i>
					</div>
				</Card>
				{/* 团队协作功能区 */}
				<div className="grid grid-cols-2 gap-6">
					<Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
						<div className="flex flex-col items-center">
							<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
								<i className="fas fa-users text-xl text-blue-600"></i>
							</div>
							<h3 className="text-lg font-medium mb-1">团队协作</h3>
							<p className="text-sm text-gray-500 text-center">
								与团队成员一起协作，提升工作效率
							</p>
						</div>
					</Card>
					<Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
						<div className="flex flex-col items-center">
							<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
								<i className="fas fa-share-alt text-xl text-blue-600"></i>
							</div>
							<h3 className="text-lg font-medium mb-1">共享设计库</h3>
							<p className="text-sm text-gray-500 text-center">
								统一管理团队设计资源，提高设计一致性
							</p>
						</div>
					</Card>
				</div>
				{/* 空状态 */}
				{false && (
					<div className="text-center py-8">
						<img
							src="https://ai-public.mastergo.com/ai/img_res/e0414310ff97a9827286eed915114915.jpg"
							alt="空状态插画"
							className="w-48 h-48 mx-auto mb-4 object-cover"
						/>
						<p className="text-gray-500 mb-4">还没有团队？立即创建或加入一个团队</p>
						<Button variant="default" className="!rounded-button">
							<i className="fas fa-plus mr-2"></i>
							创建团队
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};
export default App
