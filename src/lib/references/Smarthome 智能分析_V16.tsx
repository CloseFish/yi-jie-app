// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from 'react';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const App: React.FC = () => {
	const chartRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (chartRef.current) {
			const myChart = echarts.init(chartRef.current);
			const option = {
				animation: false,
				tooltip: {
					trigger: 'axis'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: ['一', '二', '三', '四', '五', '六', '日'],
					axisLine: {
						lineStyle: {
							color: '#4a5568'
						}
					},
					axisPointer: {
						value: 6,
						status: true,
						lineStyle: {
							color: '#3A7233',
							width: 3
						},
						handle: {
							show: true,
							color: '#3A7233'
						}
					}
				},
				yAxis: {
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#4a5568'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#2d3748'
						}
					}
				},
				series: [
					{
						name: '卧室',
						type: 'line',
						data: [150, 450, 500, 550, 400, 450, 350],
						smooth: true,
						lineStyle: {
							color: '#4DABF7'
						}
					},
					{
						name: '工作室',
						type: 'line',
						data: [100, 400, 420, 450, 470, 420, 480],
						smooth: true,
						lineStyle: {
							color: '#FFA94D'
						}
					},
					{
						name: '书房',
						type: 'line',
						data: [50, 300, 320, 350, 340, 320, 300],
						smooth: true,
						lineStyle: {
							color: '#FF6B6B'
						}
					},
					{
						name: '厨房',
						type: 'line',
						data: [20, 150, 200, 250, 200, 180, 150],
						smooth: true,
						lineStyle: {
							color: '#CC5DE8'
						}
					}
				]
			};
			myChart.setOption(option);
		}
	}, []);
	return (
		<div className="min-h-screen bg-slate-900 text-white">
			<div className="max-w-[1440px] mx-auto">
				{/* 顶部导航 */}
				<header className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#F0F5F0] text-[#1F2937]">
					<div className="flex items-center gap-4">
						<h1 className="text-2xl font-bold">SmartHome</h1>
						<Button variant="ghost" size="icon" className="text-[#1F2937]">
							<i className="fas fa-bars"></i>
						</Button>
					</div>
					<div className="flex items-center">
						<div className="flex gap-1">
							<Button variant="ghost" size="icon" className="text-[#1F2937] w-8 h-8 p-0">
								<i className="fas fa-question-circle"></i>
							</Button>
							<Button variant="ghost" size="icon" className="text-[#1F2937] w-8 h-8 p-0">
								<i className="fas fa-envelope"></i>
							</Button>
							<Button variant="ghost" size="icon" className="text-[#1F2937] w-8 h-8 p-0">
								<i className="fas fa-bell"></i>
							</Button>
						</div>
					</div>
				</header>
				<div className="flex">
					{/* 左侧导航 */}
					<aside className="w-64 min-h-[calc(100vh-73px)] p-4 bg-[#E0EBE0]">
						<div className="flex items-center gap-4 mb-12">
							<Avatar className="w-16 h-16">
								<AvatarImage src="https://ai-public.mastergo.com/ai/img_res/943d290ecb288a3f94ecb7a918faf366.jpg" />
							</Avatar>
							<div>
								<div className="font-medium text-lg">王小智</div>
								<div className="text-base text-slate-600">中关村智能家居 501 号</div>
							</div>
						</div>
						<nav className="space-y-6 text-[#1F2937]">
							<Button variant="ghost" className="w-full justify-start gap-3 text-lg py-4 text-[#1F2937]">
								<i className="fas fa-home text-xl"></i>
								<span>我的家</span>
							</Button>
							<Button variant="ghost" className="w-full justify-start gap-3 text-lg py-4 text-[#1F2937]">
								<i className="fas fa-cog text-xl"></i>
								<span>设备</span>
							</Button>
							<Button variant="secondary" className="w-full justify-start gap-3 text-lg py-4 text-[#1F2937]">
								<i className="fas fa-chart-line text-xl"></i>
								<span>智能分析</span>
							</Button>
							<Button variant="ghost" className="w-full justify-start gap-3 text-lg py-4 text-[#1F2937]">
								<i className="fas fa-percentage text-xl"></i>
								<span>使用频率</span>
							</Button>
							<Button variant="ghost" className="w-full justify-start gap-3 text-lg py-4 text-[#1F2937]">
								<i className="fas fa-database text-xl"></i>
								<span>数据</span>
							</Button>
							<Button variant="ghost" className="w-full justify-start gap-3 text-lg py-4 text-[#1F2937]">
								<i className="fas fa-history text-xl"></i>
								<span>历史数据</span>
							</Button>
							<Button variant="ghost" className="w-full justify-start gap-3 text-lg py-4 text-[#1F2937]">
								<i className="fas fa-cog text-xl"></i>
								<span>设置</span>
							</Button>
						</nav>
					</aside>
					{/* 主要内容区域 */}
					<main className="flex-1 p-6 bg-[#F0F5F0]">
						<div className="mb-8">
							<h2 className="text-2xl font-bold mb-6 text-[#1F2937]">智能分析</h2>
							<Card className="bg-[#C2DBC2] p-6 border-none">
								<div className="flex items-center justify-between mb-6">
									<h3 className="text-xl font-semibold">能源消耗</h3>
									<Select defaultValue="thisMonth">
										<SelectTrigger className="w-32 bg-[#E0EBE0] text-[#1F2937]">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="thisMonth">这个月</SelectItem>
											<SelectItem value="lastMonth">上个月</SelectItem>
											<SelectItem value="lastThreeMonths">近三个月</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="grid grid-cols-4 gap-4 mb-6">
									<div className="relative">
										<div className="w-24 h-24 mx-auto">
											<div className="absolute inset-0 flex items-center justify-center">
												<span className="text-xl font-bold">12%</span>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4DABF7" strokeWidth="4" strokeDasharray={`${12}, 100`} />
											</svg>
										</div>
										<div className="text-sm text-slate-600 text-center mt-2">卧室</div>
									</div>
									<div className="relative">
										<div className="w-24 h-24 mx-auto">
											<div className="absolute inset-0 flex items-center justify-center">
												<span className="text-xl font-bold">16%</span>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FFA94D" strokeWidth="4" strokeDasharray={`${16}, 100`} />
											</svg>
										</div>
										<div className="text-sm text-slate-600 text-center mt-2">工作室</div>
									</div>
									<div className="relative">
										<div className="w-24 h-24 mx-auto">
											<div className="absolute inset-0 flex items-center justify-center">
												<span className="text-xl font-bold">32%</span>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#FF6B6B" strokeWidth="4" strokeDasharray={`${32}, 100`} />
											</svg>
										</div>
										<div className="text-sm text-slate-600 text-center mt-2">书房</div>
									</div>
									<div className="relative">
										<div className="w-24 h-24 mx-auto">
											<div className="absolute inset-0 flex items-center justify-center">
												<span className="text-xl font-bold">18%</span>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#CC5DE8" strokeWidth="4" strokeDasharray={`${18}, 100`} />
											</svg>
										</div>
										<div className="text-sm text-slate-600 text-center mt-2">厨房</div>
									</div>
								</div>
								<div ref={chartRef} style={{ height: '400px' }}></div>
							</Card>
							<div className="grid grid-cols-4 gap-4 mt-6">
								<Card className="p-4 bg-[#C2DBC2] border-none">
									<div className="flex items-center justify-between mb-4">
										<h3>摄像头</h3>
										<Select defaultValue="thisMonth">
											<SelectTrigger className="w-32 bg-[#E0EBE0] text-[#1F2937]">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="thisMonth">这个月</SelectItem>
												<SelectItem value="lastMonth">上个月</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="flex items-center gap-4">
										<div className="relative w-24 h-24">
											<div className="absolute inset-0 flex items-center justify-center">
												<i className="fas fa-video text-[#3A7233] text-2xl"></i>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3A7233" strokeWidth="4" strokeDasharray={`${75}, 100`} />
											</svg>
										</div>
										<div className="flex-1">
											<div className="text-lg font-semibold">57:03:24</div>
											<div className="text-sm text-slate-600">320 Wh (-24%)</div>
										</div>
									</div>
								</Card>
								<Card className="p-4 bg-[#C2DBC2] border-none">
									<div className="flex items-center justify-between mb-4">
										<h3>水量</h3>
										<Select defaultValue="thisMonth">
											<SelectTrigger className="w-32 bg-[#E0EBE0] text-[#1F2937]">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="thisMonth">这个月</SelectItem>
												<SelectItem value="lastMonth">上个月</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="flex items-center gap-4">
										<div className="relative w-24 h-24">
											<div className="absolute inset-0 flex items-center justify-center">
												<i className="fas fa-tint text-[#3A7233] text-2xl"></i>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3A7233" strokeWidth="4" strokeDasharray={`${65}, 100`} />
											</svg>
										</div>
										<div className="flex-1">
											<div className="text-lg font-semibold">57:03:24</div>
											<div className="text-sm text-slate-600">320 Wh (-24%)</div>
										</div>
									</div>
								</Card>
								<Card className="p-4 bg-[#C2DBC2] border-none">
									<div className="flex items-center justify-between mb-4">
										<h3>大灯</h3>
										<Select defaultValue="thisMonth">
											<SelectTrigger className="w-32 bg-[#E0EBE0] text-[#1F2937]">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="thisMonth">这个月</SelectItem>
												<SelectItem value="lastMonth">上个月</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="flex items-center gap-4">
										<div className="relative w-24 h-24">
											<div className="absolute inset-0 flex items-center justify-center">
												<i className="fas fa-lightbulb text-[#3A7233] text-2xl"></i>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3A7233" strokeWidth="4" strokeDasharray={`${85}, 100`} />
											</svg>
										</div>
										<div className="flex-1">
											<div className="text-lg font-semibold">57:03:24</div>
											<div className="text-sm text-slate-600">320 Wh (-24%)</div>
										</div>
									</div>
								</Card>
								<Card className="p-4 bg-[#C2DBC2] border-none">
									<div className="flex items-center justify-between mb-4">
										<h3>插座</h3>
										<Select defaultValue="thisMonth">
											<SelectTrigger className="w-32 bg-[#E0EBE0] text-[#1F2937]">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="thisMonth">这个月</SelectItem>
												<SelectItem value="lastMonth">上个月</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="flex items-center gap-4">
										<div className="relative w-24 h-24">
											<div className="absolute inset-0 flex items-center justify-center">
												<i className="fas fa-plug text-[#3A7233] text-2xl"></i>
											</div>
											<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E9ECEF" strokeWidth="4" />
												<path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3A7233" strokeWidth="4" strokeDasharray={`${70}, 100`} />
											</svg>
										</div>
										<div className="flex-1">
											<div className="text-lg font-semibold">57:03:24</div>
											<div className="text-sm text-slate-600">420 Kwh (-24%)</div>
										</div>
									</div>
								</Card>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};
export default App
