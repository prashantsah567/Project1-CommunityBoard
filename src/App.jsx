import './App.css'
import CardView from './components/CardView'
import dataScience from './assets/dataScience.jpg'

function App() {

  return (
    <>
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
