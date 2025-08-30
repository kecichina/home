import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const trainingCourses = [
  {
    id: 1,
    title: "塔格糖生产工艺与技术应用",
    date: "2024-11-15 至 2024-11-17",
    location: "武汉生物技术研究院",
    instructor: "张儒林 博士",
    level: "中级",
    duration: "3天",
    seats: 120,
    enrolled: 86,
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Tagatose+production+technology+training&sign=c5bbfcb1d8a08a77226cdc9b497ae185"
  },
  {
    id: 2,
    title: "生物科技产品研发与创新",
    date: "2024-12-08 至 2024-12-09",
    location: "上海生物科技园",
    instructor: "李教授 研究员",
    level: "高级",
    duration: "2天",
    seats: 100,
    enrolled: 68,
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Biotechnology+product+development+training&sign=394db96de0fcba53f965a168afe509d2"
  },
  {
    id: 3,
    title: "健康食品配方设计与应用",
    date: "2025-01-18 至 2025-01-20",
    location: "广州健康产业园区",
    instructor: "王教授 高级工程师",
    level: "初级",
    duration: "3天",
    seats: 150,
    enrolled: 42,
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Health+food+formula+design+training&sign=563a835a6bf2fdf6507315598566da35"
  }
];

const MemberTraining = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional+training+workshop+for+association+members&sign=fb76c51684bf51c1f9c75bc3299c6357",
            alt: "会员专业培训 workshop"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Online+training+platform+for+association+membership&sign=b09ca0ad9ee3bccf2961c8182d4e437c",
            alt: "会员在线培训平台"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Hands-on+technical+training+in+biotechnology+laboratory&sign=1801b3c25d4e9ea2ac9c806f2ae4c0b1",
            alt: "生物技术实验室实操培训"
          }
        ]}
        height="350px"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-6">会员培训课程</h3>
      
      <div className="space-y-8">
        {trainingCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img 
                src={course.imageUrl} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-gray-900">{course.title}</h4>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {course.level}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <i className="fa-solid fa-calendar text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <p className="text-sm text-gray-500">培训日期</p>
                    <p className="font-medium text-gray-900">{course.date}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-map-marker-alt text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <p className="text-sm text-gray-500">培训地点</p>
                    <p className="font-medium text-gray-900">{course.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-user text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <p className="text-sm text-gray-500">授课讲师</p>
                    <p className="font-medium text-gray-900">{course.instructor}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-clock text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <p className="text-sm text-gray-500">培训时长</p>
                    <p className="font-medium text-gray-900">{course.duration}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{course.enrolled}</span> / {course.seats} 人已报名
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors">
                  立即报名
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 mb-6">往期培训回顾</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Previous+training+review+1&sign=8916c9f516efd429bbe7d4ccf1df6a69" 
              alt="往期培训" 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-1">塔格糖应用技术培训</h4>
              <p className="text-sm text-gray-500 mb-2">2024-04-10</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情</button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Previous+training+review+2&sign=d108995367b5d7459716d4352f42a49b" 
              alt="往期培训" 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-1">生物科技前沿技术研讨</h4>
              <p className="text-sm text-gray-500 mb-2">2024-02-25</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情</button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Previous+training+review+3&sign=35b8b1e814ae404e1b903c3c48ceac13" 
              alt="往期培训" 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-1">健康产业发展论坛</h4>
              <p className="text-sm text-gray-500 mb-2">2024-01-18</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberTraining;