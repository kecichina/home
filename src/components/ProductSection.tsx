import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Product data
const products = [
  {
    id: 1,
    name: "高纯度塔格糖",
    category: "原料产品",
    description: "99.9%超高纯度塔格糖，0升糖指数，适用于各类食品、饮料添加",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Pure+tagatose+crystals+in+laboratory+container+high+purity&sign=06a63ad3b6344fa17c1d61ec888d0520",
    features: ["0升糖指数", "零葡萄糖杂质", "非转基因", "无化学残留"]
  },
  {
    id: 2,
    name: "碳水平衡剂",
    category: "终端产品",
    description: "Carbohydrate Discover(碳索CD品牌)碳水平衡剂，科学控制碳水吸收",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Carbohydrate+balance+product+packaging+modern+design&sign=dfaba3f9be13e02fc5d0587263706b60",
    features: ["精准碳水干预", "促进GLP-1分泌", "益生元双向转化", "改善肠道健康"]
  },
  {
    id: 3,
    name: "英格燃料苏打水",
    category: "合作产品",
    description: "中国好水，世界好糖，英格燃料苏打水已进入北京市场",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Premium+soda+water+product+with+tagatose+healthy+drink&sign=9685f6c55d864048ca6957c24a364363",
    features: ["零糖零卡", "天然甜味", "矿物质丰富", "清爽口感"]
  },
  {
    id: 4,
    name: "乐百氏低GI塔格糖奶茶",
    category: "合作产品",
    description: "精准定位为'怕胖就喝乐百氏'，健康与美味的完美结合",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Healthy+milk+tea+product+with+low+GI+tagatose+ingredient&sign=122bd3531eaac258d689c1f27fd2abc2",
    features: ["低GI配方", "零蔗糖添加", "塔格糖健康甜味", "丰富营养"]
  }
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">产品与应用</h2>
  <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            我们的塔格糖产品已广泛应用于食品、饮料、保健品等多个领域
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                
                <ul className="mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500 mb-2">
                      <i className="fa-solid fa-check-circle text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
                >
                  查看详情
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-block bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            查看全部产品
            <i className="fa-solid fa-chevron-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;