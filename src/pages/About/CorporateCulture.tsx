import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const CorporateCulture = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern+office+environment+with+team+collaboration+culture&sign=3507af2b37d4b91a72b60b4fee08696f",
            alt: "团队协作文化"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Corporate+culture+values+display+wall+in+office&sign=aa975794a3632ef242bd2e22790d8c57",
            alt: "企业文化价值观展示"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Company+team-building+activity+outdoor+collaboration&sign=0ff23f2b247ce0e412436751d71e3ea1",
            alt: "团队建设活动"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">企业文化</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-blue-600">
            <i className="fa-solid fa-lightbulb"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">创新驱动</h3>
          <p className="text-gray-600">
            鼓励创新思维，持续技术突破，引领行业发展
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-green-600">
            <i className="fa-solid fa-flask"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">科学严谨</h3>
          <p className="text-gray-600">
            坚持科学态度，严谨工作作风，确保产品质量
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-purple-600">
            <i className="fa-solid fa-handshake"></i></div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">合作共赢</h3>
          <p className="text-gray-600">
            倡导团队协作，与客户、合作伙伴共同成长
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-red-600">
            <i className="fa-solid fa-heart"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">社会责任</h3>
          <p className="text-gray-600">
            致力于健康事业，为人类健康贡献科技力量
          </p>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">企业使命</h3>
              <p className="text-gray-700 mb-6">
                创新改变生活，科技改变世界，产业布局服务蓝星（地球）。让每一克糖都承载使命，让每一次选择都指向健康！
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">企业愿景</h3>
              <p className="text-gray-700">
                成为全球代谢健康领域的创新引领者，让"科技赋能饮食健康"的理念惠及全球消费者。
              </p>
            </div>
            <div className="relative h-80 md:h-auto">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Team+collaboration+in+modern+office+environment+biotechnology+company&sign=7585443823e078762da3b9bc11dc1e4f" 
                alt="企业文化" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCulture;