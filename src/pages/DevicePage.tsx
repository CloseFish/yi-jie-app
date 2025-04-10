// DevicePage.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
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
import {
	DndContext,
	closestCenter,
	useSensor,
	useSensors,
	PointerSensor,
	TouchSensor
} from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Device {
	name: string;
	icon: any;
	status: boolean;
}

const DevicePage: React.FC = () => {
	const [devices, setDevices] = useState<Device[]>([
		{ name: "恒温器", icon: faSnowflake, status: true },
		{ name: "电视", icon: faTv, status: false },
		{ name: "灯光", icon: faLightbulb, status: true },
		{ name: "智能音响", icon: faVolumeUp, status: false },
		{ name: "冰箱", icon: faBox, status: true },
		{ name: "地暖", icon: faTemperatureHigh, status: true },
		{ name: "窗帘", icon: faWind, status: false },
		{ name: "电饭煲", icon: faUtensils, status: true },
		{ name: "热水器", icon: faHotTub, status: true },
		{ name: "电风扇", icon: faFan, status: false },
		{ name: "智能门锁", icon: faLock, status: true },
	]);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: { delay: 300, tolerance: 5 }
		}),
		useSensor(TouchSensor, {
			activationConstraint: { delay: 300, tolerance: 5 }
		})
	);

	const handleDragEnd = (event: any) => {
		const { active, over } = event;
		if (active.id !== over.id) {
			setDevices((prev) => {
				const oldIndex = prev.findIndex((device) => device.name === active.id);
				const newIndex = prev.findIndex((device) => device.name === over.id);
				return arrayMove(prev, oldIndex, newIndex);
			});
		}
	};

	const toggleDeviceStatus = (deviceName: string) => {
		setDevices((prev) => {
			return prev.map((device) => {
				if (device.name === deviceName) {
					return { ...device, status: !device.status };
				}
				return device;
			});
		});
	};

	return (
		<div className="min-h-screen bg-[#f0f5f0] text-gray-800">
			<div className="flex-1 p-8 bg-[#F0F5F0]">
				<h1 className="text-2xl font-bold">设备</h1>
				<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
					<SortableContext
						items={devices.map((device) => device.name)}
						strategy={rectSortingStrategy}
					>
						<div className="grid grid-cols-3 gap-6">
							{devices.map((device) => (
								<SortableDevice
									key={device.name}
									id={device.name}
									device={device}
									onStatusChange={() => toggleDeviceStatus(device.name)}
								/>
							))}
						</div>
					</SortableContext>
				</DndContext>
			</div>
		</div>
	);
};

interface SortableDeviceProps {
	id: string;
	device: Device;
	onStatusChange: () => void;
}

const SortableDevice: React.FC<SortableDeviceProps> = ({ id, device, onStatusChange }) => {
	const switchRef = useRef<HTMLDivElement>(null);
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id });

	const isClickOnSwitch = (e: React.MouseEvent) => {
		if (!switchRef.current) return false;
		return switchRef.current.contains(e.target as Node);
	};

	return (
		<Card
			ref={setNodeRef}
			style={{
				transform: CSS.Transform.toString(transform),
				transition,
				cursor: 'grab',
			}}
			{...attributes}
			className="p-8 bg-[#C2DBC2] border-none"
			{...listeners}
			onClick={(e) => {
				if (isClickOnSwitch(e)) {
					e.stopPropagation();
					onStatusChange();
				}
			}}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-6">
					<div className="w-16 h-16 rounded-full bg-[#2D5A27] bg-opacity-10 flex items-center justify-center">
						<FontAwesomeIcon icon={device.icon} className="text-[#2D5A27] text-2xl" />
					</div>
					<span className="font-bold text-xl text-[#1F2937]">{device.name}</span>
				</div>
				<div ref={switchRef} className="cursor-pointer" onClick={(e) => e.stopPropagation()}>
					<div className={`w-12 h-6 rounded-full bg-gray-300 transition-colors duration-300 ease-in-out ${device.status ? 'bg-blue-500' : ''}`}>
						<div className={`w-6 h-6 rounded-full bg-white transition-transform duration-300 ease-in-out transform ${device.status ? 'translate-x-6' : ''}`}></div>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default DevicePage;