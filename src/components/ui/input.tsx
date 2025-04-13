import React from 'react';

// 扩展 InputProps 接口，添加 value 和 onChange 属性
interface InputProps {
	type: string;
	placeholder: string;
	className?: string;
	value?: string; // 添加 value 属性，注意这里使用了可选属性 ?
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 明确 onChange 事件处理函数的参数类型
}

const Input: React.FC<InputProps> = ({ type, placeholder, className = '', value, onChange }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`${className} border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent`}
			value={value || ''} // 使用默认空字符串，避免 undefined 报错
			onChange={onChange}
		/>
	);
};

export default Input;