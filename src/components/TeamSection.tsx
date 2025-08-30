import React from 'react';
import { motion } from 'framer-motion';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "张儒林",
    position: "董事长",
    qualification: "美国Iowa州立大学生物化学博士",
    bio: "湖北省'百人计划'特聘专家，武汉'3551光谷人才计划'专家，创办和协助创办5家生物制药公司，在中国、美国及欧盟申请专利20余项。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait+of+senior+biotechnology+researcher+professional+appearance&sign=0b3a11c9b34871e9f674cbbfed8c2ad6"
  },
  {
    id: 2,
    name: "张久亮",
    position: "首席科学家",
    qualification: "华中科技大学同济医学院药理学博士",
    bio: "华中农业大学副教授，专注功能性食品和膳食营养补充剂的开发以及膳食营养成分对慢性病的干预研究，承担20余项国家重点研发计划。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Portrait+of+biochemical+scientist+with+professional+appearance&sign=33db8ecf6ebe953d724a2454b421ec25"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">专业技术团队</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            汇聚全球顶尖科研人才，引领塔格糖产业创新发展
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/3">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-500 italic mb-4">{member.qualification}</p>
                <p className="text-gray-700">{member.bio}</p>
                
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn profile">
                    <i className="fa-brands fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="ResearchGate profile">
                    <i className="fa-brands fa-researchgate text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Google Scholar profile">
                    <i className="fa-brands fa-google text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">加入我们，共创未来</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            我们正在寻找充满激情、富有创新精神的人才加入团队，共同推动塔格糖产业发展，为人类健康事业贡献力量
          </p>
          <a 
            href="/careers"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            查看招聘职位
            <i className="fa-solid fa-user-plus ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;