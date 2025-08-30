import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-lg">碳索</span>
              </div>
    <span className="text-lg font-bold text-white">碳索科技</span>
            </div>
            <p className="text-gray-400 mb-4">
              全球领先的塔格糖产业化解决方案提供商，致力于通过科技创新引领健康产业发展。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">关于我们</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">产品商城</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">新闻中心</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">人才中心</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">资源中心</h3>
            <ul className="space-y-2">
              <li><Link to="/technology" className="text-gray-400 hover:text-white transition-colors">技术应用</Link></li>
               <li><Link to="/association-management" className="text-gray-400 hover:text-white transition-colors">协会管理</Link></li>
              <li><Link to="/supply-chain" className="text-gray-400 hover:text-white transition-colors">供应链</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">技术白皮书</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-400">湖北省黄石市黄石港区磁湖路1号</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-blue-400 mr-3"></i>
                <span className="text-gray-400">+86 714-1234567</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-blue-400 mr-3"></i>
                <span className="text-gray-400">info@tansuotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} 碳索科技有限公司. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">使用条款</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;