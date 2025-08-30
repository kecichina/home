import React from 'react';
import { motion } from 'framer-motion';

// Core advantages data
const coreAdvantages = [
  {
    title: "超高产率技术",
    description: "将塔格糖产率从全球工业技术标准的22%大幅提升至42%，突破工业化量产瓶颈",
    icon: "fa-tachometer-alt",
    color: "blue"
  },
  {
    title: "结晶缓释技术",
    description: "独有的结晶缓释技术，将塔格糖代谢速度从55分钟延长至155分钟，全面覆盖食物消化过程",
    icon: "fa-hourglass-half",
    color: "teal"
  },
  {
    title: "零杂质提纯",
    description: "自主研发提纯技术，将塔格糖中杂质葡萄糖降低至零，生产最高纯度0升糖指数产品",
    icon: "fa-filter",
    color: "purple"
  },
  {
    title: "安全无残留",
    description: "独有的物化法生产工艺，实现零有毒化学残留、零重金属残留、零生物DNA片段残留",
    icon: "fa-shield-alt",
    color: "green"
  }
];

const AdvantageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">核心技术优势</h2>
  <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            我们在生物化学领域深厚的技术积累，为碳水化合物干预提供创新解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-2xl text-white bg-${advantage.color}-600`}>
                <i className={`fa-solid ${advantage.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology highlights */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
  <h3 className="text-xl font-bold text-gray-900 mb-4">碳水化合物干预解决方案</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                基于在生物化学领域深厚的技术积累，我们针对碳水化合物的干预研发出了分别实现20%、60%、90%不同干预效果的复配产品。尤为突出的是，通过益生元的双向转化原理，我们彻底解决了传统碳水干预药物和产品对消化系统可能产生致病影响的难题。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700">
                  <i className="fa-solid fa-check text-green-500 mr-2"></i>20%碳水干预
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700">
                  <i className="fa-solid fa-check text-green-500 mr-2"></i>60%碳水干预
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700">
                  <i className="fa-solid fa-check text-green-500 mr-2"></i>90%碳水干预
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700">
                  <i className="fa-solid fa-check text-green-500 mr-2"></i>益生元双向转化
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <div className="aspect-square rounded-full bg-white p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-1">155分钟</div>
                    <div className="text-gray-700">GLP-1促进分泌</div>
                    <div className="text-sm text-gray-500 mt-1">传统技术仅30分钟</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  提升417%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;