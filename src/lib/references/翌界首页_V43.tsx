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
		<div className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 min-h-screen p-6">
			<div className="flex h-screen relative">
				{/* 左侧导航栏 */}
				<div className="fixed left-6 top-1/2 -translate-y-1/2 w-[100px] bg-gray-800 shadow-lg flex flex-col items-center py-8 rounded-2xl space-y-6">
					<div className="w-16 h-16 rounded-lg flex items-center justify-center">
						<img src="https://image-resource.mastergo.com/155154151567336/155154187224121/d3db486e3da537511f0374d1b9b09afb.png" alt="logo" className="w-full h-full object-contain" />
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
										<i className="fas fa-user text-gray-300"></i>
										用户信息
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-palette text-gray-300"></i>
										界面主题
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-language text-gray-300"></i>
										语言选择
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-comment-dots text-gray-300"></i>
										用户反馈
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-sign-out-alt text-gray-300"></i>
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
										className="!rounded-button hover:bg-gray-700 w-16 h-16"
									>
										<i className="fas fa-plus text-gray-300 text-3xl"></i>
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
										className="!rounded-button hover:bg-gray-700 w-16 h-16"
									>
										<i className="fas fa-history text-gray-300 text-3xl"></i>
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
									className="!rounded-button hover:bg-gray-700 w-20 h-20"
								>
									<i className="fas fa-download text-gray-300 text-3xl"></i>
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-48 p-2">
								<div className="space-y-2">
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-desktop text-gray-300"></i>
										下载桌面端
									</Button>
									<Button
										variant="ghost"
										className="w-full justify-start gap-2"
									>
										<i className="fas fa-puzzle-piece text-gray-300"></i>
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
							className="text-[100px] font-bold mb-6 text-white"
							style={{
								fontFamily: "'幼圆', sans-serif",
								textShadow: '0 2px 4px rgba(0,0,0,0.3)',
								letterSpacing: '4px'
							}}
						>
							翌 界
						</h1>
						<p className="text-gray-300 mb-12 text-3xl">{greeting}</p>
						<div className="flex flex-col items-center justify-center flex-1 pb-6">
							<div className="w-3/4 bg-gray-800/50 rounded-t-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-gray-700">
								<div className="flex gap-4 mb-[280px]">
									<Avatar className="w-12 h-12">
										<img
											src="https://ai-public.mastergo.com/ai/img_res/40498f8a432cce37978cd3df80f9db7e.jpg"
											alt="AI头像"
										/>
									</Avatar>
									<div className="bg-gray-700 rounded-2xl p-6 flex-1 shadow-sm text-white">
										<p className="text-2xl">
											你好！我是翌界 AI
											助手，请告诉我你想要的界面设计风格，我会为你生成完美的用户界面。
										</p>
									</div>
								</div>
								<div className="relative mb-8">
									<Input
										className="bg-gray-700 text-4xl py-10 rounded-xl border-2 border-gray-600 text-white placeholder:text-gray-400"
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
										className="bg-gray-700/80 hover:bg-gray-600 rounded-xl py-8 px-12 text-2xl text-white border-gray-600"
									>
										现代简约风格
									</Button>
									<Button
										variant="outline"
										className="bg-gray-700/80 hover:bg-gray-600 rounded-xl py-8 px-12 text-2xl text-white border-gray-600"
									>
										科技感设计
									</Button>
									<Button
										variant="outline"
										className="bg-gray-700/80 hover:bg-gray-600 rounded-xl py-8 px-12 text-2xl text-white border-gray-600"
									>
										明亮清新布局
									</Button>
									<Button
										variant="outline"
										className="bg-gray-700/80 hover:bg-gray-600 rounded-xl py-8 px-12 text-2xl text-white border-gray-600"
									>
										深色主题界面
									</Button>
									<Button
										variant="outline"
										className="bg-gray-700/80 hover:bg-gray-600 rounded-xl py-8 px-12 text-2xl text-white border-gray-600"
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
