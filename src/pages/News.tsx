import React, { useState } from 'react';
import PageCarousel from '@/components/PageCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// News data
const newsItems = [
  {
    id: 1,
    title: "国家卫健委启动为期三年的'体重管理年'行动",
    date: "2025-03-09",
    category: "政策动态",
    summary: "国家卫生健康委员会主任雷海潮宣布启动为期三年的'体重管理年'行动，塔格糖作为健康策略解决方案之一，其重要性愈发凸显。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Health+authority+announcement+weight+management+initiative&sign=ef5dce23ba0eb302c8e61c3c4af3fc6c"
  },
  {
    id: 2,
    title: "林路生物乳源塔格糖成为中阿友谊纽带",
    date: "2025-01-15",
    category: "公司新闻",
    summary: "在国药集团的推进下，林路乳源塔格糖成为了重要的中阿（沙特阿拉伯）友谊纽带，促进了双边健康产业的交流与合作。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=International+cooperation+ceremony+between+China+and+Saudi+Arabia+health+industry&sign=346716a8d873d2470b060021d033da3a"
  },
  {
    id: 3,
    title: "乐百氏0蔗糖AD钙奶成功上市",
    date: "2024-11-28",
    category: "产品动态",
    summary: "乐百氏0蔗糖AD钙奶基于市场需求成功面世，采用塔格糖作为甜味剂，为消费者提供更健康的选择。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=New+calcium+milk+product+launch+event+with+zero+sucrose&sign=aae1bfac78155a60e88e61dc29c90408"
  },
  {
    id: 4,
    title: "碳索科技参加国际生物科技产业博览会",
    date: "2024-10-18",
    category: "行业动态",
    summary: "碳索科技携最新塔格糖应用产品参加国际生物科技产业博览会，展示了公司在生物科技领域的创新成果。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Biotechnology+exhibition+booth+showcasing+tagatose+products&sign=9c1ce788e5134c636e8ff59854294b9f"
  },
  {
    id: 5,
    title: "塔格糖在代谢性疾病预防中的应用研究取得新进展",
    date: "2024-09-05",
    category: "科研动态",
    summary: "公司研究团队在塔格糖对代谢性疾病预防作用的研究中取得新进展，相关成果发表于国际知名期刊。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Scientific+research+laboratory+study+on+metabolic+diseases&sign=1d96c24b0d2951abee16fa85cfeaac59"
  },
  {
    id: 6,
    title: "碳索科技与越秀集团达成战略合作",
    date: "2024-07-22",
    category: "公司新闻",
    summary: "碳索科技与越秀集团乳业（抚顺）建立乳清废液生产塔格糖产线研发设计合作，拓展了塔格糖生产原料来源。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Strategic+cooperation+signing+ceremony+between+two+companies&sign=53bcf5465ac92c0b5f640705a2ee4ad2"
  }
];

// News categories
const categories = [
  { id: 'all', name: '全部新闻' },
  { id: 'company', name: '公司新闻' },
  { id: 'product', name: '产品动态' },
  { id: 'research', name: '科研动态' },
  { id: 'industry', name: '行业动态' },
  { id: 'policy', name: '政策动态' }
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter news based on category and search term
  const filteredNews = newsItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'company' && item.category === '公司新闻') ||
      (activeCategory === 'product' && item.category === '产品动态') ||
      (activeCategory === 'research' && item.category === '科研动态') ||
      (activeCategory === 'industry' && item.category === '行业动态') ||
      (activeCategory === 'policy' && item.category === '政策动态');
      
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=News+conference+for+biotechnology+company+announcement&sign=c39bb503f500ac019c93f6d58202d4d7",
            alt: "新闻发布会现场"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Industry+trade+show+exhibition+booth+display&sign=7c20f011e5a7e874d81c6638a7d1a098",
            alt: "行业展会现场"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=New+product+launch+event+with+media+coverage&sign=da6cec9f3bca4b74e75b55997b2592ad",
            alt: "新产品发布活动"
          }
        ]}
      />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">新闻中心</h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                了解碳索科技最新动态、产品信息及行业资讯
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            {/* Search and filter bar */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="relative flex-grow max-w-md">
                  <input
                    type="text"
                    placeholder="搜索新闻..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <i className="fa-solid fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* News list */}
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredNews.map((item) => (
                  <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {item.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-500 text-sm">{item.date}</span>
                      </div>
                      
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
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-search text-3xl text-gray-400"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">未找到相关新闻</h3>
                <p className="text-gray-600 mb-6">请尝试使用其他关键词或类别进行搜索</p>
                <button 
                  onClick={() => {setActiveCategory('all'); setSearchTerm('');}}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors"
                >
                  查看全部新闻
                </button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredNews.length > 0 && (
              <div className="mt-16 text-center">
                <nav className="inline-flex rounded-md shadow">
                  <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-l-lg">
                    <i className="fa-solid fa-chevron-left"></i>
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-blue-600 text-sm font-medium text-white">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </a>
                  <span className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    8
                  </a>
                  <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-lg">
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </nav>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;