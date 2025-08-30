import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const SocialResponsibility = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Corporate+social+responsibility+health+campaign+event&sign=87d3196faed8f9b931fddf8ad2259712",
            alt: "健康公益活动"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Environmental+protection+initiatives+in+biotechnology+factory&sign=1d40b3eed38ac0c132967a0890e841f4",
            alt: "环保生产举措"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Education+support+program+for+biotechnology+students&sign=f94fe958da9beebc185326774d5d2d8f",
            alt: "教育支持项目"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">社会责任</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Diabetes+prevention+public+health+campaign&sign=e63514092bbd9263d37063b6ce4dc701" 
              alt="健康公益" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-3">健康公益</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              开展代谢性疾病预防公益活动，普及健康饮食知识，提高公众健康意识。
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">糖尿病预防知识普及</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">健康饮食社区讲座</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">青少年健康体重管理计划</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Environmental+protection+biotechnology+factory&sign=20495ea37d475cc367edd437086dff7a" 
              alt="环境保护" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-3">环境保护</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              采用绿色生产工艺，减少能源消耗和废弃物排放，实现可持续发展。
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">清洁生产工艺</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">水资源循环利用</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">绿色能源应用</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Biotechnology+education+scholarship+program&sign=6d573e9aebf432c00ef165ffb675832f" 
              alt="教育支持" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-3">教育支持</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              设立生物科技教育奖学金，支持青年人才培养，推动行业创新发展。
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">高校奖学金计划</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">青年科研支持项目</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span className="text-sm text-gray-700">校企合作研发基地</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-16 max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 shadow-inner">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">塔格糖社会价值</h3>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            塔格糖作为一种天然存在的稀有单糖，具有众多优良特性，能够有效预防因饮食结构不合理所引发的各种疾病，对辅助治疗相关疾病也具有积极作用，为缓解当前7000亿医保支出压力提供了极具潜力的解决方案。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <p className="text-gray-700">升糖指数</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">1.5kcal/g</div>
              <p className="text-gray-700">低能量</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">155分钟</div>
              <p className="text-gray-700">GLP-1促进</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialResponsibility;