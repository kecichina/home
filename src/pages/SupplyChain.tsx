import React from 'react';
import PageCarousel from '@/components/PageCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Supply chain data
const productionBases = [
  {
    id: 1,
    name: "林路生物（武汉）",
    year: "2014",
    location: "武汉",
    function: "校企研发合作",
    nature: "工艺研发",
    capacity: "无",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Wuhan+biotechnology+research+laboratory+modern+facility&sign=e14474c4c3a080648e87e0c4f57f2a78"
  },
  {
    id: 2,
    name: "林路生物（黄石）",
    year: "2019",
    location: "黄石",
    function: "工业化研发生产试验基地",
    nature: "设备研发",
    capacity: "300吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Huangshi+biotechnology+production+base&sign=7287942fb87a21565975ab0808618ebf"
  },
  {
    id: 3,
    name: "林路生物（丹江口）",
    year: "2020",
    location: "丹江口",
    function: "模块化塔格糖生产基地",
    nature: "供应链",
    capacity: "1500吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Danjiangkou+modular+production+base&sign=6787cee2fe5ac55465700c2c1b8cce8f"
  },
  {
    id: 4,
    name: "林路生物（益恒源）",
    year: "2023",
    location: "漯河",
    function: "中型自动化模组塔格糖生产基地",
    nature: "供应链",
    capacity: "3500吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Luohe+automated+production+facility&sign=18f41315977e4164477262db01081a6f"
  }
];

const cooperationPartners = [
  {
    id: 1,
    name: "辽宁辉山乳业集团（越秀集团）",
    year: "2024",
    location: "抚顺",
    function: "乳清废液塔格糖生产试验基地",
    nature: "合作",
    capacity: "2200吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Fushun+dairy+industry+cooperation+base&sign=c8bcf862c9e8fa163b169d647497fc00"
  },
  {
    id: 2,
    name: "保龄宝生物",
    year: "2024",
    location: "德州禹城",
    function: "果糖生产塔格糖",
    nature: "技术输出、新成果共享",
    capacity: "10000吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Dezhou+biotechnology+cooperation+production+base&sign=0fc18ab6c9e55da1222cd28c11cef5bf"
  },
  {
    id: 3,
    name: "百龙创园",
    year: "2024",
    location: "德州禹城",
    function: "葡萄糖生产塔格糖",
    nature: "技术输出、新成果共享",
    capacity: "10000吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Yucheng+glucose+to+tagatose+production+line&sign=ff9ee75986a2c6eaddeae20b2206f768"
  },
  {
    id: 4,
    name: "三元生物",
    year: "2024",
    location: "滨州",
    function: "淀粉生产塔格糖",
    nature: "技术输出、新成果共享",
    capacity: "10000吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Binzhou+starch+to+tagatose+production+facility&sign=30c7781121781c6b9da12cdc509f1a9c"
  },
  {
    id: 5,
    name: "国药集团（昆山）",
    year: "2026",
    location: "昆山市",
    function: "物化乳源塔格糖",
    nature: "项目立项",
    capacity: "10000吨/年",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Kunshan+pharmaceutical+group+production+base&sign=590e2252a62cdc800d2cb5fbbce343ad"
  }
];

// Production capacity data for chart
const capacityData = [
  { year: '2019', capacity: 300 },
  { year: '2020', capacity: 1800 },
  { year: '2021', capacity: 2500 },
  { year: '2022', capacity: 3200 },
  { year: '2023', capacity: 6700 },
  { year: '2024', capacity: 37500 },
  { year: '2025', capacity: 47500 },
  { year: '2026', capacity: 57500 }
];

const SupplyChain = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern+production+facility+for+biotechnology+products&sign=ec87589c5c343d2d855629ddcaa852f4",
            alt: "现代化生物技术生产基地"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Global+supply+chain+logistics+network+visualization&sign=1f249b10b9c4ceddef4c8ee3b8341026",
            alt: "全球供应链物流网络"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Quality+control+inspection+in+production+process&sign=e21359b754432e14061149b95874ae88",
            alt: "生产过程质量控制检测"
          }
        ]}
      />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">供应链体系</h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                全球布局的生产基地与战略合作网络，确保产品稳定供应
              </p>
            </div>
          </div>
        </section>

        {/* Production capacity chart */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">产能增长趋势</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={capacityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb', 
                        borderRadius: '8px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value) => [`${value} 吨/年`, '产能']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="capacity" 
                      stroke="#165DFF" 
                      strokeWidth={3}
                      dot={{ r: 6, strokeWidth: 2, fill: 'white' }}
                      activeDot={{ r: 8, strokeWidth: 0, fill: '#165DFF' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-gray-600 text-center mt-6">
                碳索科技塔格糖年产能增长趋势（单位：吨/年）
              </p>
            </div>
          </div>
        </section>

        {/* Self-owned production bases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">自有生产基地</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                全球布局的自有生产网络，确保产品质量与供应稳定
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {productionBases.map((base, index) => (
                <motion.div
                  key={base.id}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-2/5">
                    <img 
                      src={base.imageUrl} 
                      alt={base.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{base.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {base.year}年
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">所在地</p>
                        <p className="font-medium text-gray-900">{base.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">年产能</p>
                        <p className="font-medium text-gray-900">{base.capacity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">职能</p>
                        <p className="font-medium text-gray-900">{base.function}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">性质</p>
                        <p className="font-medium text-gray-900">{base.nature}</p>
                      </div>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm"
                    >
                      查看基地详情
                      <i className="fa-solid fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner production bases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">合作生产基地</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                与行业领先企业建立战略合作，拓展全球生产能力
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {cooperationPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={partner.imageUrl} 
                      alt={partner.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      合作基地
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {partner.year}年
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 flex-grow">
                      <div>
                        <p className="text-sm text-gray-500">所在地</p>
                        <p className="font-medium text-gray-900">{partner.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">年产能</p>
                        <p className="font-medium text-gray-900">{partner.capacity}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">职能</p>
                        <p className="font-medium text-gray-900">{partner.function}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">合作方式</p>
                        <p className="font-medium text-gray-900">{partner.nature}</p>
                      </div>
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm mt-auto"
                    >
                      了解合作详情
                      <i className="fa-solid fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supply chain advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">供应链优势</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                全球领先的供应链体系，确保产品质量与供应稳定性
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-blue-600">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">全球布局</h3>
                <p className="text-gray-600">
                  全球多个生产基地布局，实现本地化生产与供应，降低物流成本，提高响应速度
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-green-600">
                  <i className="fa-solid fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">质量管控</h3>
                <p className="text-gray-600">
                  全产业链质量管控体系，从原料到成品的全程质量监控，确保产品质量稳定可靠
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-purple-600">
                  <i className="fa-solid fa-cogs"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">技术创新</h3>
                <p className="text-gray-600">
                  自主研发核心生产技术与设备，不断提升生产效率与产品质量，保持技术领先优势
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-2xl text-orange-600">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">产能保障</h3>
                <p className="text-gray-600">
                  年产能达3.75万吨，持续扩大产能布局，确保市场需求的稳定供应
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cooperation inquiry */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">寻求供应链合作？</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              无论您是原料供应商、生产合作伙伴还是分销渠道，我们都期待与您携手共创未来
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-colors shadow-lg"
            >
              联系我们洽谈合作
              <i className="fa-solid fa-handshake ml-2"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupplyChain;