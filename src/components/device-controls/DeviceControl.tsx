import React, { forwardRef, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from '@/components/ui/switch'; // 假设这个 Switch 是你项目中已有的开关组件

interface DeviceControlProps {
	icon: any; // 可以根据具体情况细化类型
	name: string;
	isChecked: boolean;
	onToggle: () => void;
	onClick: () => void;
}

const DeviceControl = forwardRef<HTMLDivElement, DeviceControlProps>((props, ref) => {
	const switchRef = useRef<HTMLDivElement>(null);

	const handleClick = (e: React.MouseEvent) => {
		if (switchRef.current && switchRef.current.contains(e.target as Node)) {
			// 点击在开关上，只切换状态
			props.onToggle();
		} else {
			// 点击在其他区域，打开对应遥控
			props.onClick();
		}
	};

	return (
		<div
			ref={ref}
			onClick={handleClick}
			className="bg-[#c2dbc2] p-4 rounded-lg flex items-center justify-between cursor-pointer"
		>
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 rounded-full bg-[#C2DBC2] flex items-center justify-center text-[#2D5A27]">
					<FontAwesomeIcon icon={props.icon} />
				</div>
				<div>
					<div className="font-medium">{props.name}</div>
					<div className="text-xs text-gray-500">
						{props.isChecked ? '已开启' : '已关闭'}
					</div>
				</div>
			</div>
			<div ref={switchRef}>
				<Switch
					checked={props.isChecked}
					onCheckedChange={props.onToggle}
				/>
			</div>
		</div>
	);
});

export default DeviceControl;
