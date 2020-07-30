import React from 'react';
import Menu from './components/menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front End?"}
       />
       {
         dadosIniciais.categorias.map(category => <Carousel category={category} />)
       }
      <Footer />

    </div>
  );
}

export default App;
