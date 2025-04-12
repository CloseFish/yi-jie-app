import React, { useState } from 'react';

// 定义 TooltipContent 组件
const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div>{children}</div>;
};

// 定义 TooltipProvider 组件（简单示例，这里只是一个空壳，可根据需求扩展）
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <>{children}</>;
};

// 定义 TooltipTrigger 组件（简单示例，这里只是一个包裹子元素的容器，可根据需求扩展）
const TooltipTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <>{children}</>;
};

// 定义 Tooltip 组件的属性类型
interface TooltipProps {
	content: string;
	children: React.ReactNode;
}

// 定义 Tooltip 组件
const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleMouseEnter = () => {
		setIsVisible(true);
	};

	const handleMouseLeave = () => {
		setIsVisible(false);
	};

	return (
		<div className="relative inline-block">
			<div
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{children}
			</div>
			{isVisible && (
				<div className="absolute z-10 bg-gray-800 text-white text-sm rounded-md p-2 -mt-12 left-1/2 transform -translate-x-1/2">
					{content}
				</div>
			)}
		</div>
	);
};

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };