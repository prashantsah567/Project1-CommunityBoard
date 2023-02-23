import './App.css'
import CardView from './components/CardView'
import dataScience from './assets/dataScience.jpg'
import banner from './assets/banner.jpg'

function App() {

  return (
    <>
    <img src={banner} alt="img cannot be loaded" class="banner"/>
    <h1>Software engineering Community Board</h1>
      <div className="App">
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
        <CardView name="Data Science" field="Software engineering" image={dataScience} btnLink="https://www.oracle.com/what-is-data-science/" />
      </div>
    </>
  )
}

export default App
