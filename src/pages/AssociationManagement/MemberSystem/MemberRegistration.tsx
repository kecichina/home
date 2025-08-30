import React, { useState } from 'react';
import PageCarousel from '@/components/PageCarousel';

const MemberRegistration = () => {
  const [formData, setFormData] = useState({
    memberType: 'individual',
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    address: '',
    industry: '',
    interests: [],
    agreeTerms: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'agreeTerms') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => {
          const interests = prev.interests.includes(name)
            ? prev.interests.filter(item => item !== name)
            : [...prev.interests, name];
          return { ...prev, interests };
        });
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理表单提交逻辑
    alert('会员注册申请已提交，请等待审核');
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Member+registration+process+at+association+office&sign=4ad020de89cf5ef4d270c8b690af355c",
            alt: "协会会员注册流程"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Association+membership+benefits+information+display&sign=dbb25003048b5b78853674a9b5363c21",
            alt: "会员权益展示"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=New+members+receiving+membership+cards+at+welcome+event&sign=9c698c41ff413715628c7f3e6719127b",
            alt: "新会员欢迎活动"
          }
        ]}
        height="300px"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-6">会员注册</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">会员类型</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="memberType"
                  value="individual"
                  checked={formData.memberType === 'individual'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">个人会员</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="memberType"
                  value="company"
                  checked={formData.memberType === 'company'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">单位会员</span>
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">所属行业</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">请选择行业</option>
              <option value="food">食品行业</option>
              <option value="beverage">饮料行业</option>
              <option value="pharmaceutical">医药行业</option>
              <option value="biotech">生物技术</option>
              <option value="research">科研机构</option>
              <option value="other">其他行业</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {formData.memberType === 'company' && (
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">公司/机构名称</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}
        
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">职位</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">联系地址</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">感兴趣的领域 (可多选)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="tagatose"
                checked={formData.interests.includes('tagatose')}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">塔格糖技术</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="biotech"
                checked={formData.interests.includes('biotech')}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">生物技术</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="healthfood"
                checked={formData.interests.includes('healthfood')}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">健康食品</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="pharmaceutical"
                checked={formData.interests.includes('pharmaceutical')}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">医药应用</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="industry"
                checked={formData.interests.includes('industry')}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">产业发展</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="standards"
                checked={formData.interests.includes('standards')}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">标准制定</span>
            </label>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreeTerms" className="text-gray-600">
              我同意协会的<a href="#" className="text-blue-600 hover:text-blue-800">章程</a>和<a href="#" className="text-blue-600 hover:text-blue-800">会员管理办法</a>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            提交申请
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemberRegistration;