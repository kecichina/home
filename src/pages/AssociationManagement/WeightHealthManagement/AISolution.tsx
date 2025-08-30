import React, { useState } from 'react';
import PageCarousel from '@/components/PageCarousel';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// 模拟AI生成的饮食计划数据
const dietPlanData = [
  { name: '早餐', calories: 450, protein: 25, carbs: 50, fat: 15 },
  { name: '午餐', calories: 650, protein: 35, carbs: 70, fat: 20 },
  { name: '晚餐', calories: 550, protein: 30, carbs: 60, fat: 18 },
  { name: '加餐', calories: 250, protein: 15, carbs: 30, fat: 8 },
];

// 营养摄入比例数据
const nutritionData = [
  { name: '蛋白质', value: 30, color: '#165DFF' },
  { name: '碳水化合物', value: 50, color: '#36CFC9' },
  { name: '脂肪', value: 20, color: '#FF7D00' },
];

// 模拟运动计划数据
const exercisePlanData = [
  { day: '周一', duration: 45, type: '有氧运动' },
  { day: '周二', duration: 30, type: '力量训练' },
  { day: '周三', duration: 0, type: '休息' },
  { day: '周四', duration: 45, type: '有氧运动' },
  { day: '周五', duration: 30, type: '力量训练' },
  { day: '周六', duration: 60, type: '有氧+力量' },
  { day: '周日', duration: 0, type: '休息' },
];

// 体重趋势预测数据
const weightTrendData = [
  { week: '现在', weight: 75 },
  { week: '第1周', weight: 74 },
  { week: '第2周', weight: 73 },
  { week: '第3周', weight: 72 },
  { week: '第4周', weight: 71 },
  { week: '第5周', weight: 70 },
  { week: '第6周', weight: 69 },
  { week: '第7周', weight: 68 },
  { week: '第8周', weight: 67 },
];

