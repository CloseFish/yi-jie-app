import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Button from '../ui/button';

interface ChatModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div id="chatModal" className="fixed top-0 right-0 h-screen bg-[#E0EBE0] shadow-xl p-6 w-[480px] z-50 transition-all duration-300 transform translate-x-0 flex flex-col">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-lg font-medium">AI 助手</h3>
				<button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
	);
};

export default ChatModal;