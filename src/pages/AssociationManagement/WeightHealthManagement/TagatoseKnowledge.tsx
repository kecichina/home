import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const TagatoseKnowledge = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tagatose+natural+sugar+alternative+health+benefits&sign=429a5b24529e38d052382bb599110961",
            alt: "塔格糖天然甜味剂健康益处"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tagatose+production+process+biotechnology&sign=3ec999fc2903dfb4ced6f8e053ba9629",
            alt: "塔格糖生产工艺"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Food+products+with+tagatose+ingredient&sign=c950f6d61c379af5ba64f1ed8bdc319e",
            alt: "含塔格糖成分的食品"
          }
        ]}
        height="300px"
      />
      
      <h3 className="text-xl font-bold text-gray-900 mb-6">塔格糖知识分享</h3>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">什么是塔格糖？</h4>
          <p className="text-gray-700 mb-4">
            塔格糖是一种天然存在的稀有单糖，最初从牛奶中发现。它具有与蔗糖相似的甜味，但热量仅为蔗糖的三分之一，升糖指数(GI)为0，不会引起血糖波动。
          </p>
          <p className="text-gray-700">
            塔格糖通过生物转化技术生产，具有良好的热稳定性和保湿性，是理想的低热量甜味剂，广泛应用于食品、饮料和保健品中。
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">塔格糖的健康益处</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <div>
                <span className="font-medium">低热量特性</span>
                <p className="text-sm mt-1">热量仅为蔗糖的33%，使用后碳水热量仅为原来的25%</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <div>
                <span className="font-medium">不影响血糖</span>
                <p className="text-sm mt-1">升糖指数(GI)为0，适合糖尿病患者食用</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <div>
                <span className="font-medium">促进肠道健康</span>
                <p className="text-sm mt-1">可作为益生元，促进肠道有益菌生长</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <div>
                <span className="font-medium">抗龋齿特性</span>
                <p className="text-sm mt-1">不被口腔细菌代谢，不会导致蛀牙</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <div>
                <span className="font-medium">促进GLP-1分泌</span>
                <p className="text-sm mt-1">可刺激胰高血糖素样肽-1分泌，帮助控制食欲</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">塔格糖在体重管理中的应用</h4>
          <p className="text-gray-700 mb-4">
            塔格糖在体重管理方面具有显著优势，主要体现在以下几个方面：
          </p>
          <ol className="space-y-3 text-gray-700 list-decimal list-inside">
            <li>
              <span className="font-medium">热量减少：</span>
              塔格糖仅提供蔗糖25%的碳水热量，可显著降低总能量摄入
            </li>
            <li>
              <span className="font-medium">增强饱腹感：</span>
              通过促进GLP-1分泌，延长饱腹感，减少总食物摄入量
            </li>
            <li>
              <span className="font-medium">不影响血糖：</span>
              避免血糖波动导致的饥饿感和食欲亢进
            </li>
            <li>
              <span className="font-medium">心理满足：</span>
              提供与蔗糖相似的甜味体验，满足对甜食的渴望，减少减肥期间的挫败感
            </li>
          </ol>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">塔格糖的适宜摄入量</h4>
          <p className="text-gray-700 mb-4">
            根据相关研究，每日摄入15-20克塔格糖是安全的，不会引起肠胃不适。对于体重管理人群，建议：
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <i className="fa-solid fa-angle-right text-blue-500 mt-1 mr-2"></i>
              <span>替代日常饮食中的部分蔗糖，逐步适应口味变化</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-angle-right text-blue-500 mt-1 mr-2"></i>
              <span>在咖啡、茶、烘焙食品中使用塔格糖替代传统糖类</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-angle-right text-blue-500 mt-1 mr-2"></i>
              <span>选择含塔格糖的健康食品和饮料作为零食</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-angle-right text-blue-500 mt-1 mr-2"></i>
              <span>结合均衡饮食和适量运动，达到最佳体重管理效果</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TagatoseKnowledge;