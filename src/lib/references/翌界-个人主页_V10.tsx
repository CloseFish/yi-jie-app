// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function App() {
	const [user] = useState({
		name: "张先生",
		isVip: true,
		avatar: "https://ai-public.mastergo.com/ai/img_res/24bbb3c1be75048ada0c316038239102.jpg"
	});

	const menuItems = [
		{ icon: "fa-user-circle", text: "账号管理" },
		{ icon: "fa-chart-line", text: "数据记录" },
		{ icon: "fa-users", text: "我的团队" },
		{ icon: "fa-cog", text: "偏好设置" }
	];

	return (
		<div className="min-h-[1024px] bg-gray-950 w-full flex justify-center items-start pt-10">
			<Card className="w-[400px] p-6 relative rounded-3xl bg-gray-900 border-gray-800">
				<div className="flex items-center mb-8">
					<div className="relative">
						<Avatar className="w-16 h-16 rounded-2xl">
							<AvatarImage src={user.avatar} alt="用户头像" className="rounded-2xl" />
							<AvatarFallback className="rounded-2xl bg-gray-800">Avatar</AvatarFallback>
						</Avatar>
						<div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center shadow-md border border-gray-700">
							<i className="fas fa-crown text-yellow-500 text-sm"></i>
						</div>
					</div>

					<div className="flex-1 ml-4">
						<div className="flex items-center">
							<span className="text-xl font-medium text-gray-100">{user.name}</span>
							{user.isVip && (
								<span
									className="text-white text-sm px-2 py-0.5 rounded-full ml-2"
									style={{
										background: "linear-gradient(90deg, #FFB800 0%, #FF8A00 100%)"
									}}
								>
									VIP
								</span>
							)}
						</div>
						<div className="text-blue-400 text-base mt-1">续费会员享专属权益</div>
					</div>
					<Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-full !rounded-button whitespace-nowrap">
						<i className="fas fa-chevron-right"></i>
					</Button>
				</div>

				<div className="space-y-5">
					{menuItems.map((item, index) => (
						<Button
							key={index}
							variant="outline"
							className="menu-item w-full flex items-center justify-between bg-gray-800 rounded-[32px] p-6 border-gray-700 hover:bg-gray-700 shadow-sm transition-all duration-300 !rounded-button whitespace-nowrap"
							onClick={() => { }}
						>
							<div className="flex items-center">
								<i className={`fas ${item.icon} text-blue-400 w-6 h-6 flex items-center justify-center text-xl`}></i>
								<span className="ml-4 text-gray-200 text-lg">{item.text}</span>
							</div>
							<i className="fas fa-chevron-right text-gray-500"></i>
						</Button>
					))}
				</div>

				<Button
					variant="ghost"
					className="menu-item w-full flex items-center justify-center mt-8 py-4 text-blue-400 hover:text-blue-300 hover:bg-gray-800 transition-all duration-300 rounded-2xl !rounded-button whitespace-nowrap"
					onClick={() => { }}
				>
					<i className="fas fa-sign-out-alt mr-2"></i>
					<span className="text-lg">退出登录</span>
				</Button>
			</Card>

			<style jsx global>{`
        .menu-item:hover {
          transform: translateX(4px);
        }
      `}</style>
		</div>
	);
}

