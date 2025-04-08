import React from 'react';
import Button from '../ui/button';

const Header: React.FC = () => {
	return (
		<header className="flex items-center justify-between p-4 border-b border-[#c4b7a6]">
			<div className="flex items-center space-x-2">
				<span className="text-xl font-bold">SmartHome</span>
				<i className="fas fa-bars ml-4 text-gray-400"></i>
			</div>
			<div className="flex items-center space-x-4">
				<i className="fas fa-question-circle text-gray-600"></i>
				<i className="fas fa-envelope text-gray-600"></i>
				<i className="fas fa-bell text-gray-600"></i>
			</div>
		</header>
	);
};

export default Header;