import React from 'react';
import PageCarousel from '@/components/PageCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Job positions data
const jobPositions = [
  {
    id: 1,
    title: "生物化学研究员",
    department: "研发部",
    location: "武汉",
    type: "全职",
    experience: "3-5年",
    education: "硕士及以上",
    description: "负责塔格糖相关生物化学研究，开发新的生产工艺和产品应用，推动技术创新和成果转化。",
    requirements: [
      "生物化学、生物技术、食品科学等相关专业硕士及以上学历",
      "3年以上生物化学研究经验，有糖化学研究经验者优先",
      "熟悉生物化学实验操作和分析方法",
      "具备良好的科研思维和创新能力",
      "优秀的中英文文献阅读和写作能力"
    ],
    responsibilities: [
      "开展塔格糖生产工艺优化研究",
      "开发塔格糖新的应用领域和产品",
      "撰写研究报告和专利申请文件",
      "参与科研项目申报和实施",
      "与跨部门团队协作推动成果转化"
    ]
  },
  {
    id: 2,
    title: "食品应用工程师",
    department: "应用技术部",
    location: "黄石",
    type: "全职",
    experience: "2-3年",
    education: "本科及以上",
    description: "负责塔格糖在食品、饮料等领域的应用技术支持，为客户提供解决方案，推动产品市场应用。",
    requirements: [
      "食品科学与工程、食品技术等相关专业本科及以上学历",
      "2年以上食品研发或应用技术支持经验",
      "熟悉食品生产工艺和配方设计",
      "具备良好的沟通能力和问题解决能力",
      "能够适应一定的出差"
    ],
    responsibilities: [
      "为客户提供塔格糖应用技术支持",
      "开发塔格糖在食品饮料中的应用配方",
      "组织客户培训和技术交流活动",
      "收集市场和应用反馈，提出产品改进建议",
      "编写应用技术资料和案例"
    ]
  },
  {
    id: 3,
    title: "市场专员",
    department: "市场部",
    location: "北京",
    type: "全职",
    experience: "1-3年",
    education: "本科及以上",
    description: "负责公司产品市场推广和品牌建设，制定市场策略，组织市场活动，提升品牌知名度和产品销量。",
    requirements: [
      "市场营销、广告学、传播学等相关专业本科及以上学历",
      "1-3年市场推广或品牌建设经验，有健康食品或生物科技行业经验者优先",
      "熟悉数字营销、社交媒体运营和内容营销",
      "具备良好的文案写作和活动策划能力",
      "优秀的沟通协调能力和团队合作精神"
    ],
    responsibilities: [
      "制定和实施产品市场推广策略",
      "组织线上线下市场活动和展会",
      "管理和运营公司社交媒体账号",
      "撰写市场文案和宣传资料",
      "进行市场调研和竞品分析"
    ]
  },
  {
    id: 4,
    title: "生产技术员",
    department: "生产部",
    location: "丹江口",
    type: "全职",
    experience: "1-2年",
    education: "大专及以上",
    description: "负责生产车间设备操作和维护，确保生产过程稳定运行，保证产品质量和产量。",
    requirements: [
      "化工、生物工程、机械等相关专业大专及以上学历",
      "1年以上生产技术或设备操作经验",
      "具备基本的机械和电气知识",
      "能够适应倒班工作",
      "严谨细致，责任心强"
    ],
    responsibilities: [
      "操作和监控生产设备运行",
      "执行生产工艺参数和质量控制标准",
      "进行日常设备维护和故障排除",
      "记录生产数据和填写报表",
      "参与生产工艺优化和改进"
    ]
  },
  {
    id: 5,
    title: "国际销售经理",
    department: "销售部",
    location: "上海",
    type: "全职",
    experience: "3-5年",
    education: "本科及以上",
    description: "负责国际市场开拓和客户关系维护，制定销售策略，完成销售目标，推动公司产品国际化布局。",
    requirements: [
      "国际贸易、市场营销、英语等相关专业本科及以上学历",
      "3年以上国际销售经验，有食品原料或生物科技产品销售经验者优先",
      "优秀的英语听说读写能力，能够作为工作语言",
      "具备良好的市场开拓能力和客户关系管理能力",
      "能够适应频繁的国际出差"
    ],
    responsibilities: [
      "开拓国际市场，寻找和开发新客户",
      "维护现有客户关系，提高客户满意度",
      "制定国际销售计划和策略，完成销售目标",
      "参与国际展会和市场推广活动",
      "收集国际市场信息，分析市场趋势"
    ]
  }
];

