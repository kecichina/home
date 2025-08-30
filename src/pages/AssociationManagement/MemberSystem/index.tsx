import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

const MemberSystem = () => {
  const location = useLocation();
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">协会会员管理系统</h2>
      
      <div className="border-b border-gray-200 mb-8">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <Link 
              to="registration" 
              className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                location.pathname.includes('/registration')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              会员注册
            </Link>
          </li>
          <li className="mr-2">
            <Link 
              to="training" 
              className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                location.pathname.includes('/training')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              会员培训
            </Link>
          </li>
          <li className="mr-2">
            <Link 
              to="exam" 
              className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                location.pathname.includes('/exam')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              技能考试
            </Link>
          </li>
          <li>
            <Link 
              to="profile" 
              className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                location.pathname.includes('/profile')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              会员档案
            </Link>
          </li>
        </ul>
      </div>
      
      <Outlet />
    </div>
  );
};

export default MemberSystem;