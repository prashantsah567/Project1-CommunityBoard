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
        <CardView name="3D Designer" field="UI/UX design" image={designer} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Frontend Developer" field="Software development" image={frontend} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Mobile Developer" field="Application development" image={mobileDeveloper} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Database developer" field="Database engineering" image={database} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Backend Developer" field="Software development" image={backend} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Manager" field="Software engineering" image={dataManager} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Project Manager" field="Software management" image={projectManager} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Admin" field="Software administrator" image={administrator} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Game developer" field="Software engineering" image={videoGame} btnLink="https://www.oracle.com/what-is-data-science/" />
      </div>
    </>
  )
}

export default App
