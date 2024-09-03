import React from 'react';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio'; 
import Business from './components/Business/About';
import Product from './components/Product/Card'; 
import bioimage from './assets/images/elonmusk1.png';

function App() {
  return (
    <div>
      <Header />
      <Bio 
        bioimage={bioimage} 
        title="I'm Elon Reeve Musk"
        description="is a businessman and investor"
      />
      
      <div className="products__container">
        <h2 className="products__title">product</h2> 
        
        <div className="products__flex">
          <Product 
            title="Tesla"
            firstdescription="Electric car company"
            description="Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California."
          />
          <Product 
            title="SpaceX"
            firstdescription="Space exploration company"
            description="SpaceX designs, manufactures and launches advanced rockets and spacecraft."
          />
          <Product 
            title="Neuralink"
            firstdescription="Brain-machine interface"
            description="Neuralink is a neurotechnology company developing implantable brain–machine interfaces."
          />
          <Product 
            title="The Boring Company"
            firstdescription="Infrastructure and tunnel construction services"
            description="The Boring Company constructs safe, fast-to-dig, and low-cost transportation, utility, and freight tunnels."
          />
        </div>
      </div>
      
      <Business 
        title="About Me"
        description="Elon Reeve Musk FRS ( born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and chief engineer at SpaceX; early stage investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in the world. Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company. As the co-founder and CEO of Tesla, Elon leads all product design, engineering and global manufacturing of the company's electric vehicles, battery products and solar energy products."
      />
    </div>
  );
}

export default App;
