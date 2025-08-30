import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const CorporateHonors = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Corporate+awards+and+honors+display+wall+in+office+lobby&sign=fdaa54b66b5d96e38d00966f0ac84e7d",
            alt: "企业荣誉展示墙"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=ISO+certification+documents+and+quality+awards+displayed&sign=f18c6729775c3f7f6f456a6acd877397",
            alt: "ISO认证与质量奖项"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=National+high-tech+enterprise+certificate+display&sign=f18c13b5a7f257f3c51f7fd27fca635d",
            alt: "国家高新技术企业证书"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">企业荣誉</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-6">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=ISO+9001+certification+document+professional&sign=2895fffc74f96054003333995357ff91" 
              alt="ISO质量体系认证" 
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">ISO质量体系认证</h3>
            <p className="text-gray-600">国际标准化组织质量管理体系认证</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-6">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=FDA+registration+certificate+document&sign=4b1590dc1fea894cbbc2230fd3bf2ee2" 
              alt="FDA注册备案" 
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">FDA注册备案</h3>
            <p className="text-gray-600">美国食品药品监督管理局注册备案</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-6">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=National+high-tech+enterprise+certificate&sign=c889485ae4b532a7ff0a56604419192d" 
              alt="国家高新技术企业" 
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">国家高新技术企业</h3>
            <p className="text-gray-600">国家认定的高新技术企业资质</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-6">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Patent+certificate+document+legal+official&sign=04cc26d0198f86c4438e57bc34f94f06" 
              alt="28项专利技术" 
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">28项专利技术</h3>
            <p className="text-gray-600">塔格糖生产相关专利技术</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xl mr-4">
              <i className="fa-solid fa-trophy"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">中美医药协会特殊贡献奖</h4>
              <p className="text-sm text-gray-500">张儒林博士个人荣誉</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl mr-4">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">湖北省百人计划</h4>
              <p className="text-sm text-gray-500">张儒林博士个人荣誉</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl mr-4">
              <i className="fa-solid fa-medal"></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">武汉3551光谷人才计划</h4>
              <p className="text-sm text-gray-500">张儒林博士个人荣誉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateHonors;