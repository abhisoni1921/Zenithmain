
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
import AlgniteAptiAssess from './components/Pages/AssessmentSolution/AlgniteAptiAssess';
import AlgniteTechAssess from './components/Pages/AssessmentSolution/AlgniteTechAssess';
import AlgniteHIRE from './components/Pages/AssessmentSolution/AlgniteHIRE';
import AlgniteAssess360 from './components/Pages/AssessmentSolution/AlgniteAssess360';
import LearningContentSolution from './components/Pages/ContentSolution/LearningContentSolution';
import InteractiveContentSolution from './components/Pages/ContentSolution/InteractiveContentSolution';
import AssessmentContentSolution from './components/Pages/ContentSolution/AssessmentContentSolution';
import Home from './components/Pages/Home/Home';
import DiscoverUs from './components/Pages/AboutUs/DiscoverUs';




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
        <Route path='/about' element={<AboutZESPL/>}/>
        <Route path='/leadership' element={<Leadership/>}/>
        <Route path='/visionMission' element={<VisionMission/>}/>
        <Route path='/AlgniteAptiBoost' element={<AlgniteAptiBoost/>}/>
        <Route path='/AlgniteAptiForge' element={<AlgniteAptiForge/>}/>
        <Route path='/AlgniteCompanySpecificPulse' element={<AlgniteCompanySpecificPulse/>}/>
        <Route path='/AlgniteLab' element={<AlgniteLab/>}/>
        <Route path='/AlgniteSoftSkillsBoost' element={<AlgniteSoftSkillsBoost/>}/>
        <Route path='/AlgniteSoftSkillsForge' element={<AlgniteSoftSkillsForge/>}/>
        <Route path='/AlgniteTechForge' element={<AlgniteTechForge/>}/>
        <Route path='/AlgniteAptiAssess' element={<AlgniteAptiAssess/>}/>
        <Route path='/AlgniteTechAssess' element={<AlgniteTechAssess/>}/>
        <Route path='/AlgniteHIRE' element={<AlgniteHIRE/>}/>
        <Route path='/AlgniteAssess360' element={<AlgniteAssess360/>}/>
        <Route path='/AssessmentContentSolution' element={<AssessmentContentSolution/>}/>
        <Route path='/LearningContentSolution' element={<LearningContentSolution/>}/>
        <Route path='/InteractiveContentSolution' element={<InteractiveContentSolution/>}/>
        


      
      </Routes>





    </div>
    
  );
}

export default App;
