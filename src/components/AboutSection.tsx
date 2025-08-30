import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">关于碳索科技</h2>
  <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            全球领先的塔格糖产业化解决方案提供商，致力于通过科技创新引领健康产业发展
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Company image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Modern+biotechnology+company+exterior+building+clean+professional+design&sign=6acfea0351b8a7c97fcd7f66415f2c23" 
                alt="碳索科技公司外观" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full z-0 opacity-70"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-full z-0 opacity-70"></div>
          </div>

          {/* Company description */}
          <div>
  <h3 className="text-xl font-bold text-gray-900 mb-4">全球塔格糖产业领导者</h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              林路生物科技（黄石）有限公司是一家极具创新力的创业型科技企业，在全球塔格糖产业领域占据着重要地位。我们是全球第一家实现塔格糖工业化并成功控制成本的企业。
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              通过不懈的科研攻坚，我们将塔格糖的产率从全球工业技术标准的22%大幅提升至42%，成功突破了塔格糖工业化量产的关键瓶颈，实现了规模化生产。
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-2">
                  <i className="fa-solid fa-flask"></i>
                </div>
                <h4 className="font-semibold text-lg mb-1">核心技术</h4>
                <p className="text-gray-600 text-sm">28项塔格糖生产专利技术</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-2">
                  <i className="fa-solid fa-industry"></i>
                </div>
                <h4 className="font-semibold text-lg mb-1">年产能</h4>
                <p className="text-gray-600 text-sm">3.75万吨塔格糖</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-2">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h4 className="font-semibold text-lg mb-1">全球布局</h4>
                <p className="text-gray-600 text-sm">多国生产基地与合作企业</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-2">
                  <i className="fa-solid fa-award"></i>
                </div>
                <h4 className="font-semibold text-lg mb-1">品质认证</h4>
                <p className="text-gray-600 text-sm">ISO质量体系认证，FDA注册</p>
              </div>
            </div>
            
               <Link
               to="/about/group-introduction"
               className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
             >
               了解更多公司信息
               <i className="fa-solid fa-arrow-right ml-2"></i>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;