// Company culture data
const cultureValues = [
  {
    title: "创新驱动",
    description: "鼓励创新思维，持续技术突破，引领行业发展",
    icon: "fa-lightbulb"
  },
  {
    title: "科学严谨",
    description: "坚持科学态度，严谨工作作风，确保产品质量",
    icon: "fa-flask"
  },
  {
    title: "合作共赢",
    description: "倡导团队协作，与客户、合作伙伴共同成长",
    icon: "fa-handshake"
  },
  {
    title: "社会责任",
    description: "致力于健康事业，为人类健康贡献科技力量",
    icon: "fa-heart"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern+office+environment+for+biotechnology+company&sign=b4c3bd53740e6aaf8b8a8844b310b22e",
            alt: "现代化办公环境"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Team+collaboration+in+biotechnology+research+laboratory&sign=aa385cf6bf69fd219cf4b97874a28fc9",
            alt: "团队协作研发"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Company+team-building+activity+outdoor+fun&sign=0fb9f8f28c192b9c1835657899f7f17e",
            alt: "团队建设活动"
          }
        ]}
      />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">人才中心</h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                加入碳索科技，与我们一起推动健康产业创新发展
              </p>
            </div>
          </div>
        </section>

        {/* Company culture */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">企业文化</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                我们的核心价值观，塑造独特的企业文化
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-2xl text-blue-600 bg-blue-100">
                    <i className={`fa-solid ${value.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Workplace environment */}
            <div className="mt-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">工作环境</h3>
                <p className="text-gray-600">
                  舒适、开放、创新的工作环境，激发员工潜能
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Modern+office+environment+bright+open+space&sign=9bb291d8267b57361c4414077cb9f708" 
                    alt="办公环境" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Laboratory+with+advanced+equipment+clean+bright&sign=f9098757f2869aeafdf6712b6096c3b3" 
                    alt="研发实验室" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Team+collaboration+meeting+creative+discussion&sign=9570b3be2548528e8c79c656632d72af" 
                    alt="团队协作" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Company+team+building+activity+outdoor&sign=4c822f74bac0a7493ef8707e574d9229" 
                    alt="团队活动" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job positions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">热招职位</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                寻找优秀的你，一起共创健康未来
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-gray-50 rounded-2xl mb-8 overflow-hidden shadow-lg">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <span className="flex items-center">
                            <i className="fa-solid fa-building mr-2"></i>
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <i className="fa-solid fa-map-marker-alt mr-2"></i>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <i className="fa-solid fa-briefcase mr-2"></i>
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <i className="fa-solid fa-clock mr-2"></i>
                            {job.experience}经验
                          </span>
                          <span className="flex items-center">
                            <i className="fa-solid fa-graduation-cap mr-2"></i>
                            {job.education}
                          </span>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors">
                        申请职位
                      </button>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">职位描述</h4>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">任职要求</h4>
                        <ul className="space-y-2 text-gray-700">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">工作职责</h4>
                        <ul className="space-y-2 text-gray-700">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start">
                              <i className="fa-solid fa-angle-right text-blue-500 mt-1 mr-2"></i>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">招聘流程</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                简单、高效的招聘流程，助你快速加入我们
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Process line */}
                <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
                
                {/* Process steps */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">简历投递</h3>
                    <p className="text-gray-600 text-sm">通过招聘网站或邮箱投递简历</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">简历筛选</h3>
                    <p className="text-gray-600 text-sm">HR进行简历初筛</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">面试评估</h3>
                    <p className="text-gray-600 text-sm">包括专业面试和综合面试</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                      4
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Offer发放</h3>
                    <p className="text-gray-600 text-sm">通过评估后发放录用通知</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                      5
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">入职报道</h3>
                    <p className="text-gray-600 text-sm">办理入职手续，开始新征程</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join us */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">加入我们，共创健康未来</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              无论您是经验丰富的专业人士还是充满活力的应届毕业生，我们都期待您的加入
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-colors shadow-lg"
            >
              查看全部职位
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;