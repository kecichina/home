import React from 'react';
import PageCarousel from '@/components/PageCarousel';

const OrganizationalStructure = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Organizational+structure+chart+display+for+association&sign=ca38826fd6f541faa261272dc69b6b21",
            alt: "协会组织架构图展示"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+board+of+directors+meeting+in+conference+room&sign=73505054ae9635b2187ef65f35ee30c1",
            alt: "协会理事会会议"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+departments+collaboration+workflow+visualization&sign=1896c53f86f4120da858ea1ac77009e4",
            alt: "协会部门协作流程"
          }
        ]}
      />
      <h2 className="text-2xl font-bold text-gray-900 mb-6">协会组织架构</h2>
      
      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 text-white rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <span className="font-bold text-lg">理事会</span>
          </div>
          <h3 className="text-xl font-semibold">最高决策机构</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="text-blue-600 font-bold mb-2">理事长</div>
            <p className="text-sm text-gray-600">负责协会全面工作</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="text-blue-600 font-bold mb-2">副理事长</div>
            <p className="text-sm text-gray-600">协助理事长工作</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="text-blue-600 font-bold mb-2">秘书长</div>
            <p className="text-sm text-gray-600">负责日常事务管理</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-center mb-8">常设机构</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-blue-600 font-bold mb-2">秘书处</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 日常行政事务</li>
                <li>• 会议组织安排</li>
                <li>• 文件起草管理</li>
                <li>• 内外联络协调</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-blue-600 font-bold mb-2">会员部</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 会员发展管理</li>
                <li>• 会员权益维护</li>
                <li>• 会员信息管理</li>
                <li>• 会员活动组织</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-blue-600 font-bold mb-2">技术部</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 技术标准制定</li>
                <li>• 技术交流合作</li>
                <li>• 专业技能培训</li>
                <li>• 科研成果推广</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="text-blue-600 font-bold mb-2">宣传部</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 协会形象建设</li>
                <li>• 活动宣传报道</li>
                <li>• 行业资讯发布</li>
                <li>• 媒体关系维护</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-center mb-6">专业委员会</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="font-bold text-gray-800 mb-1">塔格糖技术委员会</div>
            <p className="text-xs text-gray-500">专注塔格糖技术研究与应用</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="font-bold text-gray-800 mb-1">生物科技委员会</div>
            <p className="text-xs text-gray-500">推动生物科技产业发展</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="font-bold text-gray-800 mb-1">健康产业委员会</div>
            <p className="text-xs text-gray-500">促进健康产业交流合作</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="font-bold text-gray-800 mb-1">标准化委员会</div>
            <p className="text-xs text-gray-500">制定行业标准规范</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="font-bold text-gray-800 mb-1">国际合作委员会</div>
            <p className="text-xs text-gray-500">拓展国际交流合作</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="font-bold text-gray-800 mb-1">青年科学家委员会</div>
            <p className="text-xs text-gray-500">培养青年科技人才</p>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default OrganizationalStructure;