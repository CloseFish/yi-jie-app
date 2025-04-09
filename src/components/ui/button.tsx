import React from 'react';

interface ButtonProps {
  variant?: 'ghost' | 'default';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean; // 添加 disabled 属性
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, onClick, children, style, onMouseDown, disabled = false }) => {
  return (
    <button
      className={`${variant === 'ghost' ? 'bg-transparent' : 'bg-blue-500 text-white'
        } ${className}`}
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