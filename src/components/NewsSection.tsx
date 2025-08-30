import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// News data
const newsItems = [
  {
    id: 1,
    title: "国家卫健委启动为期三年的'体重管理年'行动",
    date: "2025-03-09",
    summary: "国家卫生健康委员会主任雷海潮宣布启动为期三年的'体重管理年'行动，塔格糖作为健康策略解决方案之一，其重要性愈发凸显。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Health+authority+announcement+weight+management+initiative&sign=ef5dce23ba0eb302c8e61c3c4af3fc6c"
  },
  {
    id: 2,
    title: "林路生物乳源塔格糖成为中阿友谊纽带",
    date: "2025-01-15",
    summary: "在国药集团的推进下，林路乳源塔格糖成为了重要的中阿（沙特阿拉伯）友谊纽带，促进了双边健康产业的交流与合作。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=International+cooperation+ceremony+between+China+and+Saudi+Arabia+health+industry&sign=346716a8d873d2470b060021d033da3a"
  },
  {
    id: 3,
    title: "乐百氏0蔗糖AD钙奶成功上市",
    date: "2024-11-28",
    summary: "乐百氏0蔗糖AD钙奶基于市场需求成功面世，采用塔格糖作为甜味剂，为消费者提供更健康的选择。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=New+calcium+milk+product+launch+event+with+zero+sucrose&sign=aae1bfac78155a60e88e61dc29c90408"
  }
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">新闻中心</h2>
  <div className="w-16 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              了解公司最新动态、行业资讯及塔格糖相关科普知识
            </p>
          </div>
          
          <Link 
            to="/news"
            className="hidden md:inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors mt-4 md:mt-0"
          >
            查看全部新闻
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 font-medium py-1 px-4 rounded-full text-sm">
                  {item.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link to={`/news/${item.id}`}>{item.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">{item.summary}</p>
                
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mt-auto"
                >
                  阅读全文
                  <i className="fa-solid fa-long-arrow-right ml-2"></i>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Link 
            to="/news"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            查看全部新闻
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;