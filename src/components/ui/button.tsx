import React from 'react';

interface ButtonProps {
  variant?: 'ghost' | 'default' | 'outline'; // 添加 'outline' 到 variant 类型定义
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean; // 添加 disabled 属性
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, onClick, children, style, onMouseDown, disabled = false }) => {
  const variantClass = variant === 'ghost'
    ? 'bg-transparent'
    : variant === 'outline'
      ? 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100'
      : 'bg-blue-500 text-white';

  return (
    <button
      className={`${variantClass} ${className}`}
      onClick={onClick}
      style={style}
      onMouseDown={onMouseDown}
      disabled={disabled} // 添加 disabled 属性
    >
      {children}
    </button>
  );
};

export default Button;
