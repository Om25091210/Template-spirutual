import "./App.css";
import { Home,Feature, Working,Partner,Roadmap,Teams,News } from "./Components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CursorFollower,Scroller } from "./Components/Common";
function App() {

  return (
    <>
      <div className="relative flex flex-col">
      
      <Home/>
      <Feature/>
      <Working/>
      <Partner/>
      <Roadmap/>
      <Teams/>
      <News/>
      
      {/* <CursorFollower/> */}
      <LineOnWebpage/>
       
      </div>
    </>
  );
}

export default App;



function LineOnWebpage() {
  return (
    <div>
    <img
      className="overlay-img-png"
      src="/assets/images/banner/banner-shape-5.png"
      alt=""
    />
  </div>
  )
}

export {LineOnWebpage};
