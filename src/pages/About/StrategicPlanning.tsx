import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const StrategicPlanning = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Corporate+strategic+planning+meeting+with+business+leaders&sign=782ff0dc263bc169bc67088437eefa00",
            alt: "企业战略规划会议"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Future+technology+development+roadmap+visualization&sign=6c60c0f26efcbaf310348fb8b69a2320",
            alt: "技术发展路线图"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Global+market+expansion+strategy+map+for+biotechnology&sign=ec67dad37af60138ee85d4690fe63518",
            alt: "全球市场拓展战略"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">战略规划发展</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-blue-600">
            <i className="fa-solid fa-shield-alt"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">夯实产业根基</h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">构建全链条竞争壁垒</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>建立塔格糖应用研发中心，集聚全球顶尖科研人才</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>规划建设万吨级"互联网 + AI"自动化智慧工厂</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>完善全产业链质量管控体系，构建国际一流的产业资质认证体系</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>以"塔格兔子"全球首个塔格糖超级IP为核心，孵化多元化应用品牌矩阵</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-green-600">
            <i className="fa-solid fa-seedling"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">赋能食品产业</h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">引领健康消费升级</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>搭建"塔格糖 + 食品产业"创新平台，提供全周期赋能</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>联合食品企业共建研发生产基地，缩短产品上市周期</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>打造"塔格糖 + 互联网 + 大健康"产业孵化基地</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>整合自媒体、直播电商及仓储冷链资源，形成一体化产业集群</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-purple-600">
            <i className="fa-solid fa-globe-americas"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">全球化布局</h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-3">重塑饮食结构健康新生态</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>吸引国内外食品研发人才与品牌合作企业入驻</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>以"工业4.0"标准打造塔格糖智能工厂，实现产能与质量双突破</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>发挥"本土基因 + 国际视野"优势，辐射亚太及全球市场</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>通过技术输出、品牌授权、合资合作等模式撬动全球市场</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Industry ecosystem planning */}
      <div className="mt-16 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">产业生态规划</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fa-solid fa-industry"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">塔格糖生产生态</h4>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>建设1万吨物化乳源物化塔格糖自动化无人管道式生产线</li>
              <li>建设5万吨多糖植源塔格糖自动化无人管道式生产线</li>
            </ol>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-green-600 text-4xl mb-4">
              <i className="fa-solid fa-city"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">分布式大健康产业园</h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>建立塔格糖医疗应用研发基地</li>
              <li>建立食品应用研发基地</li>
              <li>建立产业投资资本与孵化服务体系</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="text-purple-600 text-4xl mb-4">
              <i className="fa-solid fa-heartbeat"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">健康生态社区</h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>智能化健康实时检测系统</li>
              <li>健康生活习惯实时干预</li>
              <li>集旅游、旅居、定居、临床、治疗、康养为一体的大健康智慧社区</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPlanning;