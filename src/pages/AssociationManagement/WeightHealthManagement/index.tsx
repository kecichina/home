import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import PageCarousel from '@/components/PageCarousel';

const WeightHealthManagement = () => {
  const location = useLocation();
  
  return (
  <div>
  <PageCarousel 
    images={[
      {
        url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Weight+health+management+system+dashboard&sign=0597ec8608b6c448ebc28834335de536",
        alt: "体重健康管理系统"
      },
      {
        url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Healthy+lifestyle+illustration+with+nutrition+and+exercise&sign=13ec4789472ac15a4a75e85054d1ee9d",
        alt: "健康生活方式"
      },
      {
        url: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Personal+weight+management+journey+illustration&sign=81973fb9bcf785e1c159d22c2f0fb10c",
        alt: "个人体重管理旅程"
      }
    ]}
    height="300px"
  />
  
  <h3 className="text-xl font-bold text-gray-900 mb-6">体重健康管理系统</h3>
  
  <div className="border-b border-gray-200 mb-8">
    <ul className="flex flex-wrap -mb-px">
      <li className="mr-2">
        <Link 
          to="knowledge-sharing" 
          className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
            location.pathname.includes('/knowledge-sharing')
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          体重管理知识分享
        </Link>
      </li>
      <li className="mr-2">
        <Link 
          to="tagatose-knowledge" 
          className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
            location.pathname.includes('/tagatose-knowledge')
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          塔格糖知识分享
        </Link>
      </li>
      <li className="mr-2">
        <Link 
          to="bmi-test" 
          className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
            location.pathname.includes('/bmi-test')
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          体重BMI测试
        </Link>
      </li>
      <li>
        <Link 
          to="ai-solution" 
          className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
            location.pathname.includes('/ai-solution')
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          体重管理AI方案设计
        </Link>
      </li>
    </ul>
  </div>
  
  <Outlet />
    </div>
  );
};

export default WeightHealthManagement;