const AISolution = () => {
  const [userData, setUserData] = useState({
    goal: 'lose',
    weight: '',
    height: '',
    age: '',
    activityLevel: 'moderate',
    dietaryRestrictions: '',
    weeklyGoal: '0.5'
  });
  const [showPlan, setShowPlan] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const generatePlan = (e: React.FormEvent) => {
    e.preventDefault();
    // 在实际应用中，这里会调用AI API生成个性化计划
    // 这里我们简单模拟生成计划
    setShowPlan(true);
  };

  return (
    <div>
      <PageCarousel 
        images={[
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=AI+weight+management+solution+interface&sign=6c107a87ca9148199b349be56124c76e",
            alt: "AI体重管理方案界面"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Personalized+diet+plan+nutrition&sign=804a5c13500ea83e8984cc76aaa79e3c",
            alt: "个性化饮食计划营养"
          },
          {
            url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Fitness+exercise+plan+calendar&sign=be7a0caa7d61e6c1e2ff3f309d32d942",
            alt: "健身运动计划日历"
          }
        ]}
        height="300px"
      />
      
      <h3 className="text-xl font-bold text-gray-900 mb-6">体重管理AI方案设计</h3>
      
      {!showPlan ? (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">个人信息收集</h4>
          
          <form onSubmit={generatePlan} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">您的目标</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="goal"
                      value="lose"
                      checked={userData.goal === 'lose'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">减重</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="goal"
                      value="maintain"
                      checked={userData.goal === 'maintain'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">维持体重</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="goal"
                      value="gain"
                      checked={userData.goal === 'gain'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">增重</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">每周目标体重变化 (kg)</label>
                <select
                  name="weeklyGoal"
                  value={userData.weeklyGoal}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0.5">减重0.5kg/周 (推荐)</option>
                  <option value="1">减重1kg/周</option>
                  <option value="1.5">减重1.5kg/周</option>
                  <option value="-0.5">增重0.5kg/周</option>
                  <option value="0">维持体重</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">当前体重 (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={userData.weight}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入体重"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">身高 (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={userData.height}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入身高"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请输入年龄"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">活动水平</label>
                <select
                  name="activityLevel"
                  value={userData.activityLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="sedentary">久坐不动 (几乎不运动)</option>
                  <option value="light">轻度活动 (每周运动1-3天)</option>
                  <option value="moderate">中度活动 (每周运动3-5天)</option>
                  <option value="active">活跃 (每周运动6-7天)</option>
                  <option value="veryActive">非常活跃 (每天运动多次)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">饮食限制或偏好</label>
              <textarea
                name="dietaryRestrictions"
                value={userData.dietaryRestrictions}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入您的饮食限制、过敏食物或偏好（如素食、无麸质等）"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              生成AI体重管理方案
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-8">
          {/* 方案摘要 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">您的个性化体重管理方案摘要</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">每日推荐热量</p>
                <p className="text-2xl font-bold text-blue-600">1,900 千卡</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">每周减重目标</p>
                <p className="text-2xl font-bold text-green-600">0.5 kg</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">预计达成时间</p>
                <p className="text-2xl font-bold text-purple-600">8 周</p>
              </div>
            </div>
          </div>
          
          {/* 饮食计划 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">每日饮食计划</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">餐次</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">热量 (千卡)</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">蛋白质 (g)</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">碳水 (g)</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">脂肪 (g)</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">推荐食物</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dietPlanData.map((meal, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{meal.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{meal.calories}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{meal.protein}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{meal.carbs}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{meal.fat}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {index === 0 && "全麦面包、鸡蛋、牛奶、水果"}
                        {index === 1 && "糙米饭、瘦肉、大量蔬菜、少量油脂"}
                        {index === 2 && "杂粮粥、豆制品、绿叶蔬菜、适量坚果"}
                        {index === 3 && "酸奶、水果、少量坚果"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-3">营养摄入比例</h5>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userData.useTagatose 
                          ? [
                              { name: '蛋白质', value: 35, color: '#165DFF' },
                              { name: '碳水化合物', value: 40, color: '#36CFC9' },
                              { name: '脂肪', value: 25, color: '#FF7D00' }
                            ]
                          : nutritionData
                        }
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {userData.useTagatose 
                          ? [
                              { name: '蛋白质', value: 35, color: '#165DFF' },
                              { name: '碳水化合物', value: 40, color: '#36CFC9' },
                              { name: '脂肪', value: 25, color: '#FF7D00' }
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))
                          : nutritionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))
                        }
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, '比例']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-3">饮食建议</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>保证每日饮水2000-2500ml</span>
                  </li>
                  {userData.useTagatose ? (
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>使用塔格糖替代传统糖类，可减少75%碳水热量摄入</span>
                    </li>
                  ) : (
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>选择低GI碳水化合物，增加膳食纤维摄入</span>
                    </li>
                  )}
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>优先选择优质蛋白质来源，如瘦肉、鱼类、蛋类、豆制品</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>控制烹饪用油，选择健康脂肪来源</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>少食多餐，避免暴饮暴食</span>
                  </li>
                  {userData.useTagatose && (
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>塔格糖代谢缓慢，可延长饱腹感，建议餐前服用效果更佳</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          {/* 运动计划 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">每周运动计划</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">星期</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">运动类型</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">时长 (分钟)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {exercisePlanData.map((day, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{day.day}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{day.type}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{day.duration} 分钟</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-3">运动建议</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>有氧运动可选择快走、慢跑、游泳、骑自行车等</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>力量训练可选择哑铃、杠铃、弹力带或自身体重训练</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>运动前进行5-10分钟热身，运动后进行5-10分钟拉伸</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>逐渐增加运动强度和时间，避免受伤</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>保持运动多样性，提高趣味性和效果</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 体重趋势预测 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">体重趋势预测</h4>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} kg`, '体重']} />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#165DFF" 
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h5 className="text-sm font-medium text-gray-900 mb-2">注意事项</h5>
              <p className="text-sm text-gray-700">
                此计划基于您提供的信息由AI生成，实际效果可能因个人情况而异。建议每周测量一次体重，根据实际情况调整计划。如有需要，请咨询专业营养师或健身教练。
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => setShowPlan(false)}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                <i className="fa-solid fa-refresh mr-1"></i>
                重新生成计划
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISolution;