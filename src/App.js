
import './App.css';
// import Navbar from './Navbar';


import AnimatedBackground from './AnimatedBackground';

import {  Routes, Route } from 'react-router-dom';
// import { Home, About, Learning, Assessment, Content, Careers } from './components/Pages/Pages';
// import ButtonUsage from './mui' ;
// import AnchorTemporaryDrawer from './nav';
// import CustomizedList from './n';
import Navbar from './components/Nav';
import AboutZESPL from './components/Pages/AboutUs/AboutZESPL';
import Leadership from './components/Pages/AboutUs/Leadership';
import VisionMission from './components/Pages/AboutUs/VisionMission';



import AlgniteSoftSkillsBoost from './components/Pages/LearningSolution/AlgniteSoftSkillsBoost';
import AlgniteSoftSkillsForge from './components/Pages/LearningSolution/AlgniteSoftSkillsForge';
import AlgniteTechForge from './components/Pages/LearningSolution/AlgniteTechForge';
import AlgniteAptiBoost from './components/Pages/LearningSolution/AlgniteAptiBoost';
import AlgniteLab from './components/Pages/LearningSolution/AlgniteLab';
import AlgniteCompanySpecificPulse from './components/Pages/LearningSolution/AlgniteCompanySpecificPulse';
import AlgniteAptiForge from './components/Pages/LearningSolution/AlgniteAptiForge';


 



import AlgniteApti from './components/Pages/LearningSolution/AlgniteApti/AlgniteApti';
import AlgniteTech from './components/Pages/LearningSolution/AlgniteTech/AlgniteTech';
import AlgniteCommune from './components/Pages/LearningSolution/AlgniteCommune/AlgniteCommune';
import AlgniteLMS from './components/Pages/LearningSolution/AlgniteLMS/AlgniteLMS';
// import LearningContentSolution from './components/Pages/ContentSolution/LearningContentSolution';
import InteractiveContentSolution from './components/Pages/ContentSolution/Interactive/InteractiveContentSolution';
import LearningContentSolution from './components/Pages/ContentSolution/Learning/LearningContentSolution';
import AssessmentContentSolution from './components/Pages/ContentSolution/AssessmentContentSolution';
import Home from './components/Pages/Home/Home';
import DiscoverUs from './components/Pages/AboutUs/DiscoverUs';
import Whoweserve from './components/Pages/AboutUs/Whoweserve/Whoweserve';

import Talentdevelopment from './components/Pages/LearningSolution/Talentdevelopment/Talentdevelopment';
import K2education from './components/Pages/ContentSolution/K2education/K2education';
import Content from './components/Pages/ContentSolution/Content/Content';


import AlgniteAptiAssess from './components/Pages/AssessmentSolution/AlgniteAptiAssess/AlgniteAptiAssess';
import AlgniteTechAssess from './components/Pages/AssessmentSolution/AlgniteTechAssess/AlgniteTechAssess';
import AlgniteMindAssess from './components/Pages/AssessmentSolution/AlgniteMindAssess/AlgniteMindAssess';
import AlgniteHIRE from './components/Pages/AssessmentSolution/AlgniteHIRE/AlgniteHIRE';
import AlgniteAssess360 from './components/Pages/AssessmentSolution/AlgniteAssess360/AlgniteAssess360';
import Translation from './components/Pages/ContentSolution/Translation/Translation';







function App() {
  
  return (
    
    <div className="App">
      
      
      {/* <Home /> */}
      {/* <ButtonUsage /> */}
      {/* <toggleDrawer /> */}
      {/* <list /> */}
      {/* <AnchorTemporaryDrawer /> */}
      {/* <data /> */}
      {/* <CustomizedList /> */}
      {/* <firenav /> */}
      
      <Navbar />
      <AnimatedBackground />
      <Routes>
      <Route path='/' element= {<Home/>}/>
        <Route path='/Home' element= {<Home/>}/>
        <Route path='/DiscoverUs' element={<DiscoverUs/>}/>
        <Route path='/Whoweserve' element={<Whoweserve/>}/>
        <Route path='/about' element={<AboutZESPL/>}/>
        <Route path='/leadership' element={<Leadership/>}/>
        <Route path='/visionMission' element={<VisionMission/>}/>
        <Route path='/AlgniteAptiBoost' element={<AlgniteAptiBoost/>}/>
        <Route path='/AlgniteAptiForge' element={<AlgniteAptiForge/>}/>
        <Route path='/AlgniteCompanySpecificPulse' element={<AlgniteCompanySpecificPulse/>}/>
        <Route path='/AlgniteLab' element={<AlgniteLab/>}/>
        
        <Route path='/Talentdevelopment' element={<Talentdevelopment/>}/>
        <Route path='/AlgniteSoftSkillsBoost' element={<AlgniteSoftSkillsBoost/>}/>
        <Route path='/AlgniteSoftSkillsForge' element={<AlgniteSoftSkillsForge/>}/>
        <Route path='/AlgniteTechForge' element={<AlgniteTechForge/>}/>
        
        
        
        

        <Route path='/AlgniteAptiAssess' element={<AlgniteAptiAssess/>}/>
        <Route path='/AlgniteTechAssess' element={<AlgniteTechAssess/>}/>
        <Route path='/AlgniteMindAssess' element={<AlgniteMindAssess/>}/>
        <Route path='/AlgniteHIRE' element={<AlgniteHIRE/>}/>
        <Route path='/AlgniteAssess360' element={<AlgniteAssess360/>}/>




        <Route path='/AlgniteApti' element={<AlgniteApti/>}/>
        <Route path='/AlgniteTech' element={<AlgniteTech/>}/>
        <Route path='/AlgniteCommune' element={<AlgniteCommune/>}/>
        <Route path='/AlgniteLMS' element={<AlgniteLMS/>}/>



        <Route path='/Content' element={<Content/>}/>
        <Route path='/AssessmentContentSolution' element={<AssessmentContentSolution/>}/>
        <Route path='/LearningContentSolution' element={<LearningContentSolution/>}/>
        <Route path='/InteractiveContentSolution' element={<InteractiveContentSolution/>}/>
        <Route path='/LearningContentSolution' element={<LearningContentSolution/>}/>
        <Route path='/K2education' element={<K2education/>}/>
        <Route path='/Translation' element={<Translation/>}/>

        


      
      </Routes>





    </div>
    
  );
}

export default App;
