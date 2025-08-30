import React, { useState } from 'react';
import PageCarousel from '@/components/PageCarousel';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// BMI分类数据
const bmiCategories = [
  { range: "＜18.5", category: "偏瘦", suggestion: "适当增加热量摄入，均衡饮食，适度运动增强体质" },
  { range: "18.5-23.9", category: "正常", suggestion: "保持良好的生活习惯，均衡饮食，坚持适量运动" },
  { range: "24.0-27.9", category: "超重", suggestion: "控制总热量摄入，减少高油高糖食物，增加有氧运动" },
  { range: "≥28.0", category: "肥胖", suggestion: "建议咨询专业医生或营养师，制定个性化减重计划" }
];

// BMI图表示例数据
const bmiChartData = [
  { name: '偏瘦', value: 18.4 },
  { name: '正常', value: 22 },
  { name: '超重', value: 26 },
  { name: '肥胖', value: 30 },
];

const BMITest = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    gender: 'male'
  });
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.height || !formData.weight) return;
    
    // 计算BMI (体重kg / 身高m²)
    const heightInMeters = parseFloat(formData.height) / 100;
    const weightInKg = parseFloat(formData.weight);
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    
    setBmiResult(parseFloat(bmi));
    
    // 确定BMI分类
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) {
      setBmiCategory("偏瘦");
      setSuggestion("适当增加热量摄入，均衡饮食，适度运动增强体质");
    } else if (bmiValue < 24) {
      setBmiCategory("正常");
      setSuggestion("保持良好的生活习惯，均衡饮食，坚持适量运动");
    } else if (bmiValue < 28) {
      setBmiCategory("超重");
      setSuggestion("控制总热量摄入，减少高油高糖食物，增加有氧运动");
    } else {
      setBmiCategory("肥胖");
      setSuggestion("建议咨询专业医生或营养师，制定个性化减重计划");
    }
  };

  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=BMI+calculator+health+concept&sign=d0cbaa13be2f157ce6eaa138797ad0e7",
            alt: "BMI计算器健康概念"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Healthy+body+weight+illustration&sign=2edf1013e2122d1930b698be51b54d59",
            alt: "健康体重示意图"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Body+composition+analysis+chart&sign=ae52f07cc1c8c3da5b4dd754fd60f2ba",
            alt: "身体成分分析图表"
          }
        ]}
        height="300px"
      />
      
      <h3 className="text-xl font-bold text-gray-900 mb-6">体重BMI测试</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* BMI计算器表单 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">BMI计算器</h4>
          
          <form onSubmit={calculateBMI} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">身高 (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入身高"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">体重 (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入体重"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入年龄"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              计算BMI
            </button>
          </form>
          
          {/* BMI结果显示 */}
          {bmiResult !== null && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-1">您的BMI指数为</p>
                <p className="text-4xl font-bold text-blue-600 mb-2">{bmiResult}</p>
                <p className="text-lg font-medium text-gray-900 mb-3">{bmiCategory}</p>
                <p className="text-gray-700 text-sm italic">"{suggestion}"</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* BMI参考标准 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">BMI参考标准</h4>
        
        <div className="space-y-4">
          {bmiCategories.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="md:w-1/4 font-medium text-gray-900">{item.range}</div>
              <div className="md:w-1/4 font-medium text-gray-900">{item.category}</div>
              <div className="md:w-2/4 text-gray-600 text-sm mt-2 md:mt-0">{item.suggestion}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* BMI图表 */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-lg font-semibold text-gray-900 mb-6">BMI健康范围参考</h4>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bmiChartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}`, 'BMI值']} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#165DFF" 
                strokeWidth={3}
                dot={{ r: 6, strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          健康体重BMI范围: 18.5-23.9
        </p>
      </div>
    </div>
  );
};

export default BMITest;