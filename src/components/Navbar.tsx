import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links for desktop and mobile
  const navLinks = [
      { name: '首页', path: '/' },
      { 
        name: '关于我们', 
        path: '/about',
        subMenu: [
          { name: '集团简介', path: '/about/group-introduction' },
          { name: '企业荣誉', path: '/about/corporate-honors' },
          { name: '企业文化', path: '/about/corporate-culture' },
          { name: '品牌故事', path: '/about/brand-story' },
          { name: '社会责任', path: '/about/social-responsibility' },
          { name: '董事长致辞', path: '/about/chairman-speech' },
          { name: '战略规划发展', path: '/about/strategic-planning' }
        ]
      },
    { 
      name: '协会管理', 
      path: '/association-management',
      subMenu: [
        { name: '协会章程', path: '/association-management/charter' },
        { name: '协会组织架构', path: '/association-management/organization' },
        { name: '协会活动风采', path: '/association-management/activities' },
        { 
          name: '协会会员管理系统', 
          path: '/association-management/member-system',
          subMenu: [
            { name: '会员注册', path: '/association-management/member-system/registration' },
            { name: '会员培训', path: '/association-management/member-system/training' },
            { name: '技能考试', path: '/association-management/member-system/exam' },
            { name: '会员档案', path: '/association-management/member-system/profile' }
          ]
        },
        { 
          name: '体重健康管理系统', 
          path: '/association-management/weight-health-management',
          subMenu: [
            { name: '体重管理知识分享', path: '/association-management/weight-health-management/knowledge-sharing' },
            { name: '体重BMI测试', path: '/association-management/weight-health-management/bmi-test' },
            { name: '体重管理AI方案设计', path: '/association-management/weight-health-management/ai-solution' }
          ]
        }
      ]
    },
    { name: '新闻中心', path: '/news' },
    { name: '产品商城', path: '/products' },
    { name: '供应链', path: '/supply-chain' },
    { name: '技术应用', path: '/technology' },
    { name: '人才中心', path: '/careers' },
  ];

  return (
  <header 
    className={cn(
      'fixed w-full z-50 transition-all duration-300 bg-transparent py-4'
    )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
   <Link to="/" className="flex items-center space-x-2">
        <div className="w-[80px] h-[80px] rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 bg-transparent">
        <img 
           src="https://lf-code-agent.coze.cn/obj/x-ai-cn/246067552258/attachment/生成特定风格图片 (1)(1)_20250829031625.jpg" 
          alt="碳索科技logo" 
          className="w-full h-full object-contain bg-transparent"
        />
      </div>

  </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.subMenu ? (
                <div className="relative group">
  <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center text-sm">
    {link.name}
    <i className="fa-solid fa-chevron-down ml-1 text-xs"></i>
  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.subMenu.map((subLink) => (
                      subLink.subMenu ? (
                        <div className="relative group">
                          <div className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer">
                            <span>{subLink.name}</span>
                            <i className="fa-solid fa-chevron-right ml-1 text-xs"></i>
                          </div>
                          <div className="absolute left-full top-0 w-56 bg-white rounded-xl shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            {subLink.subMenu.map((subSubLink) => (
                              <Link
                                key={subSubLink.path}
                                to={subSubLink.path}
                                className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
                              >
                                {subSubLink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50"
                        >
                          {subLink.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ) : (
  <Link
    key={link.path}
    to={link.path}
    className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group text-sm"
  >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.subMenu ? (
                  <div key={link.path} className="py-2 border-b border-gray-100">
                    <button 
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => {
                        const mobileSubMenu = document.getElementById(`mobile-submenu-${link.path}`);
                        if (mobileSubMenu) {
                          mobileSubMenu.classList.toggle('hidden');
                        }
                      }}
                    >
                      <span>{link.name}</span>
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </button>
                    <div id={`mobile-submenu-${link.path}`} className="hidden pl-4 mt-1 border-l-2 border-gray-200">
                      {link.subMenu.map((subLink) => (
                        subLink.subMenu ? (
                          <div key={subLink.path} className="py-2">
                            <button 
                              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium text-sm"
                              onClick={() => {
                                const mobileSubSubMenu = document.getElementById(`mobile-submenu-${subLink.path}`);
                                if (mobileSubSubMenu) {
                                  mobileSubSubMenu.classList.toggle('hidden');
                                }
                              }}
                            >
                              <span>{subLink.name}</span>
                              <i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                            <div id={`mobile-submenu-${subLink.path}`} className="hidden pl-4 mt-1 border-l-2 border-gray-200">
                              {subLink.subMenu.map((subSubLink) => (
                                <Link
                                  key={subSubLink.path}
                                  to={subSubLink.path}
                                  className="block py-2 text-gray-700 hover:text-blue-600 text-sm"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subSubLink.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className="block py-2 text-gray-700 hover:text-blue-600 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-100 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;