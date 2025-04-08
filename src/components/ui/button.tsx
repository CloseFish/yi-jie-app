import React from 'react';

interface ButtonProps {
  variant?: 'ghost' | 'default';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void; // 添加 onMouseDown 属性
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', className, onClick, children, style, onMouseDown }) => {
  return (
    <button
      className={`${variant === 'ghost' ? 'bg-transparent' : 'bg-blue-500 text-white'
        } ${className}`}
      onClick={onClick}
      style={style}
      onMouseDown={onMouseDown}
    >
      {children}
    </button>
  );
};

export default Button;
