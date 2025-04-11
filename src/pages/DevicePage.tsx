"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSnowflake,
	faTv,
	faLightbulb,
	faVolumeUp,
	faBox,
	faTemperatureHigh,
	faWind,
	faUtensils,
	faHotTub,
	faFan,
	faLock,
} from "@fortawesome/free-solid-svg-icons";
import DeviceControl from "@/components/device-controls/DeviceControl"; // 引入 DeviceControl 组件
import TVModal from "../components/modals/TVModal"; // 引入 TVModal 组件

const DevicePage: React.FC = () => {
	// 从 localStorage 中读取设备状态
	const storedDevices = localStorage.getItem("devicesStatus");
	const initialDevices = storedDevices
		? JSON.parse(storedDevices)
		: {
			Thermostat: false,
			TV: false,
			Light: false,
			Speaker: false,
			Fridge: false,
			FloorHeating: false,
			Curtains: false,
			RiceCooker: false,
			WaterHeater: false,
			Fan: false,
			SmartLock: false,
		};

	const [devices, setDevices] = useState(initialDevices);
	const [isTVModalOpen, setIsTVModalOpen] = useState(false); // 管理电视模态框的显示状态

	// 保存设备状态到 localStorage
	useEffect(() => {
		localStorage.setItem("devicesStatus", JSON.stringify(devices));
	}, [devices]);

	const toggleDevice = (deviceName: string) => {
		const updatedDevices = { ...devices, [deviceName]: !devices[deviceName] };
		setDevices(updatedDevices);
		try {
			localStorage.setItem("devicesStatus", JSON.stringify(updatedDevices));
		} catch (error) {
			console.error("Error saving devices:", error);
		}
	};

	return (
		<div className="min-h-screen bg-[#f0f5f0] text-gray-800">
			<div className="flex-1 p-8">
				<h1 className="text-2xl font-bold">设备</h1>
				<div className="grid grid-cols-3 gap-6 mt-6">
					<DeviceControl
						icon={faSnowflake}
						name="恒温器"
						isChecked={devices.Thermostat}
						onToggle={() => toggleDevice("Thermostat")}
						onClick={() => console.log("Open Thermostat Modal")}
					/>
					<DeviceControl
						icon={faTv}
						name="电视"
						isChecked={devices.TV}
						onToggle={() => toggleDevice("TV")}
						onClick={() => setIsTVModalOpen(true)} // 点击电视设备时打开模态框
					/>
					<DeviceControl
						icon={faLightbulb}
						name="灯光"
						isChecked={devices.Light}
						onToggle={() => toggleDevice("Light")}
						onClick={() => console.log("Open Light Modal")}
					/>
					<DeviceControl
						icon={faVolumeUp}
						name="智能音响"
						isChecked={devices.Speaker}
						onToggle={() => toggleDevice("Speaker")}
						onClick={() => console.log("Open Speaker Modal")}
					/>
					<DeviceControl
						icon={faBox}
						name="冰箱"
						isChecked={devices.Fridge}
						onToggle={() => toggleDevice("Fridge")}
						onClick={() => console.log("Open Fridge Modal")}
					/>
					<DeviceControl
						icon={faTemperatureHigh}
						name="地暖"
						isChecked={devices.FloorHeating}
						onToggle={() => toggleDevice("FloorHeating")}
						onClick={() => console.log("Open Floor Heating Modal")}
					/>
					<DeviceControl
						icon={faWind}
						name="窗帘"
						isChecked={devices.Curtains}
						onToggle={() => toggleDevice("Curtains")}
						onClick={() => console.log("Open Curtains Modal")}
					/>
					<DeviceControl
						icon={faUtensils}
						name="电饭煲"
						isChecked={devices.RiceCooker}
						onToggle={() => toggleDevice("RiceCooker")}
						onClick={() => console.log("Open Rice Cooker Modal")}
					/>
					<DeviceControl
						icon={faHotTub}
						name="热水器"
						isChecked={devices.WaterHeater}
						onToggle={() => toggleDevice("WaterHeater")}
						onClick={() => console.log("Open Water Heater Modal")}
					/>
					<DeviceControl
						icon={faFan}
						name="电风扇"
						isChecked={devices.Fan}
						onToggle={() => toggleDevice("Fan")}
						onClick={() => console.log("Open Fan Modal")}
					/>
					<DeviceControl
						icon={faLock}
						name="智能门锁"
						isChecked={devices.SmartLock}
						onToggle={() => toggleDevice("SmartLock")}
						onClick={() => console.log("Open Smart Lock Modal")}
					/>
				</div>
			</div>
			<TVModal isOpen={isTVModalOpen} onClose={() => setIsTVModalOpen(false)} /> {/* 渲染电视模态框 */}
		</div>
	);
};

export default DevicePage;