import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Button from '../ui/button';

interface ChatModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	// 状态管理：聊天记录和输入框内容
	const [messages, setMessages] = useState([
		{ text: "请问有什么可以帮您？", isUser: false },
		{ text: "空调打开26度。", isUser: true },
	]);
	const [inputValue, setInputValue] = useState('');

	const handleSend = () => {
		if (inputValue.trim() === '') return; // 如果输入为空，不发送
		setMessages([...messages, { text: inputValue, isUser: true }]);
		setInputValue(''); // 清空输入框
	};

	return (
		<div id="chatModal" className="fixed top-0 right-0 h-screen bg-[#E0EBE0] shadow-xl p-6 w-[480px] z-50 transition-all duration-300 transform translate-x-0 flex flex-col">
			<div className="flex justify-between items-center mb-4">
				<h3 className="text-lg font-medium">AI 助手</h3>
				<button onClick={onClose} className="text-gray-500 hover:text-gray-700">
					<i className="fas fa-times"></i>
				</button>
			</div>
			<ScrollArea className="flex-1 pr-4 overflow-y-auto">
				<div className="space-y-4">
					{messages.map((message, index) => (
						<div key={index} className={`flex ${message.isUser ? 'justify-end' : ''}`}>
							<div
								className={`rounded-lg p-3 shadow-sm ${message.isUser ? 'bg-[#2D5A27] text-white' : 'bg-white text-[#1F2973]'
									}`}
							>
								<p>{message.text}</p>
							</div>
						</div>
					))}
				</div>
			</ScrollArea>
			<div className="border-t border-gray-200 pt-4">
				<div className="flex gap-2">
					<div className="relative flex-1">
						<input
							type="text"
							placeholder="输入消息..."
							className="w-full h-[44px] pl-10 pr-4 rounded-lg bg-white border-none text-sm"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<i className="fas fa-keyboard absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
					</div>
					<Button className="bg-[#2D5A27] hover:bg-[#1F4A1F] !rounded-button h-[44px] w-[44px]" onClick={handleSend}>
						<i className="fas fa-paper-plane"></i>
					</Button>
					<Button className="bg-[#2D5A27] hover:bg-[#1F4A1F] !rounded-button h-[44px] w-[44px]">
						<i className="fas fa-microphone"></i>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ChatModal;