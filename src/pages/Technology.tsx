import React from 'react';
import PageCarousel from '@/components/PageCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
// Tabs component not implemented yet


// Technology advantage data
const technologyAdvantages = [
  {
    id: 1,
    title: "超高产率技术",
    description: "将塔格糖产率从全球工业技术标准的22%大幅提升至42%，成功突破了塔格糖工业化量产的关键瓶颈，实现了规模化生产。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=High+yield+biochemical+production+process+illustration&sign=c02481efa10afaf236b014e50a29a3dd",
    icon: "fa-tachometer-alt",
    color: "blue"
  },
  {
    id: 2,
    title: "结晶缓释技术",
    description: "公司独有的结晶缓释技术，将塔格糖的代谢速度从55分钟显著延长至155分钟，使其能够全面覆盖整个食物消化过程，同时将GLP-1促进分泌功能从30分钟延长到130分钟。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Crystalline+sustained+release+technology+illustration&sign=f82c471deef2496cdabadfbb7b64edb0",
    icon: "fa-hourglass-half",
    color: "teal"
  },
  {
    id: 3,
    title: "零杂质提纯技术",
    description: "自主研发的提纯技术和设备，成功将塔格糖中的杂质葡萄糖降低至零，修正了塔格糖在临床过程中Gi为3的错误数据，生产出最高纯度的0升糖指数塔格糖。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=High+purity+tagatose+purification+technology&sign=27b5ccac9ba697fa906205b00b5fcd86",
    icon: "fa-filter",
    color: "purple"
  },
  {
    id: 4,
    title: "碳水化合物干预技术",
    description: "基于在生物化学领域深厚的技术积累，我们针对碳水化合物的干预研发出了分别实现20%、60%、90%不同干预效果的复配产品。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Carbohydrate+intervention+technology+research&sign=3a491418267a1c2d01d30495066aeb3f",
    icon: "fa-flask",
    color: "green"
  },
  {
    id: 5,
    title: "多原料生产技术",
    description: "实现乳糖、乳清液、葡萄糖、果糖、淀粉多糖等多种原材料的预处理、预转化生产模组的重合，彻底突破原材料的限制。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Multiple+raw+materials+processing+technology&sign=5c2d0e200135d7d0006afce43bcdfdc6",
    icon: "fa-industry",
    color: "orange"
  },
  {
    id: 6,
    title: "物化法生产技术",
    description: "公司独有的物化法生产的塔格糖，实现了零有毒化学残留、零重金属残留、零生物DNA片段残留，成为在其他国家唯一被公认为可正式进口的塔格糖产品。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Physical+chemical+production+method+tagatose&sign=f0b2b1af0408c5e98d17b989597d6bc2",
    icon: "fa-flask-vial",
    color: "red"
  }
];

// Application cases
const applicationCases = [
  {
    id: 1,
    title: "英格燃料苏打水",
    description: "中国好水，世界好糖英格燃料苏打水已进入北京市场，采用塔格糖作为甜味剂，实现零糖零卡的健康饮品。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Yingge+fuel+soda+water+product&sign=2f1d4fb756af989297d37011da8b435f",
    category: "饮料"
  },
  {
    id: 2,
    title: "乐百氏0蔗糖AD钙奶",
    description: "乐百氏0蔗糖AD钙奶基于市场需求成功面世，采用塔格糖作为甜味剂，为儿童提供更健康的钙补充选择。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Robust+zero+sucrose+AD+calcium+milk&sign=fcb3e4f35f027ab16fb2dc28106486ab",
    category: "乳制品"
  },
  {
    id: 3,
    title: "乐百氏低GI塔格糖奶茶",
    description: "精准定位为'怕胖就喝乐百氏'，采用塔格糖作为甜味剂，提供低GI的健康奶茶选择。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Low+GI+tagatose+milk+tea+product&sign=7b95c1dac59ec33e0b7d57ad3de94010",
    category: "饮料"
  },
  {
    id: 4,
    title: "碳水平衡剂",
    description: "Carbohydrate Discover（碳索CD品牌）碳水平衡剂概念品牌逐步落地，为碳水化合物管理提供创新解决方案。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Carbon+balance+product+packaging&sign=48367ccf825de211b0917c9b52c03138",
    category: "保健品"
  }
];

