import React from 'react';
import PageCarousel from '@/components/PageCarousel';

// 知识分享文章数据
const knowledgeArticles = [
  {
    id: 1,
    title: "科学减重的基本原则",
    category: "减重基础",
    date: "2025-08-15",
    summary: "介绍科学减重的核心原理，包括能量平衡、营养均衡和运动结合的重要性。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Healthy+weight+loss+principles+infographic&sign=2d72ea21320164afaba6bd8717efa4ac",
    content: "科学减重需要遵循能量负平衡原则，同时保证营养均衡。本文详细介绍了如何通过合理饮食控制和适量运动实现健康减重，避免常见的减重误区。"
  },
  {
    id: 2,
    title: "蛋白质在体重管理中的作用",
    category: "营养指南",
    date: "2025-08-10",
    summary: "探讨蛋白质如何帮助增加饱腹感、维持肌肉量，以及在减重过程中的最佳摄入量。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Protein+rich+foods+for+weight+management&sign=95c1eb8451b337e7eb243929349173e0",
    content: "蛋白质是体重管理中的关键营养素，不仅能提供持久饱腹感，还能在减重过程中保护肌肉组织。本文介绍了优质蛋白质来源和每日推荐摄入量。"
  },
  {
    id: 3,
    title: "有氧运动与力量训练的完美结合",
    category: "运动指导",
    date: "2025-08-05",
    summary: "如何设计高效的运动计划，结合有氧运动燃脂和力量训练增肌，实现理想体态。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Combination+of+cardio+and+strength+training&sign=54182b9e6aa885d8e475f7836d34ff5d",
    content: "合理的运动计划应包括有氧和力量训练。有氧运动有效燃脂，力量训练增加肌肉量提高基础代谢。本文提供了不同健身水平的运动组合方案。"
  },
  {
    id: 4,
    title: "压力管理与体重控制的关系",
    category: "心理健康",
    date: "2025-07-28",summary: "解析压力如何影响体重，以及通过心理调节和生活方式改变来管理压力相关的体重问题。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Stress+management+for+weight+control&sign=7fa734fd9d127c0d224a7c713d6e154e",
    content: "长期压力会导致皮质醇水平升高，进而引发体重增加。本文介绍了压力管理技巧，包括冥想、深呼吸和充足睡眠等，帮助控制压力相关的体重问题。"
  }
];

const KnowledgeSharing = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Weight+management+knowledge+sharing+illustration&sign=f6b9b3a1ab44ad3fb75fccaabd607aa8",
            alt: "体重管理知识分享"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Healthy+diet+nutrition+information&sign=6251c1a38d8cbed0688042088458e02d",
            alt: "健康饮食营养知识"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fitness+exercise+guide+illustration&sign=87a5d63ec1e31c09085a3e0a09b10f61",
            alt: "健身运动指导"
          }
        ]}
        height="300px"
      />
      
      <h3 className="text-xl font-bold text-gray-900 mb-6">体重管理知识分享</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {knowledgeArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                {article.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-gray-900">{article.title}</h4>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                阅读全文 <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeSharing;