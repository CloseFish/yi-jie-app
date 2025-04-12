// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const App: React.FC = () => {
	const navItems = [
		{ icon: "fas fa-th", text: "全部", color: "text-primary", active: true },
		{ icon: "fas fa-laptop", text: "B端设计", color: "text-blue-400" },
		{ icon: "fas fa-building", text: "大厂资源", color: "text-purple-400" },
		{ icon: "fas fa-book", text: "设计规范", color: "text-green-400" },
		{ icon: "fas fa-pencil-ruler", text: "线框原型", color: "text-yellow-400" },
		{ icon: "fas fa-paint-brush", text: "界面设计", color: "text-red-400" },
		{ icon: "fas fa-icons", text: "图标", color: "text-indigo-400" },
		{ icon: "fas fa-palette", text: "插画", color: "text-pink-400" },
		{ icon: "fas fa-mobile-alt", text: "样机", color: "text-orange-400" },
		{ icon: "fas fa-puzzle-piece", text: "插件广场", color: "text-teal-400" },
	];
	const tagItems = [
		{ text: "界面设计", isPrimary: true },
		{ text: "移动端" },
		{ text: "网页端" },
		{ text: "设计规范" },
		{ text: "图标" },
		{ text: "插画" },
		{ text: "组件" },
		{ text: "应用程序" },
		{ text: "UI" },
		{ text: "icon" },
	];
	const resourceCards = [
		{
			title: "企业级数据分析仪表盘设计系统",
			description: "完整的数据可视化解决方案，包含 48 个精美组件和 12 个典型页面模板",
			image: "https://ai-public.mastergo.com/ai/img_res/4c4a5c90a12f82263eeaf2a1c1de2cb7.jpg",
			author: {
				name: "陈志远",
				avatar: "https://ai-public.mastergo.com/ai/img_res/a38f208be4be47b0b05c3bd199af91ad.jpg"
			},
			views: "2.3k",
			likes: "168"
		},
		{
			title: "移动端通用设计组件库",
			description: "涵盖 iOS 和 Android 平台的完整组件库，支持暗黑模式",
			image: "https://ai-public.mastergo.com/ai/img_res/a23d35041852093a68c2fc2398833c2d.jpg",
			author: {
				name: "林雨晴",
				avatar: "https://ai-public.mastergo.com/ai/img_res/d7bef0b7a4d5c9bf7cce57671300060b.jpg"
			},
			views: "1.8k",
			likes: "142"
		},
		{
			title: "商务图标系统 2024",
			description: "专业的商务图标集合，包含 200+ 精致图标，支持多种格式导出",
			image: "https://ai-public.mastergo.com/ai/img_res/2b3f566f817021a64aa11c3bff62d4b4.jpg",
			author: {
				name: "张明远",
				avatar: "https://ai-public.mastergo.com/ai/img_res/2474d747d16015ee1de6f452a2b90501.jpg"
			},
			views: "3.1k",
			likes: "256"
		},
		{
			title: "现代企业官网设计模板",
			description: "完整的企业官网设计系统，包含 15 个精美页面模板",
			image: "https://ai-public.mastergo.com/ai/img_res/7e1a98fb262a3248d159559e1beae6bd.jpg",
			author: {
				name: "王思琪",
				avatar: "https://ai-public.mastergo.com/ai/img_res/cdaacf4fbefa352173c1563dccef2719.jpg"
			},
			views: "1.5k",
			likes: "98"
		},
		{
			title: "商务插画系统",
			description: "精美的商务场景插画集合，包含 50+ 主题插画",
			image: "https://ai-public.mastergo.com/ai/img_res/84bff828607008b3808d80b920f71719.jpg",
			author: {
				name: "李俊杰",
				avatar: "https://ai-public.mastergo.com/ai/img_res/dd4bb50988978e7a2ff4d36a6dbc1cc9.jpg"
			},
			views: "2.7k",
			likes: "189"
		},
		{
			title: "设计系统模板",
			description: "完整的设计系统文档模板，包含组件规范和使用指南",
			image: "https://ai-public.mastergo.com/ai/img_res/eb706831adc615d14ec4227c8f946629.jpg",
			author: {
				name: "郑美玲",
				avatar: "https://ai-public.mastergo.com/ai/img_res/e602b5e9c30c48dafee429497ed7f108.jpg"
			},
			views: "2.1k",
			likes: "145"
		},
		{
			title: "高级数据可视化组件库",
			description: "专业的数据图表组件库，支持多种数据展示形式和交互方式",
			image: "https://ai-public.mastergo.com/ai/img_res/1cc56d3f6fbb797370af44a033266833.jpg",
			author: {
				name: "吴子豪",
				avatar: "https://ai-public.mastergo.com/ai/img_res/6de2ada3d9fce3de8d2ca9be9029ff86.jpg"
			},
			views: "4.2k",
			likes: "312"
		},
		{
			title: "电商平台设计系统",
			description: "完整的电商平台设计方案，包含移动端和PC端组件库",
			image: "https://ai-public.mastergo.com/ai/img_res/f0f618b1971652778f1ab6e4917e7efc.jpg",
			author: {
				name: "黄雅琪",
				avatar: "https://ai-public.mastergo.com/ai/img_res/231ca5447fbe2a5fbc82f853b0a5e72e.jpg"
			},
			views: "3.8k",
			likes: "275"
		},
		{
			title: "3D 图标系统",
			description: "现代风格的3D图标集合，包含100+精美图标",
			image: "https://ai-public.mastergo.com/ai/img_res/5f4f970abcb41a095acc2d4720b099e0.jpg",
			author: {
				name: "刘子涵",
				avatar: "https://ai-public.mastergo.com/ai/img_res/b0ee460789b09f60aed79b8ad51069b7.jpg"
			},
			views: "5.1k",
			likes: "428"
		},
		{
			title: "后台管理系统模板",
			description: "专业的后台管理系统界面设计，支持多种主题切换",
			image: "https://ai-public.mastergo.com/ai/img_res/90ad2d6fb96e1478c54efc0da2839d30.jpg",
			author: {
				name: "孙文博",
				avatar: "https://ai-public.mastergo.com/ai/img_res/f436d93193568a9e8b88f80eec785c04.jpg"
			},
			views: "3.5k",
			likes: "246"
		},
		{
			title: "品牌设计系统",
			description: "完整的品牌视觉识别系统，包含标志、色彩、字体等规范",
			image: "https://ai-public.mastergo.com/ai/img_res/dc73970a3755fd81d00c07b90b0b913a.jpg",
			author: {
				name: "周思涵",
				avatar: "https://ai-public.mastergo.com/ai/img_res/eae561fe124f2b60043d354f13e1e21f.jpg"
			},
			views: "2.9k",
			likes: "198"
		},
		{
			title: "金融科技界面设计",
			description: "专业的金融科技产品界面设计，注重数据展示和用户体验",
			image: "https://ai-public.mastergo.com/ai/img_res/4620aa6a4e64e5d2c5ae9a08f2a1bc92.jpg",
			author: {
				name: "杨修远",
				avatar: "https://ai-public.mastergo.com/ai/img_res/475564deda4bafd5b59bf7e74cd03e68.jpg"
			},
			views: "4.7k",
			likes: "356"
		},
		{
			title: "医疗健康应用UI组件",
			description: "专业的医疗健康应用界面设计，包含完整的用户旅程",
			image: "https://ai-public.mastergo.com/ai/img_res/ac6c83aa9df86bacd57131bfa5c945ac.jpg",
			author: {
				name: "赵雪莉",
				avatar: "https://ai-public.mastergo.com/ai/img_res/4f7635180853bcf2c934ca6a42f8fc9f.jpg"
			},
			views: "3.2k",
			likes: "234"
		},
		{
			title: "教育平台设计系统",
			description: "现代教育平台的完整设计方案，支持多端适配",
			image: "https://ai-public.mastergo.com/ai/img_res/5ad863ae1ece185eafdbce22cfcd7250.jpg",
			author: {
				name: "韩雨佳",
				avatar: "https://ai-public.mastergo.com/ai/img_res/eadf42736e6d3a1b028b4b47bbde434d.jpg"
			},
			views: "2.8k",
			likes: "187"
		}
	];
	return (
		<div className="min-h-[1024px] bg-gray-50">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 flex items-center px-4">
				<div className="flex items-center">
					<img src="https://image-resource.mastergo.com/155154151567336/155154187224121/d3db486e3da537511f0374d1b9b09afb.png" alt="翌界设计" className="h-10 w-auto mr-3" />
					<span className="text-xl font-bold text-blue-500">翌界设计</span>
				</div>
				<div className="ml-auto flex items-center space-x-4">
					<div className="relative">
						<Input
							type="search"
							placeholder="搜索设计资源..."
							className="w-64 h-10 pl-10 text-sm bg-gray-100"
						/>
						<i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
					</div>
					<div className="flex items-center space-x-4">
						<Button variant="ghost" className="relative !rounded-button">
							<i className="far fa-bell text-gray-600"></i>
							<Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center">3</Badge>
						</Button>
						<Avatar className="w-8 h-8">
							<AvatarImage src="https://ai-public.mastergo.com/ai/img_res/86d7cbea7ffcb49e11fb505e040c1297.jpg" />
						</Avatar>
						<Button className="!rounded-button whitespace-nowrap bg-blue-500 text-white hover:bg-blue-600">返回工作台</Button>
					</div>
				</div>
			</header>
			{/* Sidebar Navigation */}
			<nav className="fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
				<div className="p-4">
					<div className="space-y-2">
						{navItems.map((item, index) => (
							<React.Fragment key={index}>
								{index === 0 && (
									<div className="bg-gray-50 rounded-lg p-3 space-y-2">
										<Button variant="ghost" className="w-full text-left px-3 py-2 text-sm text-primary bg-white !rounded-button">
											综合排序
										</Button>
										<Button variant="ghost" className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-white !rounded-button">
											最新发布
										</Button>
										<Button variant="ghost" className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-white !rounded-button">
											当前最热
										</Button>
									</div>
								)}
								<a
									href="#"
									className={`nav-item flex items-center px-4 py-3 rounded-lg transition-colors hover:bg-blue-500 hover:text-white ${item.active ? "bg-blue-500 text-white" : ""
										}`}
								>
									<i className={`${item.icon} ${item.active ? "text-white" : item.color} w-5 h-5 flex items-center justify-center group-hover:text-white`}></i>
									<span className="ml-3">{item.text}</span>
								</a>
							</React.Fragment>
						))}
					</div>
				</div>
			</nav>
			{/* Main Content */}
			<main className="ml-64 pt-16 min-h-screen bg-blue-50">
				<div className="p-6">
					{/* Tags Section */}
					<Card className="mb-6">
						<CardContent className="flex items-center space-x-6 py-4">
							{tagItems.map((tag, index) => (
								<a
									key={index}
									href="#"
									className={`px-3 py-1.5 rounded-lg transition-colors ${tag.isPrimary
											? "bg-blue-500 text-white font-medium"
											: "text-gray-600 hover:bg-blue-500 hover:text-white"
										}`}
								>
									{tag.text}
								</a>
							))}
						</CardContent>
					</Card>
					{/* Resource Cards Grid */}
					<div className="grid grid-cols-3 gap-6">
						{resourceCards.map((card, index) => (
							<Card key={index} className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
								<div className="aspect-w-16 aspect-h-9 bg-gray-100">
									<img
										src={card.image}
										alt="设计资源预览"
										className="w-full h-full object-cover"
									/>
								</div>
								<CardHeader className="p-4">
									<h3 className="text-lg font-medium mb-2">{card.title}</h3>
									<p className="text-gray-600 text-sm mb-4">{card.description}</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2">
											<Avatar className="w-8 h-8">
												<AvatarImage src={card.author.avatar} />
											</Avatar>
											<span className="text-sm text-gray-600">{card.author.name}</span>
										</div>
										<div className="flex items-center space-x-3 text-sm text-gray-500">
											<span><i className="far fa-eye mr-1"></i>{card.views}</span>
											<span><i className="far fa-heart mr-1"></i>{card.likes}</span>
										</div>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};
export default App
