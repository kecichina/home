import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TagRabbitAIChat = () => {
  // 状态管理
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "您好！我是塔格兔子，有什么可以帮助您的吗？",
      sender: "ai"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // 自动滚动到最新消息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // 模拟AI回复
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // 添加用户消息
    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user"
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);
    
    // 模拟AI思考和回复延迟
    setTimeout(() => {
      const aiResponses = [
        "塔格糖是一种低热量甜味剂，甜度约为蔗糖的92%，但热量仅为其33%。",
        "使用塔格糖后，碳水热量仅有原来摄入碳水的25%，非常适合体重管理。",
        "我们的体重健康管理系统可以帮助您制定个性化的体重管理方案。",
        "塔格糖具有0升糖指数，不会引起血糖波动，适合糖尿病患者食用。",
        "您可以通过BMI测试了解自己的体重健康状况，我们的系统会提供专业建议。",
        "塔格糖不仅可以作为甜味剂，还有助于促进肠道健康和增强饱腹感。"
      ];
      
      // 随机选择一个回复
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: "ai"
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  // 处理键盘回车发送消息
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleSendMessage();
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 聊天窗口 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* 聊天头部 */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white p-1">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Cute+rabbit+character+cartoon+style+for+AI+chatbot&sign=82a53a13b2a04a02dbd14a14dd2caa6f" 
                    alt="塔格兔子" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">塔格兔子</h3>
                  <p className="text-sm opacity-90">AI客服助手</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            
            {/* 聊天消息区域 */}
            <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.sender === 'ai' && (
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                        <img 
                          src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Cute+rabbit+character+cartoon+style+avatar&sign=2f11008ce857b6a0aa89d6f7ae3b7879" 
                          alt="塔格兔子" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`max-w-[75%] px-4 py-2 rounded-lg ${
                      message.sender === 'ai' 
                        ? 'bg-white shadow-md' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                      <img 
                        src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Cute+rabbit+character+cartoon+style+avatar&sign=2f11008ce857b6a0aa89d6f7ae3b7879" 
                        alt="塔格兔子" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white shadow-md px-4 py-3 rounded-lg">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* 输入区域 */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="请输入您的问题..."
                  disabled={isTyping}
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors disabled:bg-gray-300"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                塔格兔子AI客服可回答关于塔格糖、体重管理等相关问题
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 浮动按钮 */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-white p-1">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Cute+rabbit+character+cartoon+style+icon&sign=c878ce0f0544501547ef04b5b3cb1285" 
                alt="塔格兔子" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
              3
            </span>
          </div>
        </motion.button>
      )}
    </div>
  );
};

export default TagRabbitAIChat;