// 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const App: React.FC = () => {
	const swiperModules = [Pagination, Autoplay];
	const courseCategories = [
		{ name: '编程开发', icon: 'fa-solid fa-code' },
		{ name: '设计创意', icon: 'fa-solid fa-palette' },
		{ name: '商业财经', icon: 'fa-solid fa-chart-line' },
		{ name: '语言学习', icon: 'fa-solid fa-language' },
		{ name: '职业技能', icon: 'fa-solid fa-briefcase' },
	];
	const featuredCourses = [
		{
			id: 1,
			title: '人工智能与机器学习基础',
			teacher: '张教授',
			price: '¥299',
			students: 1280,
			progress: 65,
			image: 'https://ai-public.mastergo.com/ai/img_res/c6180953df7dd62b42699203f675ee2c.jpg'
		},
		{
			id: 2,
			title: 'UI/UX 设计实战课程',
			teacher: '李设计师',
			price: '¥399',
			students: 960,
			progress: 45,
			image: 'https://ai-public.mastergo.com/ai/img_res/fe18afe494b39dcd52c0d7c1ea462489.jpg'
		},
		{
			id: 3,
			title: '数据分析与可视化',
			teacher: '王数据专家',
			price: '¥499',
			students: 750,
			progress: 30,
			image: 'https://ai-public.mastergo.com/ai/img_res/cf9e13abfdb1291b9b0cb5e324dff5ff.jpg'
		}
	];
	const onlineFriends = [
		{ name: '陈思思', avatar: 'https://ai-public.mastergo.com/ai/img_res/072a2559425b7b76df438f4377e64aeb.jpg' },
		{ name: '刘明远', avatar: 'https://ai-public.mastergo.com/ai/img_res/0554b488a332ed9d70d3acdc0fd5d110.jpg' },
		{ name: '赵雅芝', avatar: 'https://ai-public.mastergo.com/ai/img_res/f5379a8e04ae282b2f346f4506ac50c1.jpg' },
	];
	return (
		<div className="min-h-screen bg-[#F8FAFC]">
			{/* 顶部导航 */}
			<nav className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm z-50">
				<div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
					<div className="flex items-center gap-2">
						<i className="fa-solid fa-graduation-cap text-2xl text-blue-500"></i>
						<span className="text-xl font-bold">智慧学堂</span>
					</div>
					<div className="flex items-center space-x-8">
						<a href="#" className="text-gray-700 hover:text-blue-500">课程</a>
						<a href="#" className="text-gray-700 hover:text-blue-500">作业</a>
						<a href="#" className="text-gray-700 hover:text-blue-500">资源</a>
						<a href="#" className="text-gray-700 hover:text-blue-500">讨论</a>
					</div>
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="icon" className="!rounded-button">
							<i className="fa-solid fa-bell text-gray-600"></i>
						</Button>
						<Avatar className="h-8 w-8">
							<AvatarImage src="https://ai-public.mastergo.com/ai/img_res/be053ea0ba6e64450a00e7425e871567.jpg" />
						</Avatar>
					</div>
				</div>
			</nav>
			<div className="pt-16 flex">
				{/* 左侧边栏 */}
				<div className="w-64 fixed left-0 top-16 bottom-0 bg-gradient-to-b from-blue-50 to-indigo-50 border-r border-blue-100">
					<ScrollArea className="h-full">
						<div className="p-4">
							<div className="mb-6">
								<h3 className="text-sm font-semibold text-gray-500 mb-3">课程分类</h3>
								{courseCategories.map((category, index) => (
									<Button
										key={index}
										variant="ghost"
										className="w-full justify-start mb-2 !rounded-button hover:bg-blue-100/50"
									>
										<i className={`${category.icon} mr-2 text-gray-500`}></i>
										{category.name}
									</Button>
								))}
							</div>
							<div className="mb-6">
								<h3 className="text-sm font-semibold text-gray-500 mb-3">学习进度</h3>
								<div className="space-y-4">
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span>本周学习时长</span>
											<span className="text-blue-500">12.5 小时</span>
										</div>
										<Progress value={65} className="h-2 bg-blue-100" />
									</div>
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span>课程完成率</span>
											<span className="text-blue-500">75%</span>
										</div>
										<Progress value={75} className="h-2" />
									</div>
								</div>
							</div>
							<div className="mb-6">
								<h3 className="text-sm font-semibold text-gray-500 mb-3">在线好友</h3>
								<div className="space-y-3">
									{onlineFriends.map((friend, index) => (
										<div key={index} className="flex items-center gap-3">
											<Avatar className="h-8 w-8">
												<AvatarImage src={friend.avatar} />
											</Avatar>
											<span className="text-sm">{friend.name}</span>
											<span className="w-2 h-2 bg-green-500 rounded-full ml-auto"></span>
										</div>
									))}
								</div>
							</div>
							<div className="mb-6">
								<h3 className="text-sm font-semibold text-gray-500 mb-3">待完成任务</h3>
								<div className="space-y-2">
									<div className="p-3 rounded-lg bg-white/80 shadow-sm mb-3">
										<div className="text-sm font-medium mb-1 text-blue-800">Python 期末作业</div>
										<div className="text-xs text-blue-600">截止日期：2024-02-20</div>
									</div>
									<div className="p-3 rounded-lg bg-white/80 shadow-sm">
										<div className="text-sm font-medium mb-1 text-blue-800">UI 设计项目提交</div>
										<div className="text-xs text-blue-600">截止日期：2024-02-22</div>
									</div>
								</div>
							</div>
						</div>
					</ScrollArea>
				</div>
				{/* 主要内容区域 */}
				<div className="flex-1 ml-64 max-w-[calc(1440px-16rem)]">
					<div className="p-6">
						<div>
							<Swiper
								modules={swiperModules}
								pagination={{ clickable: true }}
								autoplay={{ delay: 5000 }}
								className="rounded-[32px] overflow-hidden mb-8 h-[300px] w-full shadow-lg"
							>
								{featuredCourses.map((course) => (
									<SwiperSlide key={course.id}>
										<div className="relative h-full">
											<img
												src={course.image}
												alt={course.title}
												className="w-full h-full object-cover"
											/>
											<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
												<h2 className="text-2xl font-bold mb-2">{course.title}</h2>
												<p className="text-sm opacity-90">{course.teacher} · {course.students} 名学员</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="grid grid-cols-3 gap-6">
							{featuredCourses.map((course) => (
								<Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
									<img
										src={course.image}
										alt={course.title}
										className="w-full h-40 object-cover"
									/>
									<div className="p-4">
										<h3 className="font-semibold mb-2">{course.title}</h3>
										<div className="flex items-center justify-between mb-3">
											<span className="text-sm text-gray-600">{course.teacher}</span>
											<Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">{course.price}</Badge>
										</div>
										<Progress value={course.progress} className="h-1 mb-2" />
										<div className="flex items-center justify-between text-sm text-gray-500">
											<span>{course.progress}% 完成</span>
											<span>{course.students} 名学员</span>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default App
