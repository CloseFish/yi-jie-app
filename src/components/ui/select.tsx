import React, { useState } from 'react';

interface SelectProps {
	defaultValue?: string;
	className?: string;
	children?: React.ReactNode;
}

interface SelectTriggerProps {
	className?: string;
	children?: React.ReactNode; // 添加 children 属性
}

interface SelectValueProps {
	children?: React.ReactNode;
}

interface SelectContentProps {
	children?: React.ReactNode;
}

interface SelectItemProps {
	value: string;
	children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ defaultValue, className, children }) => {
	const [selectedValue, setSelectedValue] = useState(defaultValue || '');

	return (
		<div className={className}>
			{children}
		</div>
	);
};

const SelectTrigger: React.FC<SelectTriggerProps> = ({ className, children }) => {
	return (
		<button className={className}>
			{children}
		</button>
	);
};

const SelectValue: React.FC<SelectValueProps> = ({ children }) => {
	return (
		<span>
			{children}
		</span>
	);
};

const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
	return (
		<div className="absolute bg-white shadow-md">
			{children}
		</div>
	);
};

const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
	return (
		<button onClick={() => console.log(`Selected: ${value}`)}>
			{children}
		</button>
	);
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };