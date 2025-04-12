// DevicePage.tsx
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
import DeviceControl from "@/components/device-controls/DeviceControl";
import TVModal from "../components/modals/TVModal";
import FridgeModal from "../components/modals/FridgeModal";
import LightModal from "../components/modals/LightModal";
import ThermostatModal from "../components/modals/ThermostatModal";
import MusicPlayerModal from "../components/modals/MusicPlayerModal";
import SmartLockModal from "../components/modals/SmartLockModal";
import CurtainModal from "../components/modals/CurtainModal"; // 引入窗帘模块

const DevicePage: React.FC = () => {
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
	const [isTVModalOpen, setIsTVModalOpen] = useState(false);
	const [isFridgeModalOpen, setIsFridgeModalOpen] = useState(false);
	const [isLightModalOpen, setIsLightModalOpen] = useState(false);
	const [isThermostatModalOpen, setIsThermostatModalOpen] = useState(false);
	const [isSpeakerModalOpen, setIsSpeakerModalOpen] = useState(false);
	const [isSmartLockModalOpen, setIsSmartLockModalOpen] = useState(false);
	const [isCurtainModalOpen, setIsCurtainModalOpen] = useState(false); // 添加窗帘模态框状态

	useEffect(() => {
		localStorage.setItem("devicesStatus", JSON.stringify(devices));
	}, [devices]);

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
						onClick={() => setIsThermostatModalOpen(true)}
					/>
					<DeviceControl
						icon={faTv}
						name="电视"
						isChecked={devices.TV}
						onToggle={() => toggleDevice("TV")}
						onClick={() => setIsTVModalOpen(true)}
					/>
					<DeviceControl
						icon={faLightbulb}
						name="灯光"
						isChecked={devices.Light}
						onToggle={() => toggleDevice("Light")}
						onClick={() => setIsLightModalOpen(true)}
					/>
					<DeviceControl
						icon={faVolumeUp}
						name="智能音响"
						isChecked={devices.Speaker}
						onToggle={() => toggleDevice("Speaker")}
						onClick={() => setIsSpeakerModalOpen(true)}
					/>
					<DeviceControl
						icon={faBox}
						name="冰箱"
						isChecked={devices.Fridge}
						onToggle={() => toggleDevice("Fridge")}
						onClick={() => setIsFridgeModalOpen(true)}
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
						onClick={() => setIsCurtainModalOpen(true)} // 点击时打开窗帘模态框
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
						onClick={() => setIsSmartLockModalOpen(true)}
					/>
				</div>
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
			<MusicPlayerModal
				showMusicDialog={isSpeakerModalOpen}
				setShowMusicDialog={setIsSpeakerModalOpen}
				isSpeakerOn={devices.Speaker}
				toggleSpeaker={() => toggleDevice("Speaker")}
			/>
			<SmartLockModal
				showLockDialog={isSmartLockModalOpen}
				setShowLockDialog={setIsSmartLockModalOpen}
				isSmartLockOn={devices.SmartLock}
				toggleSmartLock={() => toggleDevice("SmartLock")}
			/>
			<CurtainModal
				isOpen={isCurtainModalOpen}
				onClose={() => setIsCurtainModalOpen(false)}
				toggleCurtain={() => toggleDevice("Curtains")}
				isCurtainOpen={devices.Curtains} // 传递当前窗帘状态
			/>
		</div>
	);
};
export default DevicePage;
