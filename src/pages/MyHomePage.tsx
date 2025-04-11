// 以 MyHomePage 为例
"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faTv, faBox, faLightbulb, faWifi, faThermometerHalf } from "@fortawesome/free-solid-svg-icons";

// 假设这些组件已经正确实现
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";
import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
import ChatModal from "../components/modals/ChatModal";
import DeviceControl from "../components/device-controls/DeviceControl";
import TVModal from "../components/modals/TVModal";
import FridgeModal from "../components/modals/FridgeModal";
import LightModal from "../components/modals/LightModal";
import ThermostatModal from "../components/modals/ThermostatModal";

const MyHomePage: React.FC = () => {
	const [isChatModalOpen, setIsChatModalOpen] = useState(false);
	const [isTVModalOpen, setIsTVModalOpen] = useState(false);
	const [isFridgeModalOpen, setIsFridgeModalOpen] = useState(false);
	const [isLightModalOpen, setIsLightModalOpen] = useState(false);
	const [isThermostatModalOpen, setIsThermostatModalOpen] = useState(false);

	const cameraImage = "https://ai-public.mastergo.com/ai/img_res/659958a136a4b6404f1c00fe3d6406fa.jpg ";

	const pieChartData = [
		{ value: 16, name: "餐厅", itemStyle: { color: "#FF6B6B" } },
		{ value: 22, name: "工作室", itemStyle: { color: "#4DABF7" } },
		{ value: 19, name: "卧室", itemStyle: { color: "#FFA94D" } },
		{ value: 31, name: "客厅", itemStyle: { color: "#51CF66" } },
		{ value: 12, name: "厨房", itemStyle: { color: "#CC5DE8" } },
	];

	const barChartXData = ["周一", "周二", "周三", "周四", "周五"];
	const barChartYData = [320, 280, 250, 220, 190];

	const [devices, setDevices] = useState<{
		[key: string]: boolean;
	}>(() => {
		const storedDevices = localStorage.getItem("devicesStatus");
		try {
			return storedDevices ? JSON.parse(storedDevices) : {
				TV: false,
				Fridge: false,
				Light: false,
				Wifi: false,
				Thermostat: false,
			};
		} catch (error) {
			console.error("Error parsing stored devices:", error);
			return {
				TV: false,
				Fridge: false,
				Light: false,
				Wifi: false,
				Thermostat: false,
			};
		}
	});

	const toggleDevice = (deviceName: string, newValue?: boolean) => {
		const updatedDevices = {
			...devices,
			[deviceName]: newValue !== undefined ? newValue : !devices[deviceName]
		};
		setDevices(updatedDevices);
		try {
			localStorage.setItem("devicesStatus", JSON.stringify(updatedDevices));
		} catch (error) {
			console.error("Error saving devices:", error);
		}
	};

	const [activeCamera, setActiveCamera] = useState("C1");

	return (
		<div className="min-h-screen bg-[#f0f5f0] text-gray-800">
			<main className="flex-1 p-6">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold">我的家</h1>
					<div className="relative">
						<button
							onClick={() => setIsChatModalOpen(true)}
							className="pl-12 pr-12 py-3 rounded-lg bg-[#F0F5F0] text-base border-2 border-[#3A7233] text-[#3A7233] hover:bg-[#E0EBE0] w-72"
						>
							<i className="fas fa-keyboard absolute left-4 top-1/2 -translate-y-1/2 text-[#3A7233] text-lg"></i>
							<span>输入指令或点击语音</span>
							<i className="fas fa-microphone absolute right-4 top-1/2 -translate-y-1/2 text-[#3A7233] text-lg"></i>
						</button>
						<ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
						<div
							onClick={() => setIsChatModalOpen(false)}
							className="fixed inset-0 bg-black bg-opacity-50 hidden z-40"
						></div>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-6 max-w-full">
					<div className="col-span-2 bg-[#c2dbc2] rounded-lg overflow-hidden">
						<div className="p-4 border-b border-gray-700 flex justify-between items-center">
							<span>摄像头</span>
							<div className="flex space-x-2">
								<span className={activeCamera === "C1" ? "text-blue-400" : "text-gray-400"}>C1</span>
								<span className={activeCamera === "C2" ? "text-blue-400" : "text-gray-400"}>C2</span>
								<span className={activeCamera === "C3" ? "text-blue-400" : "text-gray-400"}>C3</span>
								<i className="fas fa-ellipsis-v text-gray-400 ml-2"></i>
							</div>
						</div>
						<Swiper
							modules={[Pagination, Autoplay]}
							pagination={{ clickable: true }}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false // 确保手动交互后仍能自动播放
							}}
							loop={true}
							className="w-full h-[350px]"
							onSlideChange={(swiper) => {
								const cameras = ["C1", "C2", "C3"];
								const index = swiper.realIndex % cameras.length;
								setActiveCamera(cameras[index]);
							}}
						>
							<SwiperSlide>
								<div className="relative">
									<img
										src={cameraImage}
										alt="Camera Feed 1"
										className="w-full h-[350px] object-cover"
									/>
									<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">
										2024/02/16 09:43AM
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img
										src="https://ai-public.mastergo.com/ai/img_res/5b5d06e9c437a03fd0963b4fb22ffd03.jpg "
										alt="Camera Feed 2"
										className="w-full h-[350px] object-cover"
									/>
									<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">
										2024/02/16 09:44AM
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="relative">
									<img
										src="https://ai-public.mastergo.com/ai/img_res/36d83598434f2cad9aa41e7f8b163143.jpg "
										alt="Camera Feed 3"
										className="w-full h-[350px] object-cover"
									/>
									<div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">
										2024/02/16 09:45AM
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					<div className="space-y-6">
						<div className="bg-[#c2dbc2] p-4 rounded-lg">
							<div className="flex justify-between items-center mb-4">
								<span>房间耗电量</span>
								<i className="fas fa-ellipsis-v text-gray-400"></i>
							</div>
							<div className="relative">
								<PieChart data={pieChartData} />
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
							<BarChart xData={barChartXData} yData={barChartYData} />
						</div>
					</div>
				</div>
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
				<div className="grid grid-cols-5 gap-2 mt-6">
					<DeviceControl
						icon={faTv}
						name="电视"
						isChecked={devices.TV}
						onToggle={() => toggleDevice("TV")}
						onClick={() => setIsTVModalOpen(true)}
					/>
					<DeviceControl
						icon={faBox}
						name="冰箱"
						isChecked={devices.Fridge}
						onToggle={() => toggleDevice("Fridge")}
						onClick={() => setIsFridgeModalOpen(true)}
					/>
					<DeviceControl
						icon={faLightbulb}
						name="灯光"
						isChecked={devices.Light}
						onToggle={() => toggleDevice("Light")}
						onClick={() => setIsLightModalOpen(true)}
					/>
					<DeviceControl
						icon={faWifi}
						name="Wifi"
						isChecked={devices.Wifi}
						onToggle={() => toggleDevice("Wifi")}
						onClick={() => null}
					/>
					<DeviceControl
						icon={faThermometerHalf}
						name="恒温器"
						isChecked={devices.Thermostat}
						onToggle={() => toggleDevice("Thermostat")}
						onClick={() => setIsThermostatModalOpen(true)}
					/>
				</div>
				<TVModal
					isOpen={isTVModalOpen}
					onClose={() => setIsTVModalOpen(false)}
					toggleTV={() => toggleDevice("TV")}
				/>
				<FridgeModal
					isOpen={isFridgeModalOpen}
					onClose={() => setIsFridgeModalOpen(false)}
					toggleFridge={() => toggleDevice("Fridge")}
				/>
				<LightModal
					isOpen={isLightModalOpen}
					onClose={() => setIsLightModalOpen(false)}
					isLightOn={devices.Light}
					setIsLightOn={(value) => toggleDevice("Light", value)}
				/>
				<ThermostatModal
					isOpen={isThermostatModalOpen}
					onClose={() => setIsThermostatModalOpen(false)}
					isThermostatOn={devices.Thermostat}
					toggleThermostat={() => toggleDevice("Thermostat")}
				/>
			</main>
		</div>
	);
};

export default MyHomePage;