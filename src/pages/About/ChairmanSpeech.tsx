import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const ChairmanSpeech = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Company+chairman+giving+speech+at+corporate+event&sign=86e5f8692fd0f071e8924ac49f5b9281",
            alt: "董事长在企业活动中致辞"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Leadership+team+meeting+for+strategic+planning&sign=d72808d81e0d928e945872c04070aa89",
            alt: "领导团队战略规划会议"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Company+chairman+visiting+research+laboratory+with+scientists&sign=afa01cc1b9370445b9dc62baf792fcb9",
            alt: "董事长视察研发实验室"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">董事长致辞</h2>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 bg-blue-600 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Company+chairman+portrait+professional+appearance&sign=ebf2658fddc957e5ea431d51cb77ce32" 
                  alt="张儒林博士" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white">张儒林博士</h3>
              <p className="text-blue-100">林路生物董事长</p>
            </div>
          </div>
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
            <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-6">
              "创新改变生活，科技改变世界，产业布局服务蓝星（地球）。愿所有塔格糖产业研发者和推进者'让每一克糖都承载使命，让每一次选择都指向健康！'祝福每位坚持科学使用塔格糖的人们，身体健康、青春常驻、远离三高和肥胖。"
            </blockquote>
            <div className="text-gray-600">
              <p className="mb-4">作为国内率先突破塔格糖工业化生产技术壁垒的生物科技领军企业，林路生物始终以科技创新为核心驱动力，致力于打造全球代谢健康领域的创新引领者。</p>
              <p>我们将以塔格糖产业化为核心引擎，通过集团化战略重构健康食品产业价值链条，让"科技赋能饮食健康"的理念惠及全球消费者。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanSpeech;