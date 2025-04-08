import React from 'react';
import Button from '@/components/ui/button';
import { Switch } from "@/components/ui/switch";

interface FridgeModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const FridgeModal: React.FC<FridgeModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E0EBE0] p-6 rounded-lg shadow-xl z-50">
			<div className="flex justify-between items-center mb-6">
				<span className="text-lg font-medium">冰箱控制面板</span>
				<div className="relative group">
					<Button
						className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white"
						onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
							const button = e.currentTarget;
							const startTime = new Date().getTime();
							const timer = setTimeout(() => {
								onClose();
							}, 3000);
							button.addEventListener('mouseup', () => {
								const endTime = new Date().getTime();
								if (endTime - startTime < 3000) {
									clearTimeout(timer);
								}
							}, { once: true });
						}}
					>
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
								if (tempSpan && tempSpan.textContent) {
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
								if (tempSpan && tempSpan.textContent) {
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
								if (tempSpan && tempSpan.textContent) {
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
								if (tempSpan && tempSpan.textContent) {
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
	);
};

export default FridgeModal;
