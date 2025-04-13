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
import CurtainModal from "../components/modals/CurtainModal";
import {
	DndContext,
	closestCenter,
	useSensors,
	useSensor,
	PointerSensor,
	TouchSensor,
	DragStartEvent,
	DragEndEvent
} from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable';

const DevicePage: React.FC = () => {
	const storedDevices = localStorage.getItem("devicesStatus");
	const initialDevices = storedDevices
		? JSON.parse(storedDevices)
		: {
			恒温器: false,
			电视: false,
			灯光: false,
			智能音响: false,
			冰箱: false,
			地暖: false,
			窗帘: false,
			电饭煲: false,
			热水器: false,
			电风扇: false,
			智能门锁: false,
		};

	const [devices, setDevices] = useState(initialDevices);
	const storedOrder = localStorage.getItem("deviceOrder");
	const initialOrder = storedOrder ? JSON.parse(storedOrder) : [
		"恒温器",
		"电视",
		"灯光",
		"智能音响",
		"冰箱",
		"地暖",
		"窗帘",
		"电饭煲",
		"热水器",
		"电风扇",
		"智能门锁",
	];
	const [deviceOrder, setDeviceOrder] = useState(initialOrder);

	const [isTVModalOpen, setIsTVModalOpen] = useState(false);
	const [isFridgeModalOpen, setIsFridgeModalOpen] = useState(false);
	const [isLightModalOpen, setIsLightModalOpen] = useState(false);
	const [isThermostatModalOpen, setIsThermostatModalOpen] = useState(false);
	const [isSpeakerModalOpen, setIsSpeakerModalOpen] = useState(false);
	const [isSmartLockModalOpen, setIsSmartLockModalOpen] = useState(false);
	const [isCurtainModalOpen, setIsCurtainModalOpen] = useState(false);

	const [draggingId, setDraggingId] = useState<string | null>(null);

	useEffect(() => {
		localStorage.setItem("devicesStatus", JSON.stringify(devices));
		localStorage.setItem("deviceOrder", JSON.stringify(deviceOrder));
	}, [devices, deviceOrder]);

	const toggleDevice = (deviceName: string, newValue?: boolean) => {
		const updatedDevices = {
			...devices,
			[deviceName]: newValue !== undefined ? newValue : !devices[deviceName],
		};
		setDevices(updatedDevices);
		try {
			localStorage.setItem("devicesStatus", JSON.stringify(updatedDevices));
		} catch (error) {
			console.error("Error saving devices:", error);
		}
	};

	const handleDragStart = (event: DragStartEvent) => {
		setDraggingId(event.active.id.toString());
	};

	const handleDragEnd = (event: DragEndEvent) => {
		setDraggingId(null);
		const { active, over } = event;
		if (over && active.id !== over.id) {
			const oldIndex = deviceOrder.findIndex((device: string) => device === active.id.toString());
			const newIndex = over ? deviceOrder.findIndex((device: string) => device === over.id.toString()) : -1;
			if (newIndex !== -1) {
				const newOrder = arrayMove(deviceOrder, oldIndex, newIndex);
				setDeviceOrder(newOrder);
				localStorage.setItem("deviceOrder", JSON.stringify(newOrder));
			}
		}
	};

	return (
		<div className="min-h-screen bg-[#f0f5f0] text-gray-800">
			<div className="flex-1 p-8">
				<h1 className="text-2xl font-bold">设备</h1>
				<div className="grid grid-cols-3 gap-6 mt-6">
					<DndContext
						collisionDetection={closestCenter}
						onDragStart={handleDragStart}
						onDragEnd={handleDragEnd}
						sensors={useSensors(
							useSensor(PointerSensor, {
								activationConstraint: {
									delay: 300, // 长按300ms触发拖拽
									tolerance: 5,
								},
							}),
							useSensor(TouchSensor, {
								activationConstraint: {
									delay: 300, // 长按300ms触发拖拽
									tolerance: 5,
								},
							})
						)}
					>
						<SortableContext
							items={deviceOrder}
							strategy={rectSortingStrategy}
						>
							{deviceOrder.map((deviceName: string, index: number) => {
								const deviceIcons: { [key: string]: any } = {
									恒温器: faSnowflake,
									电视: faTv,
									灯光: faLightbulb,
									智能音响: faVolumeUp,
									冰箱: faBox,
									地暖: faTemperatureHigh,
									窗帘: faWind,
									电饭煲: faUtensils,
									热水器: faHotTub,
									电风扇: faFan,
									智能门锁: faLock,
								};
								const icon = deviceIcons[deviceName];
								return (
									<DeviceControl
										key={deviceName}
										icon={icon}
										name={deviceName}
										isChecked={devices[deviceName]}
										onToggle={() => toggleDevice(deviceName)}
										onClick={() => {
											switch (deviceName) {
												case "电视":
													setIsTVModalOpen(true);
													break;
												case "冰箱":
													setIsFridgeModalOpen(true);
													break;
												case "灯光":
													setIsLightModalOpen(true);
													break;
												case "恒温器":
													setIsThermostatModalOpen(true);
													break;
												case "智能音响":
													setIsSpeakerModalOpen(true);
													break;
												case "智能门锁":
													setIsSmartLockModalOpen(true);
													break;
												case "窗帘":
													setIsCurtainModalOpen(true);
													break;
												default:
													console.log(`Open ${deviceName} Modal`);
											}
										}}
										isDragging={draggingId === deviceName}
									/>
								);
							})}
						</SortableContext>
					</DndContext>
				</div>
			</div>
			<TVModal
				isOpen={isTVModalOpen}
				onClose={() => setIsTVModalOpen(false)}
				toggleTV={() => toggleDevice("电视")}
			/>
			<FridgeModal
				isOpen={isFridgeModalOpen}
				onClose={() => setIsFridgeModalOpen(false)}
				toggleFridge={() => toggleDevice("冰箱")}
			/>
			<LightModal
				isOpen={isLightModalOpen}
				onClose={() => setIsLightModalOpen(false)}
				isLightOn={devices.灯光}
				setIsLightOn={(value) => toggleDevice("灯光", value)}
			/>
			<ThermostatModal
				isOpen={isThermostatModalOpen}
				onClose={() => setIsThermostatModalOpen(false)}
				isThermostatOn={devices.恒温器}
				toggleThermostat={() => toggleDevice("恒温器")}
			/>
			<MusicPlayerModal
				showMusicDialog={isSpeakerModalOpen}
				setShowMusicDialog={setIsSpeakerModalOpen}
				isSpeakerOn={devices.智能音响}
				toggleSpeaker={() => toggleDevice("智能音响")}
			/>
			<SmartLockModal
				showLockDialog={isSmartLockModalOpen}
				setShowLockDialog={setIsSmartLockModalOpen}
				isSmartLockOn={devices.智能门锁}
				toggleSmartLock={() => toggleDevice("智能门锁")}
			/>
			<CurtainModal
				isOpen={isCurtainModalOpen}
				onClose={() => setIsCurtainModalOpen(false)}
				toggleCurtain={() => toggleDevice("窗帘")}
				isCurtainOpen={devices.窗帘}
			/>
		</div>
	);
};

export default DevicePage;