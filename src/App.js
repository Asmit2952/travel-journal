import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {

  const card = data.map(item => {
    return (
      <Card
          img={item.imageUrl}
          item={item}
      />
    )
  })

  return (
    <div className="App">
     <Header />
     <section className="cards-list">
                {card}
            </section>
    </div>
  );
}

export default App;
