import React, { useState } from 'react';
import PageCarousel from '@/components/PageCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

// Product data
const products = [
  {
    id: 1,
    name: "高纯度塔格糖",
    category: "原料产品",
    description: "99.9%超高纯度塔格糖，0升糖指数，适用于各类食品、饮料添加",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Pure+tagatose+crystals+in+laboratory+container+high+purity&sign=06a63ad3b6344fa17c1d61ec888d0520",
    features: ["0升糖指数", "零葡萄糖杂质", "非转基因", "无化学残留"],
    specifications: [
      { name: "外观", value: "白色结晶粉末" },
      { name: "纯度", value: "≥99.9%" },
      { name: "甜度", value: "蔗糖的92%" },
      { name: "能量", value: "1.5kcal/g" },
      { name: "GI值", value: "0" },
      { name: "储存条件", value: "阴凉干燥处，密封保存" }
    ],
    applications: ["饮料", "乳制品", "烘焙食品", "保健品", "医药产品"]
  },
  {
    id: 2,
    name: "碳水平衡剂",
    category: "终端产品",
    description: "Carbohydrate Discover(碳索CD品牌)碳水平衡剂，科学控制碳水吸收",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Carbohydrate+balance+product+packaging+modern+design&sign=dfaba3f9be13e02fc5d0587263706b60",
    features: ["精准碳水干预", "促进GLP-1分泌", "益生元双向转化", "改善肠道健康"],
    specifications: [
      { name: "规格", value: "30袋/盒" },
      { name: "每袋含量", value: "5g" },
      { name: "主要成分", value: "塔格糖、膳食纤维、益生元" },
      { name: "适用人群", value: "关注血糖人群、体重管理人群" },
      { name: "食用方法", value: "餐前15分钟服用" },
      { name: "保质期", value: "24个月" }
    ],
    applications: ["日常膳食管理", "体重控制计划", "血糖管理辅助", "健康生活方式"]
  },
  {
    id: 3,
    name: "英格燃料苏打水",
    category: "合作产品",
    description: "中国好水，世界好糖，英格燃料苏打水已进入北京市场",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Premium+soda+water+product+with+tagatose+healthy+drink&sign=9685f6c55d864048ca6957c24a364363",
    features: ["零糖零卡", "天然甜味", "矿物质丰富", "清爽口感"],
    specifications: [
      { name: "规格", value: "330ml/瓶" },
      { name: "每瓶热量", value: "0kcal" },
      { name: "主要成分", value: "天然水、二氧化碳、塔格糖、矿物质" },
      { name: "pH值", value: "8.0-8.5" },
      { name: "储存条件", value: "常温避光保存" },
      { name: "保质期", value: "12个月" }
    ],
    applications: ["日常饮用", "运动补水", "社交场合", "佐餐饮品"]
  },
  {
    id: 4,
    name: "乐百氏低GI塔格糖奶茶",
    category: "合作产品",
    description: "精准定位为'怕胖就喝乐百氏'，健康与美味的完美结合",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Healthy+milk+tea+product+with+low+GI+tagatose+ingredient&sign=122bd3531eaac258d689c1f27fd2abc2",
    features: ["低GI配方", "零蔗糖添加", "塔格糖健康甜味", "丰富营养"],
    specifications: [
      { name: "规格", value: "500ml/瓶" },
      { name: "每瓶热量", value: "≤80kcal" },
      { name: "主要成分", value: "牛奶、茶叶、塔格糖、维生素" },
      { name: "GI值", value: "≤30" },
      { name: "储存条件", value: "2-8℃冷藏" },
      { name: "保质期", value: "21天" }
    ],
    applications: ["日常饮用", "下午茶", "休闲饮品", "早餐搭配"]
  },
  {
    id: 5,
    name: "塔格糖复配甜味剂",
    category: "原料产品",
    description: "塔格糖与其他功能性甜味剂的复配产品，满足不同甜度需求",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Sweetener+blend+product+packaging+for+food+industry&sign=bf6b8573c3218ba642599af7be11fec7",
    features: ["甜度可调", "协同增效", "降低成本", "功能多样"],
    specifications: [
      { name: "外观", value: "白色粉末" },
      { name: "甜度范围", value: "蔗糖的50%-100%" },
      { name: "主要成分", value: "塔格糖、赤藓糖醇、甜菊糖苷" },
      { name: "水分含量", value: "≤0.5%" },
      { name: "灰分", value: "≤0.1%" },
      { name: "储存条件", value: "阴凉干燥处，密封保存" }
    ],
    applications: ["饮料", "烘焙食品", "糖果", "乳制品", "保健品"]
  },
  {
    id: 6,
    name: "塔格兔子儿童营养糖",
    category: "终端产品",
    description: "专为儿童设计的健康营养糖，使用塔格糖作为甜味剂，不致龋齿",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Children%27s+nutritional+candy+product+with+tagatose&sign=15c1c94d4bd7ca19d51974749a5f5573",
    features: ["防龋齿", "添加维生素", "无添加蔗糖", "天然水果口味"],
    specifications: [
      { name: "规格", value: "60g/盒" },
      { name: "主要成分", value: "塔格糖、维生素C、维生素D、钙" },
      { name: "适用年龄", value: "3岁以上儿童" },
      { name: "口味", value: "草莓、橙子、葡萄" },
      { name: "食用建议", value: "每日不超过3颗" },
      { name: "保质期", value: "18个月" }
    ],
    applications: ["儿童日常营养补充", "节日礼品", "幼儿园点心", "儿童派对"]
  }
];

// Product categories
const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'raw', name: '原料产品' },
  { id: 'terminal', name: '终端产品' },
  { id: '合作', name: '合作产品' }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'raw' && product.category === '原料产品') ||
      (activeCategory === 'terminal' && product.category === '终端产品') ||
      (activeCategory === '合作' && product.category === '合作产品');
      
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tagatose+product+range+display+in+laboratory&sign=d0b9010f458d76521e3ca8de2c98d693",
            alt: "塔格糖系列产品展示"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Health+food+products+with+tagatose+ingredient&sign=3a4ae32809fb64be04dfe75a3016a4ab",
            alt: "含塔格糖成分的健康食品"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Carbon+balance+product+packaging+design+modern&sign=5799afbf0e405e83fa98d11cd5d32cd5",
            alt: "碳水平衡剂产品包装"
          }
        ]}
      />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">产品商城</h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                探索碳索科技创新塔格糖产品，引领健康生活方式
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            {/* Search and filter bar */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="relative flex-grow max-w-md">
                  <input
                    type="text"
                    placeholder="搜索产品..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <i className="fa-solid fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">产品特点：</h4>
                        <ul className="flex flex-wrap gap-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <Link 
                          to={`/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          查看详情
                        </Link>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                          <i className="fa-solid fa-shopping-cart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-box-open text-3xl text-gray-400"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">未找到相关产品</h3>
                <p className="text-gray-600 mb-6">请尝试使用其他关键词或类别进行搜索</p>
                <button 
                  onClick={() => {setActiveCategory('all'); setSearchTerm('');}}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors"
                >
                  查看全部产品
                </button>
              </div>
            )}
            
            {/* Product catalog download */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">下载产品目录</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                获取完整的产品信息、规格参数和应用指南，了解更多塔格糖产品详情
              </p>
              <a href="#" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                <i className="fa-solid fa-download mr-2"></i>
                下载产品手册(PDF)
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;