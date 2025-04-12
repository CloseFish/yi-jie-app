// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from 'react';
import * as echarts from 'echarts';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
const App: React.FC = () => {
	const [showCurtainDialog, setShowCurtainDialog] = React.useState(false);
	const [isCurtainMoving, setIsCurtainMoving] = React.useState(false);
	const [curtainPosition, setCurtainPosition] = React.useState('closed'); // 'open', 'closed', 'moving'
	const [showRiceCookerDialog, setShowRiceCookerDialog] = React.useState(false);
	const [showWaterHeaterDialog, setShowWaterHeaterDialog] = React.useState(false);
	const [waterHeaterOn, setWaterHeaterOn] = React.useState(false);
	const [currentTemp, setCurrentTemp] = React.useState(28);
	const [targetTemp, setTargetTemp] = React.useState([55]);
	const [heatingMode, setHeatingMode] = React.useState('single'); // 'single' or 'double'
	const [riceCookerMode, setRiceCookerMode] = React.useState('local'); // 'local' or 'extended'
	const [selectedFunction, setSelectedFunction] = React.useState('');
	const [remainingTime, setRemainingTime] = React.useState(0);
	const [isRiceCookerWorking, setIsRiceCookerWorking] = React.useState(false);
	const [timerId, setTimerId] = React.useState<NodeJS.Timer | null>(null);
	// 清理定时器
	const cleanup = () => {
		if (timerId) {
			clearInterval(timerId);
			setTimerId(null);
		}
	};
	// 组件卸载时清理定时器
	React.useEffect(() => {
		return () => cleanup();
	}, []);
	const [showMusicDialog, setShowMusicDialog] = React.useState(false);
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [currentSpeed, setCurrentSpeed] = React.useState('1x');
	const [currentQuality, setCurrentQuality] = React.useState('标准');
	const [volume, setVolume] = React.useState([24]);
	const [showPlaylist, setShowPlaylist] = React.useState(false);
	const [currentSong, setCurrentSong] = React.useState('月光 - 陈宏达');
	const playlist = [
		'月光 - 陈宏达',
		'漫步人生路 - 邓丽君',
		'逆光 - 孙燕姿',
		'城里的月光 - 许美静',
		'海阔天空 - Beyond',
		'后来 - 刘若英',
		'但愿人长久 - 王菲',
		'恋曲1990 - 罗大佑'
	];
	const handlePrevSong = () => {
		const currentIndex = playlist.indexOf(currentSong);
		const newIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
		setCurrentSong(playlist[newIndex]);
	};
	const handleNextSong = () => {
		const currentIndex = playlist.indexOf(currentSong);
		const newIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
		setCurrentSong(playlist[newIndex]);
	};
	const [selectedRoom, setSelectedRoom] = React.useState('livingRoom');
	const [isHeatingOn, setIsHeatingOn] = React.useState(true);
	const [roomTemperatures, setRoomTemperatures] = React.useState({
		livingRoom: 26,
		bedroom: 25,
		study: 24
	});
	const [showHeatingDialog, setShowHeatingDialog] = React.useState(false);
	const [selectedTemp, setSelectedTemp] = React.useState([22]);
	const [showFanDialog, setShowFanDialog] = React.useState(false);
	const [fanSpeed, setFanSpeed] = React.useState('低');
	const [fanMode, setFanMode] = React.useState('直吹风');
	const [fanSwingMode, setFanSwingMode] = React.useState('左右扫风');
	const [isTimerMode, setIsTimerMode] = React.useState(false);
	const [timerDuration, setTimerDuration] = React.useState(1);
	const [isFanOn, setIsFanOn] = React.useState(false);
	const [showLockDialog, setShowLockDialog] = React.useState(false);
	const [lockMode, setLockMode] = React.useState('default'); // 'default', 'password', 'fingerprint'
	const [tempPassword, setTempPassword] = React.useState('');
	const [devices, setDevices] = React.useState([
		{ name: '恒温器', icon: 'snowflake', status: true },
		{ name: '电视', icon: 'tv', status: false },
		{ name: '灯光', icon: 'lightbulb', status: true },
		{ name: '智能音响', icon: 'volume-up', status: false },
		{ name: '冰箱', icon: 'box', status: true },
		{ name: '地暖', icon: 'temperature-high', status: true },
		{ name: '窗帘', icon: 'window', status: false },
		{ name: '电饭煲', icon: 'utensils', status: true },
		{ name: '热水器', icon: 'hot-tub', status: true },
		{ name: '电风扇', icon: 'fan', status: false },
		{ name: '智能门锁', icon: 'lock', status: true },
	]);
	const toggleDevice = (index: number) => {
		const newDevices = [...devices];
		newDevices[index].status = !newDevices[index].status;
		setDevices(newDevices);
		if (newDevices[index].name === '窗帘' && newDevices[index].status) {
			setShowCurtainDialog(true);
		} else if (newDevices[index].name === '电饭煲' && newDevices[index].status) {
			setShowRiceCookerDialog(true);
		} else if (newDevices[index].name === '热水器' && newDevices[index].status) {
			setShowWaterHeaterDialog(true);
		} else if (newDevices[index].name === '智能音响' && newDevices[index].status) {
			setShowMusicDialog(true);
		} else if (newDevices[index].name === '地暖' && newDevices[index].status) {
			setShowHeatingDialog(true);
		} else if (newDevices[index].name === '电风扇' && newDevices[index].status) {
			setShowFanDialog(true);
		} else if (newDevices[index].name === '智能门锁' && newDevices[index].status) {
			setShowLockDialog(true);
			setTempPassword(Math.floor(1000 + Math.random() * 9000).toString());
		}
	};
	const handleCurtainControl = (action: 'open' | 'close') => {
		setIsCurtainMoving(true);
		setCurtainPosition(action === 'open' ? 'open' : 'closed');
		// Simulate curtain movement
		setTimeout(() => {
			setIsCurtainMoving(false);
		}, 2000);
	};
	return (
		<div className="flex h-screen bg-[#E8F0E8]">
			{/* 左侧导航栏 */}
			<div className="w-64 bg-white p-6 flex flex-col">
				<div className="flex items-center space-x-4 mb-8">
					<img
						src="https://ai-public.mastergo.com/ai/img_res/b0c0ef60a1095554005d15f13f73e306.jpg"
						alt="用户头像"
						className="w-16 h-16 rounded-full"
					/>
					<div>
						<div className="font-medium">不亮的小明</div>
						<div className="text-sm text-gray-500">中关村科电大厦541号</div>
					</div>
				</div>
				<nav className="space-y-4">
					<Button variant="ghost" className="w-full justify-start !rounded-button">
						<i className="fas fa-home mr-3"></i>
						我的家
					</Button>
					<Button variant="ghost" className="w-full justify-start bg-[#E8F0E8] text-[#2D5A27] !rounded-button">
						<i className="fas fa-microchip mr-3"></i>
						设备
					</Button>
					<Button variant="ghost" className="w-full justify-start !rounded-button">
						<i className="fas fa-chart-line mr-3"></i>
						智能分析
					</Button>
					<Button variant="ghost" className="w-full justify-start !rounded-button">
						<i className="fas fa-database mr-3"></i>
						使用数据
					</Button>
					<Button variant="ghost" className="w-full justify-start !rounded-button">
						<i className="fas fa-history mr-3"></i>
						历史数据
					</Button>
					<Button variant="ghost" className="w-full justify-start !rounded-button">
						<i className="fas fa-cog mr-3"></i>
						设置
					</Button>
				</nav>
			</div>
			{/* 主内容区域 */}
			<div className="flex-1 p-8 bg-[#F0F5F0]">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-2xl font-bold">设备</h1>
					<div className="flex items-center space-x-4">
						<div className="relative">
							<Input
								type="text"
								placeholder="输入搜索关键词"
								className="pl-10 pr-4 py-2 w-64 bg-white border-none text-sm"
							/>
							<i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
						</div>
						<Button variant="outline" className="!rounded-button whitespace-nowrap">
							<i className="fas fa-microphone text-[#2D5A27]"></i>
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-6">
					{devices.map((device, index) => (
						<Card key={index} className="p-8 bg-[#C2DBC2] border-none">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-6">
									<div className="w-16 h-16 rounded-full bg-[#2D5A27] bg-opacity-10 flex items-center justify-center">
										<i className={`fas fa-${device.icon} text-[#2D5A27] text-2xl`}></i>
									</div>
									<span className="font-bold text-xl text-[#1F2937]">{device.name}</span>
								</div>
								<Switch className="scale-125" checked={device.status} onCheckedChange={() => toggleDevice(index)} />
							</div>
							<div className="mt-6">
								<div className="text-base text-gray-600">
									{device.status ? '运行中' : '已关闭'}
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
			{/* 窗帘控制面板弹窗 */}
			<Dialog open={showCurtainDialog} onOpenChange={setShowCurtainDialog}>
				<DialogContent className="bg-[#E0EBE0] p-6 max-w-md mx-auto">
					<h2 className="text-[#1F2937] text-xl font-semibold mb-4">窗帘控制面板</h2>
					<div className="space-y-6">
						{/* 虚拟窗户和窗帘显示屏 */}
						<div className="relative h-48 bg-[#1F2937] rounded-lg overflow-hidden p-4">
							<div className="w-full h-full bg-[#E6F3FF] rounded-lg relative">
								{/* 左侧窗帘 */}
								<div
									className={`absolute top-0 left-0 h-full w-1/2 bg-[#C2DBC2] transition-transform duration-[2000ms] ease-in-out ${curtainPosition === 'open' ? 'translate-x-[-100%]' : 'translate-x-0'
										}`}
								></div>
								{/* 右侧窗帘 */}
								<div
									className={`absolute top-0 right-0 h-full w-1/2 bg-[#C2DBC2] transition-transform duration-[2000ms] ease-in-out ${curtainPosition === 'open' ? 'translate-x-[100%]' : 'translate-x-0'
										}`}
								></div>
								{/* 状态指示 */}
								<div className="absolute bottom-2 right-2">
									<div className="flex items-center space-x-2">
										<div className={`w-2 h-2 rounded-full ${isCurtainMoving ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
										<span className="text-xs text-gray-600">{isCurtainMoving ? '移动中' : '就绪'}</span>
									</div>
								</div>
							</div>
						</div>
						{/* 控制按钮 */}
						<div className="grid grid-cols-2 gap-4">
							<Button
								className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6"
								variant="ghost"
								onClick={() => handleCurtainControl('close')}
								disabled={isCurtainMoving}
							>
								<i className="fas fa-arrow-left mr-3 text-2xl"></i>
								<span className="text-xl font-bold">关闭</span>
							</Button>
							<Button
								className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6"
								variant="ghost"
								onClick={() => handleCurtainControl('open')}
								disabled={isCurtainMoving}
							>
								<i className="fas fa-arrow-right mr-3 text-2xl"></i>
								<span className="text-xl font-bold">开启</span>
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
			{/* 电饭煲控制面板弹窗 */}
			<Dialog open={showRiceCookerDialog} onOpenChange={setShowRiceCookerDialog}>
				<DialogContent className="bg-[#E0EBE0] p-6 max-w-md mx-auto">
					<h2 className="text-[#1F2937] text-xl font-semibold mb-4">电饭煲控制面板</h2>
					<div className="space-y-6">
						{/* 显示屏 */}
						<div className="bg-[#1F2937] rounded-lg p-6 text-center">
							<div className="text-white">
								{selectedFunction ? (
									<>
										<div className="text-2xl font-bold mb-2">{selectedFunction}</div>
										<div className="text-4xl">
											{Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}
										</div>
										<div className="text-sm mt-2">{isRiceCookerWorking ? '正在运行中...' : '准备就绪'}</div>
									</>
								) : (
									<div className="text-2xl">请选择功能</div>
								)}
							</div>
						</div>
						{/* 导航栏 */}
						<div className="flex justify-between items-center border-b border-gray-300 mb-4">
							<div className="flex space-x-4">
								<Button
									variant="ghost"
									className={`pb-2 text-lg font-bold ${riceCookerMode === 'local' ? 'border-b-2 border-[#2D5A27] text-[#2D5A27]' : ''} !rounded-button`}
									onClick={() => setRiceCookerMode('local')}
								>
									本机
								</Button>
								<Button
									variant="ghost"
									className={`pb-2 text-lg font-bold ${riceCookerMode === 'extended' ? 'border-b-2 border-[#2D5A27] text-[#2D5A27]' : ''} !rounded-button`}
									onClick={() => setRiceCookerMode('extended')}
								>
									拓展
								</Button>
							</div>
							<div className="flex justify-end space-x-2">
								<Button
									variant="ghost"
									className="bg-[#2D5A27] text-white hover:bg-[#1D4A17] !rounded-button text-lg font-bold py-3 px-4"
									onClick={() => {
										if (selectedFunction) {
											if (isRiceCookerWorking) {
												cleanup();
												setIsRiceCookerWorking(false);
											} else {
												setIsRiceCookerWorking(true);
												cleanup(); // 清理之前的定时器
												const timer = setInterval(() => {
													setRemainingTime((prev) => {
														if (prev <= 0) {
															cleanup();
															setIsRiceCookerWorking(false);
															return 0;
														}
														return prev - 1;
													});
												}, 1000);
												setTimerId(timer);
											}
										}
									}}
									disabled={!selectedFunction}
								>
									<i className={`fas ${isRiceCookerWorking ? 'fa-pause' : 'fa-play'} mr-3 text-xl`}></i>
									{isRiceCookerWorking ? '暂停' : '开始'}
								</Button>
								<Button
									variant="ghost"
									className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button text-lg font-bold py-3 px-4"
									onClick={() => {
										cleanup();
										setIsRiceCookerWorking(false);
										setSelectedFunction('');
										setRemainingTime(0);
									}}
								>
									<i className="fas fa-rotate-left mr-3 text-xl"></i>
									复位
								</Button>
							</div>
						</div>
						{/* 功能按钮 */}
						{riceCookerMode === 'local' ? (
							<div className="grid grid-cols-3 gap-4">
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('煮粥'); setRemainingTime(90 * 60); }}>
									<i className="fas fa-bowl-rice mr-3 text-2xl"></i>
									<span className="text-lg font-bold">煮粥</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('蒸煮'); setRemainingTime(30 * 60); }}>
									<i className="fas fa-cloud mr-3 text-2xl"></i>
									<span className="text-lg font-bold">蒸煮</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('热饭'); setRemainingTime(20 * 60); }}>
									<i className="fas fa-fire mr-3 text-2xl"></i>
									<span className="text-lg font-bold">热饭</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('稀饭'); setRemainingTime(45 * 60); }}>
									<i className="fas fa-coffee mr-3 text-2xl"></i>
									<span className="text-lg font-bold">稀饭</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('煲汤'); setRemainingTime(120 * 60); }}>
									<i className="fas fa-utensils mr-3 text-2xl"></i>
									<span className="text-lg font-bold">煲汤</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('杂粮饭'); setRemainingTime(70 * 60); }}>
									<i className="fas fa-seedling mr-3 text-2xl"></i>
									<span className="text-lg font-bold">杂粮饭</span>
								</Button>
							</div>
						) : (
							<div className="grid grid-cols-2 gap-4">
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('蛋糕'); setRemainingTime(50 * 60); }}>
									<i className="fas fa-cake-candles mr-3 text-2xl"></i>
									<span className="text-lg font-bold">蛋糕</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('酸奶'); setRemainingTime(480 * 60); }}>
									<i className="fas fa-glass-water mr-3 text-2xl"></i>
									<span className="text-lg font-bold">酸奶</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('低糖饭'); setRemainingTime(40 * 60); }}>
									<i className="fas fa-wheat-awn mr-3 text-2xl"></i>
									<span className="text-lg font-bold">低糖饭</span>
								</Button>
								<Button variant="ghost" className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button p-6" onClick={() => { setSelectedFunction('保温'); setRemainingTime(24 * 60 * 60); }}>
									<i className="fas fa-temperature-high mr-3 text-2xl"></i>
									<span className="text-lg font-bold">保温</span>
								</Button>
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
			{/* 热水器控制面板弹窗 */}
			<Dialog open={showWaterHeaterDialog} onOpenChange={setShowWaterHeaterDialog}>
				<DialogContent className="bg-[#E0EBE0] p-6 max-w-md mx-auto">
					<h2 className="text-[#1F2937] text-xl font-semibold mb-4">热水器控制面板</h2>
					<div className="space-y-8">
						{/* 显示屏 */}
						<div className="bg-[#1F2937] rounded-lg p-8">
							<div className="text-white text-center">
								<div className="text-6xl font-bold mb-4">{currentTemp}°C</div>
								<div className="text-lg mb-2">
									{waterHeaterOn ? (
										targetTemp[0] > currentTemp ? '正在加热中...' : '已达到目标温度'
									) : '已关闭'}
								</div>
								<div className="text-lg font-medium">{heatingMode === 'double' ? '双胆加热' : '单胆加热'}</div>
							</div>
						</div>
						{/* 开关按钮 */}
						<Button
							variant="ghost"
							className="w-full py-8 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] text-xl font-semibold !rounded-button"
							onClick={() => setWaterHeaterOn(!waterHeaterOn)}
						>
							<i className={`fas fa-power-off mr-3 text-xl`}></i>
							{waterHeaterOn ? '关闭' : '开启'}
						</Button>
						{/* 温度控制 */}
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<i className="fas fa-temperature-high text-[#2D5A27] text-2xl mr-3"></i>
									<span className="text-[#2D5A27] text-xl">目标温度</span>
								</div>
								<span className="text-[#2D5A27] text-xl">{targetTemp[0]}°C</span>
							</div>
							<Slider
								value={targetTemp}
								onValueChange={setTargetTemp}
								max={65}
								min={45}
								step={1}
								className="w-full h-3"
							/>
							{/* 加热模式选择 */}
							<div className="grid grid-cols-2 gap-4 mt-6">
								<Button
									variant="ghost"
									className={`py-4 text-lg font-medium ${heatingMode === 'single' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
									onClick={() => setHeatingMode('single')}
								>
									单胆加热
								</Button>
								<Button
									variant="ghost"
									className={`py-4 text-lg font-medium ${heatingMode === 'double' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
									onClick={() => setHeatingMode('double')}
								>
									双胆加热
								</Button>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
			{/* 地暖控制面板弹窗 */}
			<Dialog open={showHeatingDialog} onOpenChange={setShowHeatingDialog}>
				<DialogContent className="bg-[#E0EBE0] p-6 max-w-md mx-auto">
					<h2 className="text-[#1F2937] text-xl font-semibold mb-4">地暖控制面板</h2>
					<div className="space-y-6">
						{/* 显示屏 */}
						<div className="bg-[#1F2937] rounded-lg p-6">
							<div className="text-white text-center space-y-4">
								<div className="text-4xl font-bold mb-2">
									{selectedRoom === 'livingRoom' && '客厅当前室温: '}
									{selectedRoom === 'bedroom' && '卧室当前室温: '}
									{selectedRoom === 'study' && '书房当前室温: '}
									{roomTemperatures[selectedRoom]}°C
								</div>
								{isHeatingOn && (
									<div className="text-2xl">设定温度: {selectedTemp[0]}°C</div>
								)}
								<div className="text-lg">
									{isHeatingOn ? (
										selectedTemp[0] > roomTemperatures[selectedRoom] ? '正在加热中...' : '已达到目标温度'
									) : '已关闭'}
								</div>
							</div>
						</div>
						{/* 开关按钮 */}
						<Button
							variant="ghost"
							className="w-full py-8 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] text-xl font-semibold !rounded-button"
							onClick={() => setIsHeatingOn(!isHeatingOn)}
						>
							<i className={`fas fa-power-off mr-3 text-xl`}></i>
							{isHeatingOn ? '关闭' : '开启'}
						</Button>
						{/* 温度控制 */}
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<i className="fas fa-temperature-high text-[#2D5A27] text-2xl mr-3"></i>
									<span className="text-[#2D5A27] text-xl">设定温度</span>
								</div>
								<span className="text-[#2D5A27] text-xl">{selectedTemp[0]}°C</span>
							</div>
							<Slider
								value={selectedTemp}
								onValueChange={setSelectedTemp}
								max={45}
								min={20}
								step={1}
								className="w-full h-3"
							/>
						</div>
						{/* 房间选择 */}
						<div className="grid grid-cols-3 gap-6">
							<Button
								variant="ghost"
								className={`p-8 text-lg font-medium ${selectedRoom === 'livingRoom' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'
									} hover:bg-[#B2CBB2] !rounded-button flex-1 h-32`}
								onClick={() => setSelectedRoom('livingRoom')}
							>
								<div className="flex flex-col items-center space-y-3">
									<i className="fas fa-couch text-2xl"></i>
									<span className="text-lg whitespace-nowrap">客厅</span>
								</div>
							</Button>
							<Button
								variant="ghost"
								className={`p-8 text-lg font-medium ${selectedRoom === 'bedroom' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'
									} hover:bg-[#B2CBB2] !rounded-button flex-1 h-32`}
								onClick={() => setSelectedRoom('bedroom')}
							>
								<div className="flex flex-col items-center space-y-3">
									<i className="fas fa-bed text-2xl"></i>
									<span className="text-lg whitespace-nowrap">卧室</span>
								</div>
							</Button>
							<Button
								variant="ghost"
								className={`p-8 text-lg font-medium ${selectedRoom === 'study' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'
									} hover:bg-[#B2CBB2] !rounded-button flex-1 h-32`}
								onClick={() => setSelectedRoom('study')}
							>
								<div className="flex flex-col items-center space-y-3">
									<i className="fas fa-book text-2xl"></i>
									<span className="text-lg whitespace-nowrap">书房</span>
								</div>
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
			{/* 智能音响控制面板弹窗 */}
			<Dialog open={showMusicDialog} onOpenChange={setShowMusicDialog}>
				<DialogContent className="bg-[#E0EBE0] p-6 max-w-md mx-auto">
					<h2 className="text-[#1F2937] text-xl font-semibold mb-4">智能音响控制面板</h2>
					<div className="space-y-6">
						{/* 显示屏 */}
						<div className="bg-[#1F2937] rounded-lg p-6">
							<div className="text-white">
								{showPlaylist ? (
									<div className="space-y-4">
										<div className="text-lg font-semibold mb-4">播放列表</div>
										<div className="space-y-2">
											{playlist.map((song, index) => (
												<div
													key={index}
													className={`p-3 rounded-lg cursor-pointer hover:bg-gray-700 flex items-center justify-between ${currentSong === song ? 'bg-gray-700' : ''
														}`}
													onClick={() => {
														setCurrentSong(song);
														setShowPlaylist(false);
													}}
												>
													<span>{song}</span>
													{currentSong === song && (
														<i className="fas fa-volume-up text-green-400"></i>
													)}
												</div>
											))}
										</div>
									</div>
								) : (
									<div className="text-center space-y-4">
										<div className="text-2xl font-bold">{currentSong}</div>
										<div className="flex justify-center items-center space-x-8">
											<button onClick={handlePrevSong}>
												<i className="fas fa-backward text-xl"></i>
											</button>
											<button onClick={() => setIsPlaying(!isPlaying)}>
												<i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-2xl`}></i>
											</button>
											<button onClick={handleNextSong}>
												<i className="fas fa-forward text-xl"></i>
											</button>
										</div>
										<div className="text-sm space-x-4">
											<span>{currentSpeed}</span>
											<span>·</span>
											<span>{currentQuality}</span>
										</div>
									</div>
								)}
							</div>
						</div>
						{/* 开关按钮 */}
						<Button
							variant="ghost"
							className="w-full py-6 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] text-xl font-bold !rounded-button"
							onClick={() => setIsPlaying(!isPlaying)}
						>
							<i className={`fas fa-power-off mr-3`}></i>
							{isPlaying ? '关闭' : '开启'}
						</Button>
						{/* 音量控制 */}
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<i className="fas fa-volume-up text-[#2D5A27] text-xl mr-3"></i>
									<span className="text-[#2D5A27] text-lg">音量</span>
								</div>
								<span className="text-[#2D5A27] text-lg">{volume[0]}%</span>
							</div>
							<Slider
								value={volume}
								onValueChange={setVolume}
								max={100}
								step={1}
								className="w-full h-3"
							/>
						</div>
						{/* 倍速和音质控制 */}
						<div className="grid grid-cols-2 gap-4">
							<Button
								variant="ghost"
								className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button py-4"
								onClick={() => {
									const speeds = ['0.5x', '1x', '2x'];
									const currentIndex = speeds.indexOf(currentSpeed);
									const nextIndex = (currentIndex + 1) % speeds.length;
									setCurrentSpeed(speeds[nextIndex]);
								}}
							>
								<i className="fas fa-tachometer-alt mr-2"></i>
								{currentSpeed}
							</Button>
							<Button
								variant="ghost"
								className="bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button py-4"
								onClick={() => {
									const qualities = ['标准', '无损', '臻品'];
									const currentIndex = qualities.indexOf(currentQuality);
									const nextIndex = (currentIndex + 1) % qualities.length;
									setCurrentQuality(qualities[nextIndex]);
								}}
							>
								<i className="fas fa-music mr-2"></i>
								{currentQuality}
							</Button>
						</div>
						{/* 返回歌单按钮 */}
						<Button
							variant="ghost"
							className="w-full py-6 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] text-xl font-bold !rounded-button"
							onClick={() => setShowPlaylist(true)}
						>
							<i className="fas fa-list-ul mr-3"></i>
							返回歌单
						</Button>
					</div>
				</DialogContent>
			</Dialog>
			{/* 电风扇控制面板弹窗 */}
			<Dialog open={showFanDialog} onOpenChange={setShowFanDialog}>
				<DialogContent className="bg-[#E0EBE0] p-6 max-w-md mx-auto">
					<h2 className="text-[#1F2937] text-xl font-semibold mb-4">电风扇控制面板</h2>
					<div className="space-y-6">
						{/* 显示屏 */}
						<div className="bg-[#1F2937] rounded-lg p-6">
							<div className="text-white text-center space-y-3">
								{isFanOn ? (
									<>
										<div className="text-2xl font-bold">
											风速: {fanSpeed}
										</div>
										<div className="text-xl">
											模式: {fanMode}
										</div>
										<div className="text-xl">
											扫风: {fanSwingMode}
										</div>
										{isTimerMode && (
											<div className="text-xl">
												定时: {timerDuration} 小时
											</div>
										)}
									</>
								) : (
									<div className="text-3xl font-bold py-8">
										待开机
									</div>
								)}
							</div>
						</div>
						{/* 开关按钮 */}
						<Button
							variant="ghost"
							className="w-full py-6 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] text-xl font-semibold !rounded-button"
							onClick={() => setIsFanOn(!isFanOn)}
						>
							<i className={`fas fa-power-off mr-3`}></i>
							{isFanOn ? '关闭' : '开启'}
						</Button>
						{/* 风速模式按钮 */}
						<div className="grid grid-cols-3 gap-4">
							<Button
								variant="ghost"
								className={`py-12 px-6 ${fanMode === '直吹风' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanMode('直吹风')}
							>
								<div className="flex flex-col items-center">
									<i className="fas fa-wind text-3xl mb-3"></i>
									<span className="text-lg font-medium">直吹风</span>
								</div>
							</Button>
							<Button
								variant="ghost"
								className={`py-12 px-6 ${fanMode === '自然风' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanMode('自然风')}
							>
								<div className="flex flex-col items-center">
									<i className="fas fa-leaf text-3xl mb-3"></i>
									<span className="text-lg font-medium">自然风</span>
								</div>
							</Button>
							<Button
								variant="ghost"
								className={`py-12 px-6 ${fanMode === '睡眠风' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanMode('睡眠风')}
							>
								<div className="flex flex-col items-center">
									<i className="fas fa-moon text-3xl mb-3"></i>
									<span className="text-lg font-medium">睡眠风</span>
								</div>
							</Button>
						</div>
						{/* 定时模式控制 */}
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-3">
									<i className="fas fa-clock text-[#2D5A27] text-2xl"></i>
									<span className="text-[#2D5A27] text-xl font-bold">定时模式</span>
								</div>
								<Switch
									checked={isTimerMode}
									onCheckedChange={setIsTimerMode}
								/>
							</div>
							{isTimerMode && (
								<div className="grid grid-cols-3 gap-4">
									<Button
										variant="ghost"
										className={`h-24 flex flex-col items-center justify-center ${timerDuration === 0.5 ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
										onClick={() => setTimerDuration(0.5)}
									>
										<i className="fas fa-clock text-2xl mb-2"></i>
										<span className="text-xl font-bold">0.5 小时</span>
									</Button>
									<Button
										variant="ghost"
										className={`h-24 flex flex-col items-center justify-center ${timerDuration === 1 ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
										onClick={() => setTimerDuration(1)}
									>
										<i className="fas fa-clock text-2xl mb-2"></i>
										<span className="text-xl font-bold">1 小时</span>
									</Button>
									<Button
										variant="ghost"
										className={`h-24 flex flex-col items-center justify-center ${timerDuration === 2 ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
										onClick={() => setTimerDuration(2)}
									>
										<i className="fas fa-clock text-2xl mb-2"></i>
										<span className="text-xl font-bold">2 小时</span>
									</Button>
								</div>
							)}
						</div>
						{/* 风速控制 */}
						<div className="grid grid-cols-3 gap-4">
							<Button
								variant="ghost"
								className={`py-6 text-lg font-bold ${fanSpeed === '低' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanSpeed('低')}
							>
								低速
							</Button>
							<Button
								variant="ghost"
								className={`py-6 text-lg font-bold ${fanSpeed === '中' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanSpeed('中')}
							>
								中速
							</Button>
							<Button
								variant="ghost"
								className={`py-6 text-lg font-bold ${fanSpeed === '高' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanSpeed('高')}
							>
								高速
							</Button>
						</div>
						{/* 扫风模式控制 */}
						<div className="grid grid-cols-3 gap-4">
							<Button
								variant="ghost"
								className={`py-6 text-lg font-bold ${fanSwingMode === '左右扫风' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanSwingMode('左右扫风')}
							>
								<i className="fas fa-arrows-alt-h text-xl mr-2"></i>
								左右扫风
							</Button>
							<Button
								variant="ghost"
								className={`py-6 text-lg font-bold ${fanSwingMode === '上下扫风' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanSwingMode('上下扫风')}
							>
								<i className="fas fa-arrows-alt-v text-xl mr-2"></i>
								上下扫风
							</Button>
							<Button
								variant="ghost"
								className={`py-6 text-lg font-bold ${fanSwingMode === '左右上下扫风' ? 'bg-[#2D5A27] text-white' : 'bg-[#C2DBC2] text-[#2D5A27]'} hover:bg-[#B2CBB2] !rounded-button`}
								onClick={() => setFanSwingMode('左右上下扫风')}
							>
								<i className="fas fa-arrows-alt text-xl mr-2"></i>
								全方位
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
			{/* 智能门锁控制面板弹窗 */}
			<Dialog open={showLockDialog} onOpenChange={setShowLockDialog}>
				<DialogContent className="bg-[#E0EBE0] p-6 max-w-md mx-auto">
					<h2 className="text-[#1F2937] text-xl font-semibold mb-4">智能门锁控制面板</h2>
					<div className="space-y-6">
						{/* 显示屏 */}
						<div className="bg-[#1F2937] rounded-lg p-6">
							<div className="text-white text-center space-y-4">
								{lockMode === 'default' && (
									<div className="space-y-4">
										<i className="fas fa-lock text-4xl"></i>
										<div className="text-2xl font-bold">已关锁</div>
										<div className="text-gray-300 space-y-2">
											<div>设备型号：F300</div>
											<div className="flex items-center justify-center space-x-2">
												<i className="fas fa-battery-three-quarters"></i>
												<span>电量：80%</span>
											</div>
										</div>
									</div>
								)}
								{lockMode === 'password' && (
									<div className="space-y-4">
										<div className="text-2xl font-bold">临时密码</div>
										<div className="text-4xl font-mono tracking-wider">{tempPassword}</div>
										<div className="text-lg">请输入开锁</div>
									</div>
								)}
								{lockMode === 'fingerprint' && (
									<div className="space-y-4">
										<i className="fas fa-fingerprint text-4xl"></i>
										<div className="text-2xl">请输入指纹</div>
									</div>
								)}
							</div>
						</div>
						{/* 控制按钮 */}
						<div className="grid grid-cols-2 gap-4">
							<Button
								variant="ghost"
								className="py-12 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button"
								onClick={() => setLockMode('password')}
							>
								<div className="flex flex-col items-center space-y-4">
									<i className="fas fa-key text-4xl"></i>
									<span className="text-2xl font-bold">临时密码</span>
								</div>
							</Button>
							<Button
								variant="ghost"
								className="py-12 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button"
								onClick={() => setLockMode('fingerprint')}
							>
								<div className="flex flex-col items-center space-y-4">
									<i className="fas fa-fingerprint text-4xl"></i>
									<span className="text-2xl font-bold">指纹</span>
								</div>
							</Button>
						</div>
						{/* 管理员信息按钮 */}
						<Button
							variant="ghost"
							className="w-full py-8 bg-[#C2DBC2] text-[#2D5A27] hover:bg-[#B2CBB2] !rounded-button"
						>
							<div className="flex items-center justify-between w-full">
								<div className="flex items-center space-x-4">
									<i className="fas fa-users-cog text-3xl"></i>
									<span className="text-2xl font-bold">管理员信息</span>
								</div>
								<i className="fas fa-plus text-3xl"></i>
							</div>
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
export default App
