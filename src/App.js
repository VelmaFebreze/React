import logo from './to do list.jpg';
import logo2 from './Fade and Slide in on Scroll.jpg';
import logo3 from './Age Calculator.jpg';
import logo4 from './TaylorSwiftQuiz.jpg';
import logo5 from './Calculator.jpg';
import logo6 from './LinkedIn.png';
import logo7 from './LinkedIn-After.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2 class="projects">Projects</h2>
      <h3 class="projects-smaller">Here are some mini-projects I have learned how to do while learning Software Development</h3>
      {'\n'}
      {'\n'}
      {'\n'}
      <div class="project-container">
        <div class="project-item">
          <h3 class="project-title">To-Do List</h3>
          <img src={logo} alt="To Do LIst Project" class="project-img"/>;
          <h4 class="project-info">A website that adds items to your To-To List with a random photo when you type it up and hit "Add Task".</h4>
          <a href="https://github.com/VelmaFebreze/To-Do-List-Mini-Project" class="project-link" target="_blank" rel="noreferrer">Check it out!</a>
        </div>

        <div class="project-item">
          <h3 class="project-title">Fade and Slide in on Scroll</h3>
          <img src={logo2} alt="Fade and Slide in on Scroll Project" class="project-img"/>;
          <h4 class="project-info">A fade-and-slide-in effect that works when the page is scrolled.</h4>
          <a href="https://github.com/VelmaFebreze/Fade-and-Slide-in-on-Scroll-mini-project" class="project-link" target="_blank" rel="noreferrer">Check it out!</a>
        </div>

        <div class="project-item">
        <h3 class="project-title">Age Calculator</h3>
        <img src={logo3} alt="Age Calculator Project" class="project-img"/>;
        <h4 class="project-info">A website that automatically tells you the age depending on the birthday.</h4>
        <a href="https://github.com/VelmaFebreze/Age-Calculator-Mini-Project" class="project-link" target="_blank" rel="noreferrer">Check it out!</a>
        </div>

        <div class="project-item">
          <h3 class="project-title">Taylor Swift Quiz</h3>
          <img src={logo4} alt="Taylor Swift Quiz Project" class="project-img t-swift-project-img"/>;
          <h4 class="project-info">A quiz about Taylor Swift that will tell you whether you got it right and scores you.</h4>
          <a href="https://github.com/VelmaFebreze/Taylor-Swift-Quiz" class="project-link" target="_blank" rel="noreferrer">Check it out!</a>
        </div>

        <div class="project-item">
          <h3 class="project-title">Calculator</h3>
          <img src={logo5} alt="Calculator Project" class="project-img"/>;
          <h4 class="project-info">A working calculator</h4>
          <a href="https://github.com/VelmaFebreze/Calculator-Mini-Project" class="project-link" target="_blank" rel="noreferrer">Check it out!</a>
        </div>
      </div>

      <footer class="footer">
        <div class="linkedin-container">
          <div class="image-wrapper">
            <a href="https://www.linkedin.com/in/vellakeith/" target="_blank" rel="noreferrer"><img src={logo6} alt="LinkedIn symbol" width="100px" class="linkedin"/>;
            <img src={logo7} alt="LinkedIn symbol mess" class="linkedin-mess" width="100px"/>;</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
