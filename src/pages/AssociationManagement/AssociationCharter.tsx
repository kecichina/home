import React from 'react';
import PageCarousel from '@/components/PageCarousel';
import { Link } from 'react-router-dom';

const AssociationCharter = () => {
  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+meeting+with+members+discussing+charter&sign=d77d44ff410837a66b1b07c5bd03dc9f",
            alt: "协会成员讨论章程会议"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Official+documents+and+charter+display+in+government+building&sign=60a5db2080da14aed0c76b553521ce99",
            alt: "协会章程正式文件展示"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+leadership+team+signing+official+agreement&sign=a535d983b7eb03778d6e47efe3641298",
            alt: "协会领导签署正式协议"
          }
        ]}
      />
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">第一章 总则</h2>
        <div className="space-y-4 text-gray-700">
          <p className="flex">
            <span className="font-bold mr-2">第一条</span>
            <span>本协会名称为"碳索科技协会"，英文名称为"Carbon Solutions Technology Association"，缩写为"CSTA"。</span>
          </p>
          <p className="flex">
            <span className="font-bold mr-2">第二条</span>
            <span>本协会是由从事生物科技、健康产业、塔格糖相关技术研究、生产、应用的企事业单位、科研机构及个人自愿组成的行业性、非营利性社会组织。</span>
          </p>
          <p className="flex">
            <span className="font-bold mr-2">第三条</span>
            <span>本协会的宗旨是：遵守国家宪法、法律、法规和政策，践行社会主义核心价值观，遵守社会道德风尚，服务会员，规范行业，发展产业，推动塔格糖及相关生物科技产业的创新发展和应用推广，为人类健康事业贡献力量。</span>
          </p>
          <p className="flex">
            <span className="font-bold mr-2">第四条</span>
            <span>本协会接受业务主管单位和登记管理机关的业务指导和监督管理。</span>
          </p>
          <p className="flex">
            <span className="font-bold mr-2">第五条</span>
            <span>本协会的住所设在湖北省黄石市。</span>
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">第二章 业务范围</h2>
        <ul className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>开展行业调查研究，收集、分析、发布行业信息，为政府制定产业政策提供参考建议，为企业经营决策提供服务。</li>
          <li>组织制定和推广行业标准、团体标准，推动行业标准化建设，提高行业整体素质。</li>
          <li>组织开展技术交流与合作，推广先进技术、工艺和设备，促进技术创新和成果转化。</li>
          <li>组织开展行业培训、技术咨询、展览展示等活动，提高从业人员素质，促进产品市场拓展。</li>
          <li>加强行业自律，规范行业行为，维护市场秩序，保护公平竞争。</li>
          <li>反映会员诉求，维护会员合法权益，协调会员关系。</li>
          <li>开展国际交流与合作，推动行业国际化发展。</li>
          <li>编辑出版行业刊物、资料，建设行业信息平台，开展行业宣传。</li>
          <li>承办政府及有关部门委托的事项。</li>
          <li>开展符合本协会宗旨的其他活动。</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">第三章 会员</h2>
        <div className="space-y-4 text-gray-700">
          <p className="font-bold">第七条 本协会会员包括单位会员和个人会员。</p>
          <p className="font-bold">第八条 申请加入本协会的会员，必须具备下列条件：</p>
          <ul className="ml-6 space-y-2 list-disc list-inside">
            <li>拥护本协会的章程；</li>
            <li>有加入本协会的意愿；</li>
            <li>在本协会的业务领域内具有一定的影响；</li>
            <li>单位会员应是依法登记注册的企事业单位、科研机构等；</li>
            <li>个人会员应是在本行业领域内从事相关工作的专业人士。</li>
          </ul>
          <p className="font-bold">第九条 会员入会的程序是：</p>
          <ol className="ml-6 space-y-2 list-decimal list-inside">
            <li>提交入会申请书；</li>
            <li>经理事会或常务理事会讨论通过；</li>
            <li>由理事会或理事会授权的机构发给会员证。</li>
          </ol>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
          下载完整章程
          <i className="fa-solid fa-download ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default AssociationCharter;