import React from 'react';
import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import './style/style.css';
import Header from './components/header.js';
import Banner from './components/banner.js';
import Gallery from './components/gallery.js'
import Footer from './components/footer.js';

function App() {

  
  // Array of arts
  const arts = [
    {
      id: '1',
      artname: "Cycle Symphony",
      description: "An ode to urban exploration, capturing the freedom of the open road.",
      url: image1,
    },

    {
      id: '2',
      artname: "Boat Serenade",
      description: "Embark on a tranquil voyage across serene waters, embracing the gentle sway of the waves.",
      url: image2,
    },

    {
      id: '3',
      artname: "Castle Chronicles",
      description: "Step into a world of enchantment and history, where each stone whispers tales of a bygone era",
      url: image3,
    },

    {
      id: '4',
      artname: "Lady's Journey",
      description: "A timeless romance, painted with delicate strokes of passion and longing.",
      url: image4,
    }
   

  ]
  return (
    <>
      <header>
      <Header />
    </header>
    
    <main>
      <Banner />
      <Gallery list={arts}/>
    </main>

    <footer>
      <Footer />


    </footer>

    </>
  );
}

export default App;
