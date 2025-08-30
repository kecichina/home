import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AssociationManagement = () => {
  const location = useLocation();
  const isMemberSystem = location.pathname.includes('/member-system');
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">协会管理</h1>
  <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                碳索科技协会组织管理与会员服务平台
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* 协会管理导航标签 */}
              {!isMemberSystem ? (
                <div className="mb-8 border-b border-gray-200">
                  <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                      <Link 
                        to="charter" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.endsWith('/association-management') || location.pathname.includes('/charter')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        协会章程
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link 
                        to="organization" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/organization')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        协会组织架构
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link 
                        to="activities" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/activities')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        协会活动风采
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="member-system" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/member-system')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        协会会员管理系统
                      </Link>
                      <Link 
                        to="weight-health-management" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/weight-health-management')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        体重健康管理系统
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
              
              {/* 子页面内容 */}
              <Outlet />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AssociationManagement;