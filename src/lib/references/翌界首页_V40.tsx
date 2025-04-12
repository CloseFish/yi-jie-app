// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React, { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
const App: React.FC = () => {
	const [greeting, setGreeting] = useState<string>("");
	useEffect(() => {
		updateGreeting();
	}, []);
	const updateGreeting = () => {
		const hour = new Date().getHours();
		if (hour >= 5 && hour < 12) {
			setGreeting("早上好，欢迎使用翌界！");
		} else if (hour >= 12 && hour < 18) {
			setGreeting("下午好，欢迎使用翌界！");
		} else {
			setGreeting("晚上好，欢迎使用翌界！");
		}
	};
	return (
		<div className="bg-gradient-to-tr from-blue-100 via-white to-blue-100 min-h-screen p-6">
			<div className="flex h-screen relative">
				{/* 左侧导航栏 */}
				<div className="fixed left-6 top-1/2 -translate-y-1/2 w-[100px] bg-white shadow-lg flex flex-col items-center py-8 rounded-2xl space-y-6">
					<div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
						<span className="text-white text-4xl font-bold">翌</span>
					</div>
					<div className="relative">
						<Popover>
							<PopoverTrigger>
								<Avatar className="w-16 h-16 cursor-pointer">
									<img
										src="https://ai-public.mastergo.com/ai/img_res/af5dcdcab53701f2b44bcba3d645f12d.jpg"
										alt="用户头像"
									/>
								</Avatar>
							</PopoverTrigger>
							<PopoverContent className="w-48 p-2">
								<div className="space-y-2">
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-user text-gray-600"></i>
										用户信息
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-palette text-gray-600"></i>
										界面主题
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-language text-gray-600"></i>
										语言选择
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-comment-dots text-gray-600"></i>
										用户反馈
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-sign-out-alt text-gray-600"></i>
										退出登录
									</Button>
								</div>
							</PopoverContent>
						</Popover>
					</div>
					<div className="flex-1 flex flex-col gap-3">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="!rounded-button hover:bg-blue-50 w-16 h-16"
									>
										<i className="fas fa-plus text-gray-600 text-3xl"></i>
									</Button>
								</TooltipTrigger>
								<TooltipContent side="right" className="text-lg">
									添加新会话
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="!rounded-button hover:bg-blue-50 w-16 h-16"
									>
										<i className="fas fa-history text-gray-600 text-3xl"></i>
									</Button>
								</TooltipTrigger>
								<TooltipContent side="right" className="text-lg">
									历史记录
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div className="mt-auto">
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="!rounded-button hover:bg-blue-50 w-20 h-20"
								>
									<i className="fas fa-download text-gray-600 text-3xl"></i>
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-48 p-2">
								<div className="space-y-2">
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-desktop text-gray-600"></i>
										下载桌面端
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-puzzle-piece text-gray-600"></i>
										添加浏览器插件
									</Button>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</div>
				{/* 主体内容区 */}
				<div className="flex-1 flex flex-col pl-20 h-screen">
					<div className="text-center mb-12 mt-20">
						<h1
							className="text-[100px] font-bold mb-6 bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent"
							style={{
								fontFamily: "'幼圆', sans-serif",
								textShadow: '0 2px 4px rgba(0,0,0,0.1)',
								letterSpacing: '4px'
							}}
						>
							翌 界
						</h1>
						<p className="text-gray-600 mb-12 text-3xl">{greeting}</p>
						<div className="flex flex-col items-center justify-center flex-1 pb-6">
							<div className="w-3/4 bg-blue-200/50 rounded-t-3xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-blue-300">
								<div className="flex gap-4 mb-[280px]">
									<Avatar className="w-12 h-12">
										<img
											src="https://ai-public.mastergo.com/ai/img_res/40498f8a432cce37978cd3df80f9db7e.jpg"
											alt="AI头像"
										/>
									</Avatar>
									<div className="bg-white rounded-2xl p-6 flex-1 shadow-sm">
										<p className="text-2xl">
											你好！我是翌界 AI
											助手，请告诉我你想要的界面设计风格，我会为你生成完美的用户界面。
										</p>
									</div>
								</div>
								<div className="relative mb-8">
									<Input
										className="bg-white text-4xl py-10 rounded-xl border-2 border-gray-100"
										placeholder="请输入你想要的界面设计风格..."
									/>
									<Button className="!rounded-xl whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white absolute right-2 top-1/2 -translate-y-1/2 py-8 px-10 text-2xl">
										<i className="fas fa-paper-plane mr-2"></i>
										发送
									</Button>
								</div>
								<div className="flex gap-4 justify-center flex-wrap">
									<Button
										variant="outline"
										className="bg-white/80 hover:bg-blue-50 rounded-xl py-8 px-12 text-2xl"
									>
										现代简约风格
									</Button>
									<Button
										variant="outline"
										className="bg-white/80 hover:bg-blue-50 rounded-xl py-8 px-12 text-2xl"
									>
										科技感设计
									</Button>
									<Button
										variant="outline"
										className="bg-white/80 hover:bg-blue-50 rounded-xl py-8 px-12 text-2xl"
									>
										明亮清新布局
									</Button>
									<Button
										variant="outline"
										className="bg-white/80 hover:bg-blue-50 rounded-xl py-8 px-12 text-2xl"
									>
										深色主题界面
									</Button>
									<Button
										variant="outline"
										className="bg-white/80 hover:bg-blue-50 rounded-xl py-8 px-12 text-2xl"
									>
										色调温和协调
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default App
