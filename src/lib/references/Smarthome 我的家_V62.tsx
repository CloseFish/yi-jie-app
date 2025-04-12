// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from 'react';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const App: React.FC = () => {
	const pieChartRef = useRef<HTMLDivElement>(null);
	const barChartRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleModalClick = () => {
			const modal = document.getElementById('chatModal');
			const overlay = document.getElementById('modalOverlay');
			if (modal) {
				modal.style.transform = 'translateX(0)';
				if (overlay) overlay.style.display = 'block';
			}
		}
		const handleOverlayClick = () => {
			const modal = document.getElementById('chatModal');
			const overlay = document.getElementById('modalOverlay');
			if (modal) {
				modal.style.transform = 'translateX(100%)';
				if (overlay) overlay.style.display = 'none';
			}
		}
		const modal = document.getElementById('chatModal');
		const overlay = document.getElementById('modalOverlay');
		if (overlay) {
			overlay.addEventListener('click', handleOverlayClick);
		}
		return () => {
			if (overlay) {
				overlay.removeEventListener('click', handleOverlayClick);
			}
		}
	}, []);
	useEffect(() => {
		if (pieChartRef.current) {
			const pieChart = echarts.init(pieChartRef.current);
			const pieOption = {
				animation: false,
				series: [{
					type: 'pie',
					radius: ['60%', '85%'],
					data: [
						{ value: 16, name: '餐厅', itemStyle: { color: '#FF6B6B' } },
						{ value: 22, name: '工作室', itemStyle: { color: '#4DABF7' } },
						{ value: 19, name: '卧室', itemStyle: { color: '#FFA94D' } },
						{ value: 31, name: '客厅', itemStyle: { color: '#51CF66' } },
						{ value: 12, name: '厨房', itemStyle: { color: '#CC5DE8' } }
					],
					label: {
						show: true,
						position: 'outside',
						formatter: function (params) {
							const name = params.name;
							const value = params.percent.toFixed(1);
							if (name === '客厅') {
								return '客: ' + value + '%';
							} else if (name === '工作室') {
								return '工: ' + value + '%';
							} else {
								return name + ': ' + value + '%';
							}
						},
						fontSize: 12,
						color: '#666'
					}
				}]
			};
			pieChart.setOption(pieOption);
		}
		if (barChartRef.current) {
			const barChart = echarts.init(barChartRef.current);
			const barOption = {
				animation: false,
				grid: {
					top: '10%',
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: ['周一', '周二', '周三', '周四', '周五'],
					axisLine: { show: false },
					axisTick: { show: false },
					axisLabel: { color: '#2d5a27' }
				},
				yAxis: {
					type: 'value',
					show: false
				},
				series: [{
					data: [320, 280, 250, 220, 190],
					type: 'bar',
					barWidth: '40%',
					itemStyle: {
						color: '#3a7233'
					}
				}]
			};
			barChart.setOption(barOption);
		}
	}, []);
	const cameraImage = 'https://ai-public.mastergo.com/ai/img_res/659958a136a4b6404f1c00fe3d6406fa.jpg';
	return (
		<div className="min-h-screen bg-[#f0f5f0] text-gray-800">
			<div className="w-[1440px] mx-auto min-h-[1024px] p-6">
				{/* Header */}
				<header className="flex items-center justify-between p-4 border-b border-[#c4b7a6]">
					<div className="flex items-center space-x-2">
						<span className="text-xl font-bold">SmartHome</span>
						<i className="fas fa-bars ml-4 text-gray-400"></i>
					</div>
					<div className="flex items-center space-x-4">
						<i className="fas fa-question-circle text-gray-600"></i>
						<i className="fas fa-envelope text-gray-600"></i>
						<i className="fas fa-bell text-gray-600"></i>
					</div>
				</header>
				{/* Main Content */}
				<div className="flex">
					{/* Sidebar */}
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
					{/* Main Content Area */}
					<main className="flex-1 p-6">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl font-medium">我的家</h2>
							<div className="relative">
								<Button
									onClick={() => {
										const modal = document.getElementById('chatModal');
										const overlay = document.getElementById('modalOverlay');
										if (modal) {
											modal.style.display = 'block';
											modal.style.transform = 'translateX(0)';
										}
										if (overlay) overlay.style.display = 'block';
									}}
									className="pl-12 pr-12 py-3 rounded-lg bg-[#F0F5F0] text-base border-2 border-[#3A7233] text-[#3A7233] hover:bg-[#E0EBE0] w-72"
								>
									<i className="fas fa-keyboard absolute left-4 top-1/2 -translate-y-1/2 text-[#3A7233] text-lg"></i>
									<span>输入指令或点击语音</span>
									<i className="fas fa-microphone absolute right-4 top-1/2 -translate-y-1/2 text-[#3A7233] text-lg"></i>
								</Button>
								{/*	<div id="chatModal" className="fixed top-0 right-0 h-screen bg-[#E0EBE0] shadow-xl p-6 w-[480px] block z-50 transition-all duration-300 transform translate-x-full flex flex-col">*/}
								<div id="chatModal" className="fixed top-0 right-0 h-screen bg-[#E0EBE0] shadow-xl p-6 w-[480px] block z-50 transition-all duration-300 transform translate-x-full flex-col">
									<div className="flex justify-between items-center mb-4">
										<h3 className="text-lg font-medium">AI 助手</h3>
										<button onClick={() => {
											const modal = document.getElementById('chatModal');
											const overlay = document.getElementById('modalOverlay');
											if (modal) {
												modal.style.transform = 'translateX(100%)';
											}
											if (overlay) overlay.style.display = 'none';
										}} className="text-gray-500 hover:text-gray-700">
											<i className="fas fa-times"></i>
										</button>
									</div>
									<ScrollArea className="flex-1 pr-4">
										<div className="space-y-4">
											<div className="flex">
												<div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
													<p className="text-[#1F2973]">请问有什么可以帮您？</p>
												</div>
											</div>
											<div className="flex justify-end">
												<div className="bg-[#2D5A27] text-white rounded-lg p-3 max-w-[80%]">
													<p>空调打开26度。</p>
												</div>
											</div>
										</div>
									</ScrollArea>
									<div className="mt-auto border-t border-gray-200 pt-4">
										<div className="flex gap-2">
											<div className="relative flex-1">
												<input
													type="text"
													placeholder="输入消息..."
													className="w-full h-[44px] pl-10 pr-4 rounded-lg bg-white border-none text-sm"
												/>
												<i className="fas fa-keyboard absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
											</div>
											<Button className="bg-[#2D5A27] hover:bg-[#1F4A1F] !rounded-button h-[44px] w-[44px]">
												<i className="fas fa-microphone"></i>
											</Button>
											<Button className="bg-[#2D5A27] hover:bg-[#1F4A1F] !rounded-button h-[44px] w-[44px]">
												<i className="fas fa-paper-plane"></i>
											</Button>
										</div>
									</div>
								</div>
								<div id="modalOverlay" onClick={() => {
									const modal = document.getElementById('chatModal');
									if (modal) modal.style.transform = 'translateX(100%)';
								}} className="fixed inset-0 bg-black bg-opacity-50 hidden z-40"></div>
							</div>
						</div>
						<div className="grid grid-cols-3 gap-6 max-w-full">
							{/* Camera Feed */}
							<div className="col-span-2 bg-[#c2dbc2] rounded-lg overflow-hidden">
								<div className="p-4 border-b border-gray-700 flex justify-between items-center">
									<span>摄像头</span>
									<div className="flex space-x-2">
										<span className="text-blue-400">C1</span>
										<span className="text-gray-400">C2</span>
										<span className="text-gray-400">C3</span>
										<span className="text-gray-400">C4</span>
										<i className="fas fa-ellipsis-v text-gray-400 ml-2"></i>
									</div>
								</div>
								<Swiper
									modules={[Pagination, Autoplay]}
									pagination={{ clickable: true }}
									autoplay={{ delay: 3000 }}
									loop={true}
									className="w-full h-[350px]"
								>
									<SwiperSlide>
										<div className="relative">
											<img src={cameraImage} alt="Camera Feed 1" className="w-full h-[350px] object-cover" />
											<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">
												2024/02/16 09:43AM
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="relative">
											<img src="https://ai-public.mastergo.com/ai/img_res/5b5d06e9c437a03fd0963b4fb22ffd03.jpg" alt="Camera Feed 2" className="w-full h-[350px] object-cover" />
											<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">
												2024/02/16 09:44AM
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="relative">
											<img src="https://ai-public.mastergo.com/ai/img_res/36d83598434f2cad9aa41e7f8b163143.jpg" alt="Camera Feed 3" className="w-full h-[350px] object-cover" />
											<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">
												2024/02/16 09:45AM
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
							{/* Stats */}
							<div className="space-y-6">
								<div className="bg-[#c2dbc2] p-4 rounded-lg">
									<div className="flex justify-between items-center mb-4">
										<span>房间耗电量</span>
										<i className="fas fa-ellipsis-v text-gray-400"></i>
									</div>
									<div className="relative">
										<div ref={pieChartRef} style={{ height: '200px' }}></div>
										<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
											<div className="text-3xl font-bold text-[#2d5a27]">304.5</div>
											<div className="text-sm text-[#3a7233]">总耗电量</div>
										</div>
									</div>
								</div>
								<div className="bg-[#c2dbc2] p-4 rounded-lg">
									<div className="flex justify-between items-center mb-4">
										<span>按日统计</span>
										<i className="fas fa-ellipsis-v text-gray-400"></i>
									</div>
									<div ref={barChartRef} style={{ height: '150px' }}></div>
								</div>
							</div>
						</div>
						{/* Device Stats */}
						<div className="grid grid-cols-5 mt-6">
							<div className="bg-[#c2dbc2] p-4 rounded-l-lg">
								<div className="text-base text-gray-700">电力</div>
								<div className="text-4xl font-bold mt-2">745<span className="text-sm text-gray-700 ml-2">度</span></div>
							</div>
							<div className="bg-[#c2dbc2] p-4">
								<div className="text-base text-gray-700">湿度</div>
								<div className="text-4xl font-bold mt-2">20.0<span className="text-sm text-gray-700 ml-2">相对值</span></div>
							</div>
							<div className="bg-[#c2dbc2] p-4">
								<div className="text-base text-gray-700">室内</div>
								<div className="text-4xl font-bold mt-2">15.3<span className="text-sm text-gray-700 ml-2">温度值</span></div>
							</div>
							<div className="bg-[#c2dbc2] p-4">
								<div className="text-base text-gray-700">水量</div>
								<div className="text-4xl font-bold mt-2">494<span className="text-sm text-gray-700 ml-2">立方米</span></div>
							</div>
							<div className="bg-[#c2dbc2] p-4 rounded-r-lg">
								<div className="text-base text-gray-700">网络</div>
								<div className="text-4xl font-bold mt-2">45.3<span className="text-sm text-gray-700 ml-2">MBPS</span></div>
							</div>
						</div>
						{/* Device Controls */}
						<div className="grid grid-cols-5 gap-2 mt-6">
							<div className="relative">
								<Button variant="ghost" className="!rounded-button w-full bg-[#c2dbc2] p-8" onClick={() => {
									const tvModal = document.getElementById('tvModal');
									const tvOverlay = document.getElementById('tvOverlay');
									if (tvModal) tvModal.style.display = 'block';
									if (tvOverlay) tvOverlay.style.display = 'block';
								}}>
									<div className="flex justify-between items-center w-full">
										<div className="flex items-center">
											<i className="fas fa-tv text-[#2d5a27] mr-4 text-2xl"></i>
											<span className="text-lg">电视</span>
										</div>
										<Switch className="data-[state=checked]:bg-[#2d5a27]" />
									</div>
								</Button>
								<div id="tvModal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E0EBE0] p-6 rounded-lg shadow-xl z-50 hidden w-[360px]">
									<div className="flex justify-between items-center mb-6">
										<span className="text-lg font-medium">电视遥控器</span>
										<Button className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white" onClick={() => {
											const tvModal = document.getElementById('tvModal');
											const tvOverlay = document.getElementById('tvOverlay');
											if (tvModal) tvModal.style.display = 'none';
											if (tvOverlay) tvOverlay.style.display = 'none';
										}}>
											<i className="fas fa-power-off"></i>
										</Button>
									</div>
									<div className="flex flex-col items-center gap-6">
										<div className="flex justify-between w-full mb-4">
											<Button className="h-10 px-6 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 !rounded-button">
												<i className="fas fa-cog text-[#2D5A27] text-xl"></i>
											</Button>
											<Button className="h-10 px-6 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 !rounded-button">
												<i className="fas fa-bars text-[#2D5A27] text-xl"></i>
											</Button>
										</div>
										<div className="relative w-64 h-64">
											<div className="absolute inset-0 rounded-full bg-[#C2DBC2] flex items-center justify-center">
												<Button className="absolute top-4 transform -translate-x-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10" style={{ left: '50%' }}>
													<i className="fas fa-chevron-up text-[#2D5A27] text-xl"></i>
												</Button>
												<Button className="absolute bottom-4 transform -translate-x-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10" style={{ left: '50%' }}>
													<i className="fas fa-chevron-down text-[#2D5A27] text-xl"></i>
												</Button>
												<Button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10">
													<i className="fas fa-chevron-left text-[#2D5A27] text-xl"></i>
												</Button>
												<Button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10">
													<i className="fas fa-chevron-right text-[#2D5A27] text-xl"></i>
												</Button>
												<Button className="w-32 h-32 rounded-full bg-[#E0EBE0] hover:bg-[#E0EBE0]/90 text-[#2D5A27] text-xl font-bold">
													OK
												</Button>
											</div>
										</div>
										<div className="flex justify-center gap-4 w-full">
											<Button className="flex-1 h-12 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90">
												<i className="fas fa-arrow-left text-[#2D5A27] text-xl"></i>
											</Button>
											<Button className="flex-1 h-12 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90">
												<i className="fas fa-home text-[#2D5A27] text-xl"></i>
											</Button>
										</div>
										<div className="w-full space-y-4">
											<div className="w-full h-12 bg-[#C2DBC2] rounded-lg flex items-center px-4">
												<i className="fas fa-volume-up text-[#2D5A27] text-xl mr-4"></i>
												<input
													type="range"
													min="0"
													max="100"
													defaultValue="50"
													className="flex-1 h-2 bg-[#2D5A27]/20 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2D5A27] [&::-webkit-slider-thumb]:cursor-pointer"
												/>
											</div>
											<div className="w-full h-12 bg-[#C2DBC2] rounded-lg flex items-center px-4">
												<i className="fas fa-sun text-[#2D5A27] text-xl mr-4"></i>
												<input
													type="range"
													min="0"
													max="100"
													defaultValue="75"
													className="flex-1 h-2 bg-[#2D5A27]/20 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2D5A27] [&::-webkit-slider-thumb]:cursor-pointer"
												/>
											</div>
										</div>
									</div>
								</div>
								<div id="tvOverlay" className="fixed inset-0 bg-black bg-opacity-50 hidden z-40" onClick={() => {
									const tvModal = document.getElementById('tvModal');
									const tvOverlay = document.getElementById('tvOverlay');
									if (tvModal) tvModal.style.display = 'none';
									if (tvOverlay) tvOverlay.style.display = 'none';
								}}></div>
							</div>
							<div className="relative">
								<Button variant="ghost" className="!rounded-button w-full bg-[#c2dbc2] p-8" onClick={() => {
									const fridgeModal = document.getElementById('fridgeModal');
									const fridgeOverlay = document.getElementById('fridgeOverlay');
									if (fridgeModal) fridgeModal.style.display = 'block';
									if (fridgeOverlay) fridgeOverlay.style.display = 'block';
								}}>
									<div className="flex justify-between items-center w-full">
										<div className="flex items-center">
											<i className="fas fa-box text-[#2d5a27] mr-4 text-2xl"></i>
											<span className="text-lg">冰箱</span>
										</div>
										<Switch className="data-[state=checked]:bg-[#2d5a27]" />
									</div>
								</Button>
								<div id="fridgeModal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E0EBE0] p-6 rounded-lg shadow-xl z-50 hidden w-[360px]">
									<div className="flex justify-between items-center mb-6">
										<span className="text-lg font-medium">冰箱控制面板</span>
										<div className="relative group">
											<Button
												className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white"
												onMouseDown={(e) => {
													const button = e.currentTarget;
													const startTime = new Date().getTime();
													const timer = setTimeout(() => {
														const fridgeModal = document.getElementById('fridgeModal');
														const fridgeOverlay = document.getElementById('fridgeOverlay');
														if (fridgeModal) fridgeModal.style.display = 'none';
														if (fridgeOverlay) fridgeOverlay.style.display = 'none';
													}, 3000);
													button.addEventListener('mouseup', () => {
														const endTime = new Date().getTime();
														if (endTime - startTime < 3000) {
															clearTimeout(timer);
														}
													}, { once: true });
												}}>
												<i className="fas fa-power-off"></i>
											</Button>
											<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm bg-black/75 text-white px-2 py-1 rounded hidden group-hover:block">
												长按3秒关机
											</div>
										</div>
									</div>
									<div className="space-y-8">
										<div className="bg-[#C2DBC2] p-4 rounded-lg">
											<div className="text-center mb-2">冷藏温度</div>
											<div className="flex items-center justify-between">
												<Button
													className="w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													onClick={() => {
														const tempSpan = document.getElementById('coldTemp');
														if (tempSpan) {
															const currentTemp = parseInt(tempSpan.textContent);
															if (currentTemp > 2) {
																tempSpan.textContent = `${currentTemp - 1}°C`;
															}
														}
													}}
												>
													<i className="fas fa-minus text-[#2D5A27] text-xl"></i>
												</Button>
												<span id="coldTemp" className="text-4xl font-bold text-[#2D5A27]">4°C</span>
												<Button
													className="w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													onClick={() => {
														const tempSpan = document.getElementById('coldTemp');
														if (tempSpan) {
															const currentTemp = parseInt(tempSpan.textContent);
															if (currentTemp < 8) {
																tempSpan.textContent = `${currentTemp + 1}°C`;
															}
														}
													}}
												>
													<i className="fas fa-plus text-[#2D5A27] text-xl"></i>
												</Button>
											</div>
										</div>
										<div className="bg-[#C2DBC2] p-4 rounded-lg">
											<div className="text-center mb-2">冷冻温度</div>
											<div className="flex items-center justify-between">
												<Button
													className="w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													onClick={() => {
														const tempSpan = document.getElementById('freezeTemp');
														if (tempSpan) {
															const currentTemp = parseInt(tempSpan.textContent);
															if (currentTemp > -24) {
																tempSpan.textContent = `${currentTemp - 1}°C`;
															}
														}
													}}
												>
													<i className="fas fa-minus text-[#2D5A27] text-xl"></i>
												</Button>
												<span id="freezeTemp" className="text-4xl font-bold text-[#2D5A27]">-18°C</span>
												<Button
													className="w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													onClick={() => {
														const tempSpan = document.getElementById('freezeTemp');
														if (tempSpan) {
															const currentTemp = parseInt(tempSpan.textContent);
															if (currentTemp < -16) {
																tempSpan.textContent = `${currentTemp + 1}°C`;
															}
														}
													}}
												>
													<i className="fas fa-plus text-[#2D5A27] text-xl"></i>
												</Button>
											</div>
										</div>
										<div className="border-t border-[#2D5A27] my-4"></div>
										<div className="mt-8 flex flex-col gap-4">
											<Button
												className="w-full h-16 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 text-[#2D5A27] font-bold flex items-center justify-center text-xl"
											>
												<i className="fas fa-home text-2xl mr-3"></i>
												<span>日常运行</span>
											</Button>
											<Button
												className="w-full h-16 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 text-[#2D5A27] font-bold flex items-center justify-center text-xl"
											>
												<i className="fas fa-power-off text-2xl mr-3"></i>
												<span>外出节能</span>
											</Button>
											<Button
												className="w-full h-16 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 text-[#2D5A27] font-bold flex items-center justify-center text-xl"
											>
												<i className="fas fa-database text-2xl mr-3"></i>
												<span>智能储存</span>
											</Button>
										</div>
									</div>
								</div>
								<div id="fridgeOverlay" className="fixed inset-0 bg-black bg-opacity-50 hidden z-40" onClick={() => {
									const fridgeModal = document.getElementById('fridgeModal');
									const fridgeOverlay = document.getElementById('fridgeOverlay');
									if (fridgeModal) fridgeModal.style.display = 'none';
									if (fridgeOverlay) fridgeOverlay.style.display = 'none';
								}}></div>
							</div>
							<div className="relative">
								<Button variant="ghost" className="!rounded-button w-full bg-[#c2dbc2] p-8" onClick={() => {
									const lightModal = document.getElementById('lightModal');
									const lightOverlay = document.getElementById('lightOverlay');
									if (lightModal) lightModal.style.display = 'block';
									if (lightOverlay) lightOverlay.style.display = 'block';
								}}>
									<div className="flex justify-between items-center w-full">
										<div className="flex items-center">
											<i className="fas fa-lightbulb text-[#2d5a27] mr-4 text-2xl"></i>
											<span className="text-lg">电灯</span>
										</div>
										<Switch checked className="data-[state=checked]:bg-[#2d5a27]" />
									</div>
								</Button>
								<div id="lightModal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E0EBE0] p-6 rounded-lg shadow-xl z-50 hidden w-[360px]">
									<div className="space-y-4 mb-8">
										<div className="text-lg font-medium text-[#1F2937]">灯光控制面板</div>
										<div className="flex justify-between items-center">
											<Button className="bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 text-[#2D5A27] px-6">
												总开
											</Button>
											<Button className="bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 text-[#2D5A27] px-6">
												总关
											</Button>
										</div>
									</div>
									<div className="relative w-64 h-64 mx-auto mb-8">
										<div className="absolute inset-0 rounded-full bg-[#C2DBC2] flex items-center justify-center">
											<Button className="absolute top-4 transform -translate-x-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10" style={{ left: '50%' }}>
												<i className="fas fa-plus text-[#2D5A27] text-xl"></i>
											</Button>
											<Button className="absolute bottom-4 transform -translate-x-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10" style={{ left: '50%' }}>
												<i className="fas fa-minus text-[#2D5A27] text-xl"></i>
											</Button>
											<Button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10">
												<i className="fas fa-temperature-low text-[#2D5A27] text-xl"></i>
											</Button>
											<Button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-[#2D5A27]/10">
												<i className="fas fa-temperature-high text-[#2D5A27] text-xl"></i>
											</Button>
											<Button className="w-32 h-32 rounded-full bg-[#E0EBE0] hover:bg-[#E0EBE0]/90 text-[#2D5A27] text-xl font-bold">
												对码
											</Button>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<Button className="h-16 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 !rounded-button">
											<i className="fas fa-sun text-[#2D5A27] text-2xl mr-3"></i>
											<span className="text-[#2D5A27] text-xl">白光</span>
										</Button>
										<Button className="h-16 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 !rounded-button">
											<i className="fas fa-moon text-[#2D5A27] text-2xl mr-3"></i>
											<span className="text-[#2D5A27] text-xl">黄光</span>
										</Button>
									</div>
									<div className="grid grid-cols-2 gap-4 mt-4">
										<Button className="h-16 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 !rounded-button">
											<i className="fas fa-bed text-[#2D5A27] text-2xl mr-3"></i>
											<span className="text-[#2D5A27] text-xl">夜灯</span>
										</Button>
										<Button className="h-16 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 !rounded-button">
											<i className="fas fa-lightbulb text-[#2D5A27] text-2xl mr-3"></i>
											<span className="text-[#2D5A27] text-xl">辅光</span>
										</Button>
									</div>
								</div>
								<div id="lightOverlay" className="fixed inset-0 bg-black bg-opacity-50 hidden z-40" onClick={() => {
									const lightModal = document.getElementById('lightModal');
									const lightOverlay = document.getElementById('lightOverlay');
									if (lightModal) lightModal.style.display = 'none';
									if (lightOverlay) lightOverlay.style.display = 'none';
								}}></div>
							</div>
							<Button variant="ghost" className="!rounded-button w-full bg-[#c2dbc2] p-8">
								<div className="flex justify-between items-center w-full">
									<div className="flex items-center">
										<i className="fas fa-wifi text-[#2d5a27] mr-4 text-2xl"></i>
										<span className="text-lg">Wifi</span>
									</div>
									<Switch checked className="data-[state=checked]:bg-[#2d5a27]" />
								</div>
							</Button>
							<div className="relative">
								<Button variant="ghost" className="!rounded-button w-full bg-[#c2dbc2] p-8" onClick={() => {
									const thermostatModal = document.getElementById('thermostatModal');
									const thermostatOverlay = document.getElementById('thermostatOverlay');
									if (thermostatModal) thermostatModal.style.display = 'block';
									if (thermostatOverlay) thermostatOverlay.style.display = 'block';
								}}>
									<div className="flex justify-between items-center w-full">
										<div className="flex items-center">
											<i className="fas fa-thermometer-half text-[#2d5a27] mr-4 text-2xl"></i>
											<span className="text-lg">恒温器</span>
										</div>
										<Switch checked className="data-[state=checked]:bg-[#2d5a27]" />
									</div>
								</Button>
								<div id="thermostatModal" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E0EBE0] p-6 rounded-lg shadow-xl z-50 hidden w-[360px]">
									<div className="text-lg font-medium text-[#1F2937] mb-4">恒温器控制面板</div>
									<div className="space-y-6">
										{/* Display Screen */}
										<div className="bg-[#C2DBC2] p-4 rounded-lg space-y-4">
											<div className="flex justify-between items-center">
												<span className="text-[#2D5A27] text-lg">室内温度</span>
												<span className="text-4xl font-bold text-[#2D5A27]">26°C</span>
											</div>
											<div id="thermostatStatus" className="grid grid-cols-3 gap-2 text-sm">
												<div id="modeStatus" className="bg-[#2D5A27] text-white px-2 py-1 rounded text-center">制冷</div>
												<div className="text-[#2D5A27] px-2 py-1 rounded text-center">风速：中</div>
												<div id="swingStatus" className="text-[#2D5A27] px-2 py-1 rounded text-center">扫风关闭</div>
											</div>
										</div>
										{/* Power Button */}
										<Button className="w-full h-12 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90 text-[#2D5A27] font-bold text-xl" onClick={() => {
											const displayScreen = document.getElementById('thermostatStatus');
											if (displayScreen) {
												displayScreen.style.display = displayScreen.style.display === 'none' ? 'grid' : 'none';
											}
										}}>
											开/关
										</Button>
										{/* Mode Buttons */}
										<div className="grid grid-cols-2 gap-4">
											<Button
												className="h-12 bg-[#BAE6FF] hover:bg-[#BAE6FF]/90 text-[#1F2937] font-medium text-xl"
												onClick={() => {
													const modeStatus = document.getElementById('modeStatus');
													if (modeStatus) {
														modeStatus.textContent = '制冷';
													}
												}}
											>
												制冷
											</Button>
											<Button
												className="h-12 bg-[#FFB4B4] hover:bg-[#FFB4B4]/90 text-[#1F2937] font-medium text-xl"
												onClick={() => {
													const modeStatus = document.getElementById('modeStatus');
													if (modeStatus) {
														modeStatus.textContent = '制热';
													}
												}}
											>
												制热
											</Button>
										</div>
										{/* Control Ring */}
										<div className="relative w-72 h-72 mx-auto">
											<div className="absolute inset-0 rounded-full bg-[#C2DBC2] flex items-center justify-center">
												<Button
													className="absolute top-6 transform -translate-x-1/2 w-16 h-16 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													style={{ left: '50%' }}
													onClick={() => {
														const tempDisplay = document.getElementById('tempDisplay');
														if (tempDisplay) {
															const currentTemp = parseInt(tempDisplay.textContent);
															if (currentTemp < 30) {
																tempDisplay.textContent = `${currentTemp + 1}°C`;
															}
														}
													}}
												>
													<i className="fas fa-chevron-up text-[#2D5A27] text-3xl"></i>
												</Button>
												<Button
													className="absolute bottom-6 transform -translate-x-1/2 w-16 h-16 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													style={{ left: '50%' }}
													onClick={() => {
														const tempDisplay = document.getElementById('tempDisplay');
														if (tempDisplay) {
															const currentTemp = parseInt(tempDisplay.textContent);
															if (currentTemp > 16) {
																tempDisplay.textContent = `${currentTemp - 1}°C`;
															}
														}
													}}
												>
													<i className="fas fa-chevron-down text-[#2D5A27] text-3xl"></i>
												</Button>
												<Button
													className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													onClick={() => {
														const modeStatus = document.getElementById('modeStatus');
														if (modeStatus) {
															modeStatus.textContent = '睡眠';
														}
													}}
												>
													<i className="fas fa-bed text-[#2D5A27] text-3xl"></i>
												</Button>
												<Button
													className="absolute right-6 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-transparent hover:bg-[#2D5A27]/10"
													onClick={() => {
														const fanSpeedEl = document.querySelector('#thermostatStatus div:nth-child(2)');
														if (fanSpeedEl) {
															const currentSpeed = fanSpeedEl.textContent.split('：')[1];
															let newSpeed;
															switch (currentSpeed) {
																case '低':
																	newSpeed = '中';
																	break;
																case '中':
																	newSpeed = '高';
																	break;
																case '高':
																	newSpeed = '低';
																	break;
																default:
																	newSpeed = '高';
															}
															fanSpeedEl.textContent = `风速：${newSpeed}`;
														}
													}}>
													<i className="fas fa-wind text-[#2D5A27] text-3xl"></i>
												</Button>
												<div id="tempDisplay" className="text-[#2D5A27] text-4xl font-bold">26°C</div>
											</div>
										</div>
										{/* Mode Buttons */}
										<div className="grid grid-cols-2 gap-4">
											<Button
												className="h-14 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90"
												onClick={() => {
													const modeStatus = document.getElementById('modeStatus');
													if (modeStatus) {
														modeStatus.textContent = '静音';
													}
												}}
											>
												<i className="fas fa-volume-mute text-[#2D5A27] text-2xl mr-3"></i>
												<span className="text-[#2D5A27] text-lg">静音</span>
											</Button>
											<Button
												className="h-14 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90"
												onClick={() => {
													const modeStatus = document.getElementById('modeStatus');
													if (modeStatus) {
														modeStatus.textContent = '干燥';
													}
												}}
											>
												<i className="fas fa-tint text-[#2D5A27] text-2xl mr-3"></i>
												<span className="text-[#2D5A27] text-lg">干燥</span>
											</Button>
										</div>
										{/* Swing Buttons */}
										<div className="grid grid-cols-2 gap-4">
											<Button
												className="h-14 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90"
												onClick={() => {
													const swingStatus = document.getElementById('swingStatus');
													if (swingStatus) {
														swingStatus.textContent = '上下扫风';
													}
												}}
											>
												<i className="fas fa-arrows-alt-v text-[#2D5A27] text-2xl mr-3"></i>
												<span className="text-[#2D5A27] text-lg">上下扫风</span>
											</Button>
											<Button
												className="h-14 bg-[#C2DBC2] hover:bg-[#C2DBC2]/90"
												onClick={() => {
													const swingStatus = document.getElementById('swingStatus');
													if (swingStatus) {
														swingStatus.textContent = '左右扫风';
													}
												}}
											>
												<i className="fas fa-arrows-alt-h text-[#2D5A27] text-2xl mr-3"></i>
												<span className="text-[#2D5A27] text-lg">左右扫风</span>
											</Button>
										</div>
									</div>
								</div>
								<div id="thermostatOverlay" className="fixed inset-0 bg-black bg-opacity-50 hidden z-40" onClick={() => {
									const thermostatModal = document.getElementById('thermostatModal');
									const thermostatOverlay = document.getElementById('thermostatOverlay');
									if (thermostatModal) thermostatModal.style.display = 'none';
									if (thermostatOverlay) thermostatOverlay.style.display = 'none';
								}}></div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};
export default App
