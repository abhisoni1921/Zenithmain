
import './App.css';
// import Navbar from './Navbar';


import AnimatedBackground from './AnimatedBackground';

import {  Routes, Route } from 'react-router-dom';
// import { Home, About, Learning, Assessment, Content, Careers } from './components/Pages/Pages';
// import ButtonUsage from './mui' ;
// import AnchorTemporaryDrawer from './nav';
// import CustomizedList from './n';
import Navbar from './components/Nav';









 



import AlgniteApti from './components/Pages/LearningSolution/AlgniteApti/AlgniteApti';
import AlgniteTech from './components/Pages/LearningSolution/AlgniteTech/AlgniteTech';
import AlgniteCommune from './components/Pages/LearningSolution/AlgniteCommune/AlgniteCommune';
import AlgniteLab from './components/Pages/LearningSolution/AlgniteLab';
import AlgniteLMS from './components/Pages/LearningSolution/AlgniteLMS/AlgniteLMS';
// import LearningContentSolution from './components/Pages/ContentSolution/LearningContentSolution';
import InteractiveContentSolution from './components/Pages/ContentSolution/Interactive/InteractiveContentSolution';


import LearningContentSolution from './components/Pages/ContentSolution/Learning/LearningContentSolution';

import Home from './components/Pages/Home/Home';
import DiscoverUs from './components/Pages/AboutUs/DiscoverUs';






import AlgniteAptiAssess from './components/Pages/AssessmentSolution/AlgniteAptiAssess/AlgniteAptiAssess';
import AlgniteTechAssess from './components/Pages/AssessmentSolution/AlgniteTechAssess/AlgniteTechAssess';
import AlgniteMindAssess from './components/Pages/AssessmentSolution/AlgniteMindAssess/AlgniteMindAssess';
import AlgniteHIRE from './components/Pages/AssessmentSolution/AlgniteHIRE/AlgniteHIRE';
import AlgniteAssess360 from './components/Pages/AssessmentSolution/AlgniteAssess360/AlgniteAssess360';
import Translation from './components/Pages/ContentSolution/Translation/Translation';
import AssessmentContent from './components/Pages/ContentSolution/AssessmentContent/AssessmentContent';
import Content from './components/Pages/ContentSolution/Content/Content';
import Resources from './components/Pages/Resources/Resources';
import Career from './components/Pages/Career/Career';
import Contact from './components/Pages/Contact/Contact';
import Error from './components/Pages/Error/Error';








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
        
        
        
        
        
        
        
        
        

        <Route path='/AlgniteAptiAssess' element={<AlgniteAptiAssess/>}/>
        <Route path='/AlgniteTechAssess' element={<AlgniteTechAssess/>}/>
        <Route path='/AlgniteMindAssess' element={<AlgniteMindAssess/>}/>
        <Route path='/AlgniteHIRE' element={<AlgniteHIRE/>}/>
        <Route path='/AlgniteAssess360' element={<AlgniteAssess360/>}/>




        <Route path='/AlgniteApti' element={<AlgniteApti/>}/>
        <Route path='/AlgniteTech' element={<AlgniteTech/>}/>
        <Route path='/AlgniteCommune' element={<AlgniteCommune/>}/>
        <Route path='/AlgniteLab' element={<AlgniteLab/>}/>
        <Route path='/AlgniteLMS' element={<AlgniteLMS/>}/>




        <Route path='/Content' element={<Content/>}/>
        <Route path='/AssessmentContent' element={<AssessmentContent/>}/>
        <Route path='/LearningContentSolution' element={<LearningContentSolution/>}/>
        <Route path='/InteractiveContentSolution' element={<InteractiveContentSolution/>}/>
        <Route path='/LearningContentSolution' element={<LearningContentSolution/>}/>
        
        <Route path='/Translation' element={<Translation/>}/>

        <Route path='/Resources' element={<Resources/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>

        {/* Add more routes as needed */}

      
      </Routes>





    </div>
    
  );
}

export default App;
