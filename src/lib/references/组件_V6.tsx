// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
const App: React.FC = () => {
	const [volume, setVolume] = useState<number[]>([50]);
	const [brightness, setBrightness] = useState<number[]>([75]);
	const [temperature, setTemperature] = useState<number[]>([24]);
	const [opacity, setOpacity] = useState<number[]>([100]);
	const countries = [
		"中国",
		"美国",
		"日本",
		"韩国",
		"英国",
		"法国",
		"德国",
		"加拿大",
		"澳大利亚",
		"新加坡",
	];
	return (
		<div className="min-h-screen bg-white p-8">
			<div className="mx-auto max-w-[1440px] space-y-12">
				{/* 按钮组件区域 */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold text-gray-900">按钮组件</h2>
					<div className="flex flex-wrap gap-4">
						<Button className="h-10 bg-blue-500 hover:bg-blue-600 !rounded-button">
							提交
						</Button>
						<Button className="h-10 bg-blue-500 hover:bg-blue-600 !rounded-button">
							下一步
						</Button>
						<Button
							variant="outline"
							className="h-10 text-blue-500 border-blue-500 hover:bg-blue-50 !rounded-button"
						>
							确认
						</Button>
						<Button
							variant="outline"
							className="h-10 text-blue-500 border-blue-500 hover:bg-blue-50 !rounded-button"
						>
							取消
						</Button>
					</div>
				</section>
				{/* 滑块组件区域 */}
				<section className="space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900">滑块组件</h2>
					<div className="space-y-6">
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<i className="fas fa-volume-up text-blue-500 w-6"></i>
								<Label>音量</Label>
								<span className="ml-auto font-medium">{volume}%</span>
							</div>
							<Slider
								value={volume}
								onValueChange={setVolume}
								max={100}
								step={1}
								className="w-full [&_[role=slider]]:bg-blue-500 [&_[class*=track-active]]:bg-blue-200"
							/>
						</div>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<i className="fas fa-sun text-blue-500 w-6"></i>
								<Label>亮度</Label>
								<span className="ml-auto font-medium">{brightness}%</span>
							</div>
							<Slider
								value={brightness}
								onValueChange={setBrightness}
								max={100}
								step={1}
								className="w-full [&_[role=slider]]:bg-blue-500 [&_[class*=track-active]]:bg-blue-200"
							/>
						</div>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<i className="fas fa-temperature-high text-blue-500 w-6"></i>
								<Label>温度</Label>
								<span className="ml-auto font-medium">{temperature}°C</span>
							</div>
							<Slider
								value={temperature}
								onValueChange={setTemperature}
								min={16}
								max={32}
								step={0.5}
								className="w-full [&_[role=slider]]:bg-blue-500 [&_[class*=track-active]]:bg-blue-200"
							/>
						</div>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<i className="fas fa-layer-group text-blue-500 w-6"></i>
								<Label>透明度</Label>
								<span className="ml-auto font-medium">{opacity}%</span>
							</div>
							<Slider
								value={opacity}
								onValueChange={setOpacity}
								max={100}
								step={1}
								className="w-full [&_[role=slider]]:bg-blue-500 [&_[class*=track-active]]:bg-blue-200"
							/>
						</div>
					</div>
				</section>
				{/* 开关组件区域 */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold text-gray-900">开关组件</h2>
					<div className="space-y-4">
						<div className="flex items-center gap-4">
							<Label htmlFor="notifications">消息通知</Label>
							<Switch id="notifications" />
						</div>
						<div className="flex items-center gap-4">
							<Label htmlFor="darkMode">深色模式</Label>
							<Switch id="darkMode" />
						</div>
						<div className="flex items-center gap-4">
							<Label htmlFor="autoUpdate">自动更新</Label>
							<Switch id="autoUpdate" />
						</div>
					</div>
				</section>
				{/* 输入框组件区域 */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold text-gray-900">输入框组件</h2>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="username">用户名</Label>
							<Input
								id="username"
								placeholder="请输入用户名"
								className="h-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">邮箱地址</Label>
							<Input
								id="email"
								type="email"
								placeholder="请输入邮箱地址"
								className="h-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">手机号码</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="请输入手机号码"
								className="h-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
					</div>
				</section>
				{/* 下拉菜单组件 */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold text-gray-900">下拉菜单组件</h2>
					<div className="space-y-2">
						<Label>选择国家/地区</Label>
						<Select>
							<SelectTrigger className="h-10 w-full">
								<SelectValue placeholder="请选择国家/地区" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{countries.map((country) => (
										<SelectItem key={country} value={country}>
											{country}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</section>
			</div>
		</div>
	);
};
export default App
