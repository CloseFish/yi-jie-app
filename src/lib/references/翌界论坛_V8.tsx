// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from 'react';
import * as echarts from 'echarts';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const App: React.FC = () => {
	const followingUsers = [
		{ id: 1, name: '赵雨轩', avatar: 'https://ai-public.mastergo.com/ai/img_res/f2f103bb5168f45a8c07ed1e9242b577.jpg' },
		{ id: 2, name: '林思颖', avatar: 'https://ai-public.mastergo.com/ai/img_res/8e206b489b060f6c5ff80d0933e23ee0.jpg' },
		{ id: 3, name: '王梓晨', avatar: 'https://ai-public.mastergo.com/ai/img_res/839d257650dda67614a7ea16fd2cf500.jpg' },
		{ id: 4, name: '陈嘉怡', avatar: 'https://ai-public.mastergo.com/ai/img_res/d2a7661c1b35b8f6a87c65b52c503b31.jpg' },
		{ id: 5, name: '杨远航', avatar: 'https://ai-public.mastergo.com/ai/img_res/ce3747f5010de2a51c9f78b101be85a0.jpg' },
		{ id: 6, name: '周璐璐', avatar: 'https://ai-public.mastergo.com/ai/img_res/aaf62640f46b7e2164600a948b079e31.jpg' },
		{ id: 7, name: '孙明轩', avatar: 'https://ai-public.mastergo.com/ai/img_res/5d1ae120d5fd92f4f04e456a85db2309.jpg' },
		{ id: 8, name: '胡佳琪', avatar: 'https://ai-public.mastergo.com/ai/img_res/8d198a1bc60d8a6e6ac7600aa9a2e0ff.jpg' }
	];
	const posts = [
		{
			id: 1,
			title: '2024 UI 设计趋势：玻璃拟态设计的回归与创新',
			author: '张云溪',
			avatar: 'https://ai-public.mastergo.com/ai/img_res/e424019edca4de52eb7a17e3a96db876.jpg',
			cover: 'https://ai-public.mastergo.com/ai/img_res/7a5060a28c3d566fd8e15214f345c63d.jpg',
			likes: 328,
			comments: 45
		},
		{
			id: 2,
			title: '如何打造完美的用户界面：从理论到实践',
			author: '李思琪',
			avatar: 'https://ai-public.mastergo.com/ai/img_res/36944bf92da303dc7a92e5bdca8a3681.jpg',
			cover: 'https://ai-public.mastergo.com/ai/img_res/c7aecc2ba0c023727bbb1ca6bf039065.jpg',
			likes: 256,
			comments: 32
		},
		{
			id: 3,
			title: '移动端动效设计：提升用户体验的关键',
			author: '郑明远',
			avatar: 'https://ai-public.mastergo.com/ai/img_res/e8db9abd2908b8371f7033b460da7787.jpg',
			cover: 'https://ai-public.mastergo.com/ai/img_res/05b51c55a4ec4d696b9969e217c60661.jpg',
			likes: 423,
			comments: 67
		},
		{
			id: 4,
			title: '色彩心理学在产品设计中的应用',
			author: '黄晓萱',
			avatar: 'https://ai-public.mastergo.com/ai/img_res/a73c040a0d45402f28a53b81f09653db.jpg',
			cover: 'https://ai-public.mastergo.com/ai/img_res/264c3da726429e030d28788c22ccaf4a.jpg',
			likes: 567,
			comments: 89
		},
		{
			id: 5,
			title: '数据可视化设计：让数据更有说服力',
			author: '吴子墨',
			avatar: 'https://ai-public.mastergo.com/ai/img_res/3935ec0d44f20a477fbea2de26c949e0.jpg',
			cover: 'https://ai-public.mastergo.com/ai/img_res/5c42bffc28b22f68566c25bb4bcd7d99.jpg',
			likes: 398,
			comments: 56
		}
	];
	const hotTopics = [
		{ id: 1, title: 'AI 驱动的界面设计革新', hot: 9876 },
		{ id: 2, title: '2024 设计系统构建指南', hot: 8654 },
		{ id: 3, title: '移动端微交互设计技巧', hot: 7543 },
		{ id: 4, title: '数据可视化的艺术', hot: 6789 },
		{ id: 5, title: '可访问性设计实践', hot: 5432 }
	];
	return (
		<div className="min-h-screen bg-blue-50">
			{/* 顶部导航栏 */}
			<nav className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between fixed w-full z-50">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">翌</div>
					<h1 className="text-blue-600 text-3xl font-bold">翌界论坛</h1>
					<Button variant="ghost" className="!rounded-button text-lg">
						<i className="fas fa-calendar-check text-blue-600 mr-2 text-xl"></i>
						每日打卡
					</Button>
				</div>
				<div className="flex items-center gap-4 flex-1 max-w-2xl mx-6">
					<div className="relative flex-1">
						<Input
							type="text"
							placeholder="搜索感兴趣的内容"
							className="w-full pl-14 pr-4 py-4 text-xl border-2 border-blue-600 rounded-full bg-white"
						/>
						<i className="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
					</div>
				</div>
				<Button className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap text-lg px-6 py-2">
					<i className="fas fa-plus mr-2 text-xl"></i>
					发帖
				</Button>
			</nav>
			<div className="pt-16 flex">
				{/* 左侧边栏 */}
				<aside className="w-80 fixed h-[calc(100vh-5rem)] bg-white border-r border-gray-200 p-6 left-0">
					<div className="bg-white rounded-xl shadow-sm p-4 mb-4">
						<div className="flex flex-col gap-3">
							<Button variant="ghost" className="justify-start !rounded-button h-16 text-xl">
								<i className="fas fa-heart text-blue-600 w-10 text-2xl"></i>
								点赞
							</Button>
							<Button variant="ghost" className="justify-start !rounded-button h-16 text-xl">
								<i className="fas fa-star text-blue-600 w-10 text-2xl"></i>
								收藏
							</Button>
							<Button variant="ghost" className="justify-start !rounded-button h-16 text-xl">
								<i className="fas fa-file-alt text-blue-600 w-10 text-2xl"></i>
								我的帖子
							</Button>
							<Button variant="ghost" className="justify-start !rounded-button h-16 text-xl">
								<i className="fas fa-cog text-blue-600 w-10 text-2xl"></i>
								设置
							</Button>
						</div>
					</div>
					<div className="bg-white rounded-xl shadow-sm p-6">
						<h3 className="font-bold mb-6 text-2xl">热门话题</h3>
						<div className="space-y-6">
							{hotTopics.map((topic, index) => (
								<div key={topic.id} className="flex items-center gap-4">
									<span className="text-blue-600 w-8 text-2xl font-bold">{index + 1}</span>
									<div className="flex-1">
										<p className="text-xl font-medium">{topic.title}</p>
										<p className="text-lg text-gray-500">{topic.hot} 热度</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</aside>
				{/* 主内容区 */}
				<main className="ml-96 flex-1 p-6 max-w-[1024px] mx-auto">
					{/* 关注的用户 */}
					<div className="bg-white rounded-xl p-6 mb-6 mt-4">
						<h2 className="font-bold mb-6 text-xl">我关注的人</h2>
						<ScrollArea className="w-full whitespace-nowrap">
							<div className="flex gap-8">
								{followingUsers.map(user => (
									<div key={user.id} className="text-center">
										<Avatar className="w-20 h-20 mb-3">
											<AvatarImage src={user.avatar} alt={user.name} />
										</Avatar>
										<p className="text-base">{user.name}</p>
									</div>
								))}
							</div>
						</ScrollArea>
					</div>
					{/* 导航标签 */}
					<div className="flex gap-4 mb-6">
						{['关注', '所有投稿', '设计圈', '编码'].map((tab, index) => (
							<Button
								key={index}
								variant={index === 0 ? "default" : "ghost"}
								className={`!rounded-button text-lg px-8 py-3 ${index === 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}`}
							>
								{tab}
							</Button>
						))}
					</div>
					{/* 帖子列表 */}
					<div className="space-y-6">
						{posts.map(post => (
							<Card key={post.id} className="p-6">
								<div className="flex items-start gap-4">
									<Avatar className="w-12 h-12">
										<AvatarImage src={post.avatar} alt={post.author} />
									</Avatar>
									<div className="flex-1">
										<div className="flex justify-between items-start mb-3">
											<div>
												<h3 className="font-bold text-lg mb-1">{post.title}</h3>
												<p className="text-sm text-gray-500">{post.author}</p>
											</div>
											<Badge variant="secondary">
												<i className="fas fa-heart mr-1"></i>
												{post.likes}
											</Badge>
										</div>
										<div className="rounded-lg overflow-hidden mb-3">
											<img src={post.cover} alt="" className="w-full h-48 object-cover" />
										</div>
										<div className="flex gap-4">
											<Button variant="ghost" size="sm" className="!rounded-button">
												<i className="fas fa-heart mr-2"></i>
												点赞 {post.likes}
											</Button>
											<Button variant="ghost" size="sm" className="!rounded-button">
												<i className="fas fa-comment mr-2"></i>
												评论 {post.comments}
											</Button>
											<Button variant="ghost" size="sm" className="!rounded-button">
												<i className="fas fa-share mr-2"></i>
												分享
											</Button>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>
				</main>
			</div>
		</div>
	);
};
export default App
