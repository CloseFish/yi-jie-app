import React from "react";
import './styles.css';

const SmartPage = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<div className="flex-1 bg-cover bg-center left-background" style={{ backgroundImage: "url('https://source.unsplash.com/random/1280x720/?home')" }}>
				<div className="flex flex-col justify-center items-center h-full px-8 text-center text-white bg-black bg-opacity-25">
					{/* SmartHome 标题 */}
					<h1 className="text-5xl font-bold mb-4 tracking-wide" style={{ color: "#1F2937", textShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}>
						SmartHome
					</h1>
					{/* 中间文案 */}
					<h2 className="text-5xl font-bold mb-2 leading-relaxed" style={{ color: "#3D3D3D", textShadow: "0 0 5px rgba(0, 0, 0, 0.3)", fontFamily: 'AlimamaShuHeiTi' }}>
						让每个家庭都能享受
					</h2>
					{/* 底部文案 */}
					<h2 className="text-6xl font-bold mb-4 tracking-widest" style={{ color: "#2D5A27", textShadow: "0 0 5px rgba(0, 0, 0, 0.3)", fontFamily: 'AlimamaShuHeiTi' }}>
						简单 方便 舒适
					</h2>
				</div>
			</div>
			<div className="w-1/3 bg-green-100 flex flex-col justify-center items-center p-8">
				<h2 className="text-3xl font-bold mb-8">登录</h2>
				<form className="w-full space-y-4">
					<div>
						<label htmlFor="phone-email" className="block text-gray-800 text-sm font-bold mb-2">手机号/邮箱</label>
						<input type="text" id="phone-email" className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
					</div>
					<div>
						<label htmlFor="password" className="block text-gray-800 text-sm font-bold mb-2">密码</label>
						<input type="password" id="password" className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
					</div>
					<button type="submit" className="w-full px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">登录</button>
				</form>
				<div className="mt-8">
					<a href="#" className="text-sm text-gray-600 hover:text-gray-800">忘记密码?</a>
				</div>
				<div className="mt-8">
					<p className="text-sm text-gray-600">还没有账号? <a href="#" className="text-blue-500 hover:text-blue-700">去注册</a></p>
				</div>
			</div>
		</div>
	);
};

export default SmartPage;