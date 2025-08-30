import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About/index";
import GroupIntroduction from "@/pages/About/GroupIntroduction";
import CorporateHonors from "@/pages/About/CorporateHonors";
import CorporateCulture from "@/pages/About/CorporateCulture";
import BrandStory from "@/pages/About/BrandStory";
import SocialResponsibility from "@/pages/About/SocialResponsibility";
import ChairmanSpeech from "@/pages/About/ChairmanSpeech";
import StrategicPlanning from "@/pages/About/StrategicPlanning";
import AssociationManagement from "@/pages/AssociationManagement";
import AssociationCharter from "@/pages/AssociationManagement/AssociationCharter";
import OrganizationalStructure from "@/pages/AssociationManagement/OrganizationalStructure";
import ActivityHighlights from "@/pages/AssociationManagement/ActivityHighlights";
import MemberSystem from "@/pages/AssociationManagement/MemberSystem";
import MemberRegistration from "@/pages/AssociationManagement/MemberSystem/MemberRegistration";
import MemberTraining from "@/pages/AssociationManagement/MemberSystem/MemberTraining";
import SkillExam from "@/pages/AssociationManagement/MemberSystem/SkillExam";
import MemberProfile from "@/pages/AssociationManagement/MemberSystem/MemberProfile";
// 导入体重健康管理系统组件
import WeightHealthManagement from "@/pages/AssociationManagement/WeightHealthManagement";
import KnowledgeSharing from "@/pages/AssociationManagement/WeightHealthManagement/KnowledgeSharing";
import TagatoseKnowledge from "@/pages/AssociationManagement/WeightHealthManagement/TagatoseKnowledge";
import BMITest from "@/pages/AssociationManagement/WeightHealthManagement/BMITest";
import AISolution from "@/pages/AssociationManagement/WeightHealthManagement/AISolution";
import News from "@/pages/News";
import Products from "@/pages/Products";
import SupplyChain from "@/pages/SupplyChain";
import Technology from "@/pages/Technology";
import Careers from "@/pages/Careers";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="group-introduction" element={<GroupIntroduction />} />
          <Route path="corporate-honors" element={<CorporateHonors />} />
          <Route path="corporate-culture" element={<CorporateCulture />} />
          <Route path="brand-story" element={<BrandStory />} />
          <Route path="social-responsibility" element={<SocialResponsibility />} />
          <Route path="chairman-speech" element={<ChairmanSpeech />} />
          <Route path="strategic-planning" element={<StrategicPlanning />} />
        </Route>
        <Route path="/association-management" element={<AssociationManagement />}>
          <Route index element={<AssociationCharter />} />
          <Route path="charter" element={<AssociationCharter />} />
          <Route path="organization" element={<OrganizationalStructure />} />
          <Route path="activities" element={<ActivityHighlights />} />
          <Route path="member-system" element={<MemberSystem />}>
            <Route index element={<MemberRegistration />} />
            <Route path="registration" element={<MemberRegistration />} />
            <Route path="training" element={<MemberTraining />} />
            <Route path="exam" element={<SkillExam />} />
            <Route path="profile" element={<MemberProfile />} />
          </Route>
          {/* 添加体重健康管理系统路由 */}
           <Route path="weight-health-management" element={<WeightHealthManagement />}>
             <Route index element={<KnowledgeSharing />} />
             <Route path="knowledge-sharing" element={<KnowledgeSharing />} />
             <Route path="tagatose-knowledge" element={<TagatoseKnowledge />} />
             <Route path="bmi-test" element={<BMITest />} />
             <Route path="ai-solution" element={<AISolution />} />
           </Route>
        </Route>
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Products />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </AuthContext.Provider>
  );
}