// Research achievements
const researchAchievements = [
  {
    title: "塔格糖产率提升技术",
    description: "将塔格糖产率从22%提升至42%",
    year: "2021",
    type: "技术突破"
  },
  {
    title: "零葡萄糖杂质提纯技术",
    description: "实现塔格糖中葡萄糖杂质降低至零",
    year: "2022",
    type: "技术突破"
  },
  {
    title: "结晶缓释技术",
    description: "延长塔格糖代谢时间至155分钟",
    year: "2022",
    type: "技术突破"
  },
  {
    title: "碳水化合物干预系列产品",
    description: "开发20%、60%、90%不同干预效果的复配产品",
    year: "2023",
    type: "产品开发"
  },
  {
    title: "多原料生产技术",
    description: "突破多种原材料生产塔格糖技术",
    year: "2023",
    type: "技术突破"
  },
  {
    title: "塔格糖在代谢性疾病预防中的应用",
    description: "相关研究成果发表于国际知名期刊",
    year: "2024",
    type: "科研成果"
  }
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Advanced+biotechnology+laboratory+equipment+research&sign=fbe833fdcaa7ae9ec1aac9e5ba57d9e9",
            alt: "先进生物技术实验室设备"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Scientists+conducting+tagatose+research+experiments&sign=4f12ead1cb427f9d73b4f51c0edb1bc8",
            alt: "科学家进行塔格糖研究实验"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Biochemical+analysis+equipment+in+modern+laboratory&sign=16848a0aa3410d35432a18c4f91461ae",
            alt: "现代化实验室生化分析设备"
          }
        ]}
      />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">技术应用</h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                创新技术引领行业发展，为健康产业提供核心解决方案
              </p>
            </div>
          </div>
        </section>

        {/* Core technologies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">核心技术优势</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                我们在生物化学领域深厚的技术积累，为碳水化合物干预提供创新解决方案
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {technologyAdvantages.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={tech.imageUrl} 
                      alt={tech.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-sm">{tech.description.substring(0, 100)}...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl text-white bg-${tech.color}-600`}>
                      <i className={`fa-solid ${tech.icon}`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{tech.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{tech.description}</p>
                    
                    <a 
                      href="#"className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mt-auto"
                    >
                      技术详情
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">塔格糖生产工艺流程</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                先进的生产工艺确保产品质量与安全
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Process flow line */}
              <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
              
              {/* Process steps */}
              <div className="relative z-10 space-y-12 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">原料预处理</h3>
                    <p className="text-gray-600">
                      对乳糖、乳清液、葡萄糖等多种原材料进行预处理，确保原料质量符合生产要求
                    </p>
                  </div>
                  
                  <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-2 hidden md:block"></div>
                  
                  <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">生物转化</h3>
                    <p className="text-gray-600">
                      通过先进的生物转化技术，将原料转化为塔格糖前体物质
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">提纯分离</h3>
                    <p className="text-gray-600">
                      采用自主研发的零杂质提纯技术，去除所有杂质，获得高纯度塔格糖
                    </p>
                  </div>
                  
                  <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-2 hidden md:block"></div>
                  
                  <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">结晶缓释处理</h3>
                    <p className="text-gray-600">
                      应用独有的结晶缓释技术，延长塔格糖代谢时间，增强产品功能性
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">质量检测</h3>
                    <p className="text-gray-600">
                      严格的质量检测流程，确保产品符合国际标准和企业内部质量要求
                    </p>
                  </div>
                  
                  <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                      5
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-2 hidden md:block"></div>
                  
                  <div className="md:w-12 z-10 flex justify-start md:justify-center order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                      6
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 md:text-left order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">包装与储存</h3>
                    <p className="text-gray-600">
                      无菌包装工艺，确保产品在储存和运输过程中的质量稳定
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">技术应用案例</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                我们的技术成果已广泛应用于食品、饮料、保健品等多个领域
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {applicationCases.map((caseItem) => (
                <div key={caseItem.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={caseItem.imageUrl} 
                      alt={caseItem.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {caseItem.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{caseItem.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{caseItem.description}</p>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors mt-auto"
                    >
                      查看详情
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research achievements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">科研成果</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                持续创新，引领塔格糖产业技术发展
              </p>
            </div>

            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">成果名称</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">描述</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">年份</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">类型</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {researchAchievements.map((achievement, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{achievement.title}</td>
                      <td className="px-6 py-4 text-gray-600">{achievement.description}</td>
                      <td className="px-6 py-4 text-gray-600">{achievement.year}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {achievement.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                查看全部科研成果
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;