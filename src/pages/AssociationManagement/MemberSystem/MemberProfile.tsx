import React, { useState } from 'react';
import PageCarousel from '@/components/PageCarousel';

// 模拟会员数据
const memberData = {
  id: "CSTA202400156",
  name: "张明",
  membershipType: "个人会员",
  joinDate: "2024-03-15",
  expiryDate: "2025-03-14",
  status: "正常",
  avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Member+avatar+male&sign=cf1ed96008f893d23437af86d4a9590c",
  contactInfo: {
    email: "zhangming@example.com",
    phone: "138****5678",
    address: "湖北省武汉市洪山区生物科技园A座1508室"
  },
  education: "生物化学硕士",
  occupation: "研发工程师",
  company: "武汉生物科技有限公司",
  certification: [
    {
      name: "塔格糖生产工艺工程师（中级）",
      date: "2024-06-20",
      expiry: "2027-06-19"
    }
  ],
  training: [
    {
      name: "塔格糖应用技术培训",
      date: "2024-04-10 至 2024-04-12",
      completion: "已完成"
    }
  ],
  exam: [
    {
      name: "塔格糖生产工艺工程师（中级）",
      date: "2024-05-25",
      result: "合格"
    }
  ],
  contributions: [
    {
      type: "论文",
      title: "塔格糖在健康食品中的应用研究",
      date: "2024-08-15"
    }
  ]
};

const MemberProfile = () => {
  const [activeTab, setActiveTab] = useState("basic");
  
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Member+profile+management+system+interface&sign=e002525d700749e94f65630bbb6a7770",
            alt: "会员档案管理系统界面"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional+member+certification+display&sign=d2c67c255499e8dfcc4f8ae67029b25b",
            alt: "会员专业资格认证展示"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+member+activity+participation+records&sign=6a1ccad8f18a9bccf282033c7b1e04d5",
            alt: "会员活动参与记录"
          }
        ]}
        height="300px"
      />
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-gray-900">会员档案</h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors text-sm">
          编辑资料
        </button>
      </div>
      
      {/* 会员基本信息 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
              <img 
                src={memberData.avatar} 
                alt={memberData.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-gray-900 mb-1">{memberData.name}</h4>
            <p className="text-blue-600 mb-3">{memberData.membershipType} · 会员编号：{memberData.id}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-sm">
              <div>
                <p className="text-gray-500">加入日期</p>
                <p className="font-medium text-gray-900">{memberData.joinDate}</p>
              </div>
              <div>
                <p className="text-gray-500">会员有效期至</p>
                <p className="font-medium text-gray-900">{memberData.expiryDate}</p>
              </div>
              <div>
                <p className="text-gray-500">会员状态</p>
                <p className={`font-medium ${memberData.status === "正常" ? "text-green-600" : "text-red-600"}`}>
                  {memberData.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 会员详细信息标签页 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button 
                onClick={() => setActiveTab("basic")}
                className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "basic"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                基本信息
              </button>
            </li>
            <li className="mr-2">
              <button 
                onClick={() => setActiveTab("certification")}
                className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "certification"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                认证证书
              </button></li>
            <li className="mr-2">
              <button 
                onClick={() => setActiveTab("training")}
                className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "training"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                培训记录
              </button>
            </li>
            <li className="mr-2">
              <button 
                onClick={() => setActiveTab("exam")}
                className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "exam"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                考试记录
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("contributions")}
                className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "contributions"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                贡献成果
              </button>
            </li>
          </ul>
        </div>
        
        <div className="p-6">
          {activeTab === "basic" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">电子邮箱</p>
                <p className="font-medium text-gray-900">{memberData.contactInfo.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">联系电话</p>
                <p className="font-medium text-gray-900">{memberData.contactInfo.phone}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">联系地址</p>
                <p className="font-medium text-gray-900">{memberData.contactInfo.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">学历</p>
                <p className="font-medium text-gray-900">{memberData.education}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">职业</p>
                <p className="font-medium text-gray-900">{memberData.occupation}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">工作单位</p>
                <p className="font-medium text-gray-900">{memberData.company}</p>
              </div>
            </div>
          )}
          
          {activeTab === "certification" && (
            <div className="space-y-6">
              {memberData.certification.length > 0 ? (
                memberData.certification.map((cert, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-gray-900">{cert.name}</h5>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        有效
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">颁发日期</p>
                        <p className="font-medium text-gray-900">{cert.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">有效期至</p>
                        <p className="font-medium text-gray-900">{cert.expiry}</p>
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        查看证书 <i className="fa-solid fa-arrow-right ml-1"></i>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <i className="fa-solid fa-certificate text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-500">暂无认证证书</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    查看可报考认证
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "training" && (
            <div className="overflow-x-auto">
              {memberData.training.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">培训名称</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {memberData.training.map((train, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {train.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {train.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {train.completion}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900">查看证书</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <i className="fa-solid fa-graduation-cap text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-500">暂无培训记录</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    查看培训课程
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "exam" && (
            <div className="overflow-x-auto">
              {memberData.exam.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">考试名称</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">成绩</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {memberData.exam.map((exam, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {exam.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {exam.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {exam.result}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900">查看详情</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <i className="fa-solid fa-file-alt text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-500">暂无考试记录</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    查看考试安排
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "contributions" && (
            <div className="space-y-6">
              {memberData.contributions.length > 0 ? (
                memberData.contributions.map((contribution, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-gray-900">{contribution.title}</h5>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {contribution.type}
                      </span>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-500">发布日期</p>
                      <p className="font-medium text-gray-900">{contribution.date}</p>
                    </div>
                    <div className="mt-4 text-right">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        查看详情 <i className="fa-solid fa-arrow-right ml-1"></i>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <i className="fa-solid fa-lightbulb text-gray-300 text-5xl mb-4"></i>
                  <p className="text-gray-500">暂无贡献成果</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    了解贡献方式
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;