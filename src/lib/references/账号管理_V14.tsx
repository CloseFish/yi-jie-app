// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from "react";
import {
	Card,
	CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-white flex justify-center items-center">
			<div className="w-[400px] h-[474px] bg-black rounded-3xl shadow-md">
				<div className="p-4 border-b border-gray-600">
					<div className="flex items-center justify-between relative">
					{/*	<i className="fa-solid fa-arrow-left text-gray-400 cursor-pointer text-white"></i>	*/}
						<i className="fa-solid fa-arrow-left text-gray-400 cursor-pointer"></i>
						<span className="font-bold text-lg absolute left-1/2 -translate-x-1/2 text-white">账号管理</span>
						<div className="w-6"></div>
					</div>
				</div>
				<div className="space-y-1 p-3 text-white">
					{/* 用户信息卡片 */}
					<Card>
						<CardContent className="p-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-4">
									<Avatar className="h-14 w-14">
										<AvatarImage src="https://ai-public.mastergo.com/ai/img_res/73c5291e770d5a635c26209704e907d7.jpg" />
										<AvatarFallback>ZX</AvatarFallback>
									</Avatar>
									<div>
										<div className="flex items-center space-x-2">
											<h2 className="text-lg font-medium text-white">张晓明</h2>
											<Badge className="bg-amber-500">VIP</Badge>
										</div>
										<p className="text-sm text-white">ID: 10086198</p>
									</div>
								</div>
								<div className="flex items-center space-x-2 text-white">
									<span className="text-sm text-white">切换账号</span>
									<i className="fa-solid fa-chevron-right text-white"></i>
								</div>
							</div>
						</CardContent>
					</Card>
					{/* 基本信息卡片 */}
					<Card>
						<CardContent className="p-0">
							<div className="divide-y divide-gray-600">
								<div className="flex items-center justify-between p-3">
									<div className="flex items-center space-x-3">
										<i className="fa-regular fa-envelope text-blue-600"></i>
										<span className="text-white">邮箱地址</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-white text-sm">zhang.xiaoming@example.com</span>
										<i className="fa-solid fa-chevron-right text-white"></i>
									</div>
								</div>
								<div className="flex items-center justify-between p-3">
									<div className="flex items-center space-x-3">
										<i className="fa-solid fa-mobile-screen text-blue-600"></i>
										<span className="text-white">手机号码</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-white text-sm">138****6666</span>
										<i className="fa-solid fa-chevron-right text-white"></i>
									</div>
								</div>
								<div className="flex items-center justify-between p-3">
									<div className="flex items-center space-x-3">
										<i className="fa-solid fa-lock text-blue-600"></i>
										<span className="text-white">修改密码</span>
									</div>
									<i className="fa-solid fa-chevron-right text-white"></i>
								</div>
							</div>
						</CardContent>
					</Card>
					{/* 账号关联卡片 */}
					<Card>
						<CardContent className="p-0">
							<div className="flex items-center justify-between p-3">
								<div className="flex items-center space-x-3">
									<i className="fa-solid fa-link text-blue-600"></i>
									<span className="text-white">绑定第三方账号</span>
								</div>
								<div className="flex items-center space-x-3">
									<i className="fa-brands fa-weixin text-green-600"></i>
									<i className="fa-brands fa-qq text-blue-500"></i>
									<i className="fa-solid fa-chevron-right text-white"></i>
								</div>
							</div>
						</CardContent>
					</Card>
					{/* 账号状态卡片 */}
					<Card>
						<CardContent className="p-0">
							<div className="divide-y divide-gray-600">
								<div className="flex items-center justify-between p-3">
									<div className="flex items-center space-x-3">
										<i className="fa-solid fa-shield text-blue-600"></i>
										<span className="text-white">账户状态</span>
									</div>
									<div className="flex items-center space-x-2">
										<Badge className="bg-green-500">正常</Badge>
										<i className="fa-solid fa-chevron-right text-white"></i>
									</div>
								</div>
								<div className="flex items-center justify-between p-3">
									<div className="flex items-center space-x-3">
										<i className="fa-regular fa-clock text-blue-600"></i>
										<span>注册时间</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-gray-500 text-sm">2023 年 6 月 15 日</span>
										<i className="fa-solid fa-chevron-right text-white"></i>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};
export default App
