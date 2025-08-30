import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const GroupIntroduction = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern+biotechnology+company+headquarters+building+exterior+professional+architecture&sign=fbb3a179d793e86fd7af14018b608c3f",
            alt: "集团总部外观"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Advanced+biotechnology+laboratory+interior+with+researchers+working&sign=0aef987743cd22889fff5c01f34708ca",
            alt: "研发实验室内部"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern+production+facility+for+biotechnology+products+clean+environment&sign=7e8a753fe2d0e396fa046cd9d3ad5abb",
            alt: "现代化生产基地"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">集团简介</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            林路生物科技（黄石）有限公司是一家极具创新力的创业型科技企业，在全球塔格糖产业领域占据着重要地位。我们是全球第一家实现塔格糖工业化并成功控制成本的企业。
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            通过不懈的科研攻坚，我们将塔格糖的产率从全球工业技术标准的22%大幅提升至42%，成功突破了塔格糖工业化量产的关键瓶颈，实现了规模化生产。
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            在工艺研发方面，公司深入钻研多种工业生产工艺，不仅完成了所有工艺的工业化研发，还自主研制了核心设备，成为全国唯一获得国际认可、具备商品出口资质的塔格糖生产企业。
          </p>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Modern+biotechnology+company+headquarters+building+exterior&sign=65b580f0cc06a51f177c9f65985313ad" 
              alt="林路生物集团总部" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full z-0 opacity-70"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-full z-0 opacity-70"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-blue-600 mb-2">28+</div>
          <p className="text-gray-700">塔格糖生产专利技术</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-blue-600 mb-2">3.75万</div>
          <p className="text-gray-700">年产能(吨)</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-blue-600 mb-2">42%</div>
          <p className="text-gray-700">塔格糖产率</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
          <p className="text-gray-700">产品纯度</p>
        </div>
      </div>
    </div>
  );
};

export default GroupIntroduction;