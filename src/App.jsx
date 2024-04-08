import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import { outdoorAdventuresData } from './data/outdoorAdventuresData'
import {culturalExperiencesData} from './data/culturalExperiencesData'


function App() {
  const outdoorCards = outdoorAdventuresData.map(card => {
    return (
      <Card
        title={card.title}
        description={card.description}
        location={card.location}
        reviewCount={card.reviewCount}
        price={card.price}
        coverImg={card.coverImg}
      />

    )
  })

  const culturalCards = culturalExperiencesData.map(card => { 
    return (
      <Card
        title={card.title}
        description={card.description}
        location={card.location}
        reviewCount={card.reviewCount}
        price={card.price}
        coverImg={card.coverImg}
      />
    )
  })

  return (
    <div>
      <Header />
      <section>
      <Hero />
      </section>

      <section id='outdoor-sec'>
        <h2 className='heading'>Outdoor Adventures</h2>
        <div className='card-list'>
          {outdoorCards}
        </div>
      </section>
      
      <section id='cultural-sec'>
        <h2 className='heading'>Cultural Experiences</h2>
        <div className='card-list'>
          {culturalCards}
        </div>
      </section>

    </div>
  )
}

export default App;
