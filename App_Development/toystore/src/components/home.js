import React from "react";
import Header from "./header";
import Slideshow from "./slide";
import ShopByAge from "./homeage";
import NavBar from "./navbar";
import ImageComponent from "./ad";
import Marq from "./marq";
import CenteredTextWithLines from "./title";
import ImageGallery from "./books";
import MarqueeGrid from "./marq";
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
      {/* <MarqueeGrid/> */}
      <Footer/>
    </div>
  );
}

export default Home;
