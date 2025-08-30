import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const upcomingExams = [
  {
    id: 1,
    title: "塔格糖生产工艺工程师",
    date: "2024-11-30",
    time: "09:00 - 11:30",
    level: "中级",
    method: "线下考试",
    location: "北京、上海、广州、武汉",
    deadline: "2024-11-15",
    applicants: 156
  },
  {
    id: 2,
    title: "生物科技产品检验师",
    date: "2024-12-20",
    time: "14:00 - 16:30",
    level: "初级",
    method: "线上考试",
    location: "在线进行",
    deadline: "2024-12-05",
    applicants: 98
  },
  {
    id: 3,
    title: "健康食品研发工程师",
    date: "2025-01-15",
    time: "09:00 - 12:00",
    level: "高级",
    method: "线下考试",
    location: "北京、上海、广州",
    deadline: "2024-12-30",
    applicants: 76
  }
];

const certificationTypes = [
  {
    id: 1,
    title: "塔格糖生产工艺工程师",
    levels: ["初级", "中级", "高级"],
    description: "掌握塔格糖生产工艺的专业技术人员，能够独立操作和优化生产流程。",
    benefits: ["行业认可", "职业提升", "薪资增长"]
  },
  {
    id: 2,
    title: "生物科技产品检验师",
    levels: ["初级", "中级", "高级"],
    description: "具备生物科技产品质量检验能力的专业人员，能够确保产品质量符合标准。",
    benefits: ["职业认证", "技能提升", "就业优势"]
  },
  {
    id: 3,
    title: "健康食品研发工程师",
    levels: ["初级", "中级", "高级"],
    description: "从事健康食品研发的专业技术人员，能够开发符合市场需求的健康食品。",
    benefits: ["创新能力", "行业竞争力", "职业发展"]
  }
];

const SkillExam = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional+skill+examination+in+classroom+setting&sign=9d61d93288c08dc89488555b6579de96",
            alt: "专业技能考试现场"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Online+examination+platform+for+certification&sign=6d290e09c4e465d3d832d516bbcbf84c",
            alt: "在线技能认证考试平台"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Examination+certificates+and+qualifications+display&sign=3e57ffff63ca3c808166589b3494c06b",
            alt: "技能证书与资格展示"
          }
        ]}
        height="350px"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-6">技能考试与认证</h3>
      
      <div className="mb-12">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">近期考试安排</h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl overflow-hidden shadow">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">考试名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">级别</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">报名截止</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {upcomingExams.map((exam) => (
                <tr key={exam.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{exam.title}</div>
                    <div className="text-xs text-gray-500">{exam.method} · {exam.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{exam.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{exam.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {exam.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{exam.deadline}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">报名</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-6">认证类型</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationTypes.map((cert) => (
            <div key={cert.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <h5 className="font-bold text-gray-900 text-lg mb-2">{cert.title}</h5>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">级别</p>
                  <div className="flex space-x-2">
                    {cert.levels.map((level, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">认证优势</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {cert.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fa-solid fa-check text-green-500 mr-2 text-xs"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                    了解详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillExam;