import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const location = useLocation();
  const isSubPage = location.pathname !== '/about';
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">关于我们</h1>
  <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                全球领先的塔格糖产业化解决方案提供商，致力于通过科技创新引领健康产业发展
              </p>
            </div>
          </div>
        </section>
        
        {isSubPage && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                {/* About navigation tabs */}
                <div className="mb-8 border-b border-gray-200">
                  <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                      <Link 
                        to="/about/group-introduction" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/group-introduction')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        集团简介
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link 
                        to="/about/corporate-honors" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/corporate-honors')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        企业荣誉
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link 
                        to="/about/corporate-culture" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/corporate-culture')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        企业文化
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link 
                        to="/about/brand-story" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/brand-story')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        品牌故事
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link 
                        to="/about/social-responsibility" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/social-responsibility')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        社会责任
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link 
                        to="/about/chairman-speech" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/chairman-speech')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        董事长致辞
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/about/strategic-planning" 
                        className={`inline-block py-4 px-4 border-b-2 font-medium text-sm ${
                          location.pathname.includes('/strategic-planning')
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        战略规划发展
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Subpage content */}
                <Outlet />
              </div>
            </div>
          </section>
        )}
        
        {!isSubPage && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">请选择要查看的内容</h2>
                <p className="text-gray-600 mb-8">
                  从以下选项中选择您想了解的关于我们的内容
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link 
                    to="/about/group-introduction"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-4 px-6 rounded-xl transition-colors"
                  >
                    集团简介
                  </Link>
                  <Link 
                    to="/about/corporate-honors"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-4 px-6 rounded-xl transition-colors"
                  >
                    企业荣誉
                  </Link>
                  <Link 
                    to="/about/corporate-culture"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-4 px-6 rounded-xl transition-colors"
                  >
                    企业文化
                  </Link>
                  <Link 
                    to="/about/brand-story"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-4 px-6 rounded-xl transition-colors"
                  >
                    品牌故事
                  </Link>
                  <Link 
                    to="/about/social-responsibility"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-4 px-6 rounded-xl transition-colors"
                  >
                    社会责任
                  </Link>
                  <Link 
                    to="/about/chairman-speech"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-4 px-6 rounded-xl transition-colors"
                  >
                    董事长致辞
                  </Link>
                  <Link 
                    to="/about/strategic-planning"
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-4 px-6 rounded-xl transition-colors md:col-span-3"
                  >
                    战略规划发展
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default About;