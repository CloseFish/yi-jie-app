// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const App: React.FC = () => {
	const [selectedPage, setSelectedPage] = useState("页面1");
	const [showCodePreview, setShowCodePreview] = useState(false);
	return (
		<div className="flex min-h-screen bg-gray-50">
			{/* 左侧导航栏 */}
			<div className="min-w-[12rem] w-[15%] max-w-[15rem] bg-gradient-to-b from-blue-100 to-white border-r border-gray-200 flex flex-col">
				<div className="p-4">
					<Button className="w-full !rounded-button whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white text-lg py-6">
						<i className="fas fa-plus mr-2 text-lg"></i>
						新页面
					</Button>
				</div>
				<ScrollArea className="flex-1">
					<div className="space-y-1 p-2">
						{["页面1", "页面2"].map((page) => (
							<div
								key={page}
								className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${selectedPage === page ? "bg-blue-200/20 text-gray-800" : "hover:bg-blue-100/50 text-gray-700"
									}`}
								onClick={() => setSelectedPage(page)}
							>
								<span className="text-lg">{page}</span>
								<div className="flex space-x-3">
									<button className="text-gray-600 hover:text-gray-800">
										<i className="fas fa-copy text-lg"></i>
									</button>
									<button className="text-gray-600 hover:text-gray-800">
										<i className="fas fa-trash text-lg"></i>
									</button>
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</div>
			{/* 中间内容区 */}
			<div className="w-[40%] flex flex-col">
				<div className="h-[3.5rem] min-h-[3.5rem] border-b border-gray-200 flex items-center justify-between px-4 bg-gray-50">
					<div className="flex items-center">
						<img src="https://image-resource.mastergo.com/155154151567336/155154187224121/08a8ee5ab0c302e89f887bea1d75806f.png"
							alt="Logo"
							className="h-8 w-8 rounded-full" />
						<span className="ml-2 font-medium text-gray-900">翌界AI助手</span>
					</div>
					<div className="flex items-center space-x-4">
						<button className="text-gray-500 hover:text-gray-700">
							<i className="fas fa-cog"></i>
						</button>
						<button className="text-gray-500 hover:text-gray-700">
							<i className="fas fa-moon"></i>
						</button>
						<Avatar className="h-8 w-8">
							<img src="https://ai-public.mastergo.com/ai/img_res/bfa8ee8b802185688945d4686aa43534.jpg"
								alt="用户头像" />
						</Avatar>
					</div>
				</div>
				<div className="flex-1 p-6">
					<Card className="h-full bg-white border-gray-200">
						<div className="h-full flex flex-col">
							<div className="flex-1 p-4">
								{/* 主要内容区域 */}
							</div>
							<div className="border-t border-gray-200 p-6 overflow-x-auto">
								<div className="flex items-center justify-between min-w-[800px]">
									<div className="flex items-center space-x-2">
										<Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap px-2 bg-white border-gray-200 text-gray-700 hover:bg-gray-100">
											<i className="fas fa-chevron-left"></i>
										</Button>
										{["V1", "V2", "V3"].map((version) => (
											<Button
												key={version}
												variant="outline"
												size="lg"
												className="!rounded-button whitespace-nowrap text-base px-4 bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
											>
												{version}
											</Button>
										))}
										<Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap px-2 bg-white border-gray-200 text-gray-700 hover:bg-gray-100">
											<i className="fas fa-chevron-right"></i>
										</Button>
									</div>
									<Button size="lg" className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-4 sm:px-6 md:px-8 py-4 md:py-6">
										插入到画布
									</Button>
									<div className="flex items-center space-x-6">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="outline" size="lg" className="!rounded-button whitespace-nowrap text-base px-4 bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
													<i className="fab fa-html5 mr-2"></i>
													HTML
													<i className="fas fa-chevron-down ml-2 text-sm"></i>
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end" className="w-48 bg-white border-gray-200">
												<DropdownMenuItem className="cursor-pointer py-3 hover:bg-gray-50 focus:bg-gray-50">
													<i className="fab fa-html5 mr-3 text-lg text-gray-700"></i>
													<span className="text-lg text-gray-700">HTML</span>
												</DropdownMenuItem>
												<DropdownMenuItem className="cursor-pointer py-3 hover:bg-gray-50 focus:bg-gray-50">
													<i className="fab fa-vuejs mr-3 text-lg text-gray-700"></i>
													<span className="text-lg text-gray-700">Vue</span>
												</DropdownMenuItem>
												<DropdownMenuItem className="cursor-pointer py-3 hover:bg-gray-50 focus:bg-gray-50">
													<i className="fab fa-react mr-3 text-lg text-gray-700"></i>
													<span className="text-lg text-gray-700">React</span>
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
										<div className="relative group">
											<Switch
												checked={showCodePreview}
												onCheckedChange={setShowCodePreview}
												className="scale-150 data-[state=checked]:bg-blue-600"
											/>
											<span className="absolute left-1/2 -translate-x-1/2 -top-10 bg-gray-700 text-gray-100 px-4 py-2 rounded text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
												代码预览
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
			{/* 右侧代码区 */}
			<div className="w-[40%] border-l border-gray-200 flex flex-col bg-gray-50">
				<ScrollArea className="flex-1 p-4">
					<Card className="h-full bg-white border-gray-200">
						<div className="p-4">
							<pre className="text-gray-100 font-mono text-sm">
								{`function bubbleSort(arr) {
const len = arr.length;
for (let i = 0; i < len; i++) {
for (let j = 0; j < len - 1 - i; j++) {
if (arr[j] > arr[j + 1]) {
[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}
}
}
return arr;
}
// 示例使用
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));`}
							</pre>
						</div>
					</Card>
				</ScrollArea>
				<div className="border-t border-gray-200 p-4 pb-2 -mt-44">
					<div className="flex space-x-2">
						<Button variant="outline" size="lg" className="!rounded-button whitespace-nowrap bg-white border-gray-200 text-gray-700 hover:bg-gray-100">
							<i className="fas fa-copy mr-2"></i>
							复制代码
						</Button>
						<Button variant="outline" size="lg" className="!rounded-button whitespace-nowrap bg-white border-gray-200 text-gray-700 hover:bg-gray-100">
							<i className="fas fa-download mr-2"></i>
							下载
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default App
