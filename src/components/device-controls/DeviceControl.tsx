import React from 'react';
import Button from '../ui/button';
import { Switch } from "@/components/ui/switch";

interface DeviceControlProps {
	icon: string;
	name: string;
	isChecked: boolean;
	onToggle: () => void;
	onClick: () => void;
}

const DeviceControl: React.FC<DeviceControlProps> = ({ icon, name, isChecked, onToggle, onClick }) => {
	return (
		<div className="relative">
			<Button variant="ghost" className="!rounded-button w-full bg-[#c2dbc2] p-8" onClick={onClick}>
				<div className="flex justify-between items-center w-full">
					<div className="flex items-center">
						<i className={`fas ${icon} text-[#2d5a27] mr-4 text-2xl`}></i>
						<span className="text-lg">{name}</span>
					</div>
					<Switch checked={isChecked} onChange={onToggle} className="data-[state=checked]:bg-[#2d5a27]" />
				</div>
			</Button>
		</div>
	);
};

export default DeviceControl;