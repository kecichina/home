import React from 'react';
import PageCarousel from '@/components/PageCarousel';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: "2024国际塔格糖技术研讨会",
    date: "2024-10-15",
    location: "北京国际会议中心",
    description: "本次研讨会汇聚了全球塔格糖领域的顶尖专家学者，共同探讨塔格糖在健康产业中的创新应用与未来发展趋势。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=International+symposium+on+tagatose+technology+2024&sign=393660222dc37da8627f683c83bb71a0"
  },
  {
    id: 2,
    title: "生物科技产业博览会",
    date: "2024-06-20",
    location: "上海国家会展中心",
    description: "协会组织会员单位参加生物科技产业博览会，展示了最新的塔格糖产品和技术，吸引了众多国内外客商关注。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Biotechnology+industry+exhibition+2024&sign=ce63c0c931eb2e838b38eb49d6e95597"
  },
  {
    id: 3,
    title: "塔格糖应用技术培训",
    date: "2024-04-10",
    location: "武汉生物技术研究院",
    description: "为期三天的塔格糖应用技术培训，内容涵盖塔格糖在食品、保健品、医药等领域的应用，共有120余名技术人员参加。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Tagatose+application+technology+training&sign=2656aceaee7426cb5f24567d0c60d062"
  },
  {
    id: 4,
    title: "健康产业发展论坛",
    date: "2024-01-18",
    location: "广州白云国际会议中心",
    description: "协会主办的健康产业发展论坛，围绕\"创新生物科技，引领健康未来\"主题展开深入讨论，为行业发展提供新思路。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Health+industry+development+forum&sign=fd58f9f6e031abd1575b0fda4d9e60ca"
  }
];

const ActivityHighlights = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+conference+with+international+participants&sign=cb7a14c24fcccbe8486f979fca492ba2",
            alt: "协会国际会议活动"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+members+training+workshop+in+classroom&sign=6a8c2375696a690c272079944668744b",
            alt: "协会会员培训 workshop"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+exhibition+booth+at+industry+trade+show&sign=c82a539d8afc2b522e94c6d4132420e5",
            alt: "协会在行业展会上的展位"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">协会活动风采</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={activity.imageUrl} 
                alt={activity.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {activity.date}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <i className="fa-solid fa-map-marker-alt mr-2"></i>
                {activity.location}
              </div>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center">
                查看活动详情
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
          查看更多活动
          <i className="fa-solid fa-calendar-alt ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ActivityHighlights;