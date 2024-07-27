import React from "react";
import Header from "./header";
import Slideshow from "./slide";
import ShopByAge from "./homeage";
import NavBar from "./navbar";
import ImageComponent from "./ad";
import CenteredTextWithLines from "./title";
import ImageGallery from "./books";
import Image from "./brand";
import Footer from "./footer";
import CenteredText from "./title2";
import Centere from "./title3";
function Home() {
  return (
    <div>
      <Header/>
      <NavBar/>
       <Slideshow/>
       <CenteredText/>
      <ShopByAge/>  
      <Centere/>
      <Image/>
      <ImageComponent/>
      <CenteredTextWithLines/>
      <ImageGallery/>
      
      <Footer/>
    </div>
  );
}

export default Home;
