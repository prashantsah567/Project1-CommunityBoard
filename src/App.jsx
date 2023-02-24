import './App.css'
import CardView from './components/CardView'
import dataScience from './assets/dataScience.jpg'
import banner from './assets/banner.jpg'
import frontend from './assets/frontend.jpg'
import mobileDeveloper from './assets/mobileDeveloper.jpg'
import database from './assets/database.jpg'
import backend from './assets/backend.jpg'
import designer from './assets/designer.jpg'
import dataManager from './assets/dataManager.jpg'
import projectManager from './assets/projectManager.jpg'
import administrator from './assets/administrator.jpg'
import videoGame from './assets/videoGame.jpg'

function App() {

  return (
    <>
    <img src={banner} alt="img cannot be loaded" class="banner"/>
    <h1>Software engineering Community Board</h1>
      <div className="App">
        <CardView name="3D Designer" field="UI/UX design" image={designer} btnLink="https://www.sketchup.com/" />
        <CardView name="Frontend Developer" field="Software development" image={frontend} btnLink="https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" />
        <CardView name="Mobile Developer" field="Application development" image={mobileDeveloper} btnLink="https://www.codecademy.com/catalog/subject/mobile-development" />
        <CardView name="Database developer" field="Database engineering" image={database} btnLink="https://about.gitlab.com/handbook/engineering/development/database/" />
        <CardView name="Backend Developer" field="Software development" image={backend} btnLink="https://www.guru99.com/what-is-backend-developer.html" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Manager" field="Software engineering" image={dataManager} btnLink="https://www.accenture.com/us-en/careers/jobdetails?id=R00138612_en" />
        <CardView name="Project Manager" field="Software management" image={projectManager} btnLink="https://www.projectmanager.com/" />
        <CardView name="Admin" field="Software administrator" image={administrator} btnLink="https://en.wikipedia.org/wiki/System_administrator" />
        <CardView name="Game developer" field="Software engineering" image={videoGame} btnLink="https://www.simplilearn.com/how-to-become-a-game-developer-article" />
      </div>
    </>
  )
}

export default App
