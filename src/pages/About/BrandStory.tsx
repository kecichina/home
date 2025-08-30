import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const BrandStory = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Company+founder+working+in+laboratory+early+days&sign=8ec5f0cc31b6a9ce8ee4aa089c60fc49",
            alt: "创始人早期创业"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Historical+timeline+of+biotechnology+company+development&sign=f3a07ffeb4d84fecb8f247f9b7223710",
            alt: "公司发展时间线"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern+brand+identity+design+for+biotechnology+company&sign=da242d13babceee4dda93d65b1485e71",
            alt: "品牌标识设计"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">品牌故事</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform md:translate-x-px"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            <div className="relative flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">品牌创立</h3>
                <p className="text-gray-600">
                  林路生物由张儒林博士创立，源于对解决全球代谢性疾病的使命感，致力于通过生物科技创新改善人类健康。
                </p>
              </div>
              
              <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-lg font-bold">
                  2014
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Startup+biotechnology+laboratory+with+researchers+working&sign=653d5cec49c61067da7467949e77ba23" 
                    alt="品牌创立" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 md:pr-12 order-2 hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Laboratory+equipment+for+tagatose+research&sign=8b675581e381dd11c39c312cf6e3f0eb" 
                    alt="技术突破" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-lg font-bold">
                  2021
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:text-left order-3 mt-6 md:mt-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">技术突破</h3>
                <p className="text-gray-600">
                  成功将塔格糖产率从全球工业技术标准的22%大幅提升至42%，突破了塔格糖工业化量产的关键瓶颈。
                </p>
              </div>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">品牌升级</h3>
                <p className="text-gray-600">
                  推出"碳索CD品牌"碳水平衡剂概念品牌，实现从技术提供商到健康解决方案提供商的战略转型。
                </p>
              </div>
              
              <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-lg font-bold">
                  2024
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3 hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Carbon+balance+product+packaging+design+modern+style&sign=c73f9ceda1d99134d067744b842f6851" 
                    alt="品牌升级" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 md:pr-12 order-2 hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Global+biotechnology+company+international+collaboration&sign=096b45a1cc18b5bccd449933f7caaceb" 
                    alt="全球布局" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-lg font-bold">
                  2025
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 md:text-left order-3 mt-6 md:mt-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">全球布局</h3>
                <p className="text-gray-600">
                  启动集团化战略升级，围绕"技术壁垒构建 — 产业生态完善 — 全球品牌布局"三大核心维度，引领全球代谢健康产业发展。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;