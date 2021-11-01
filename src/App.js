import './App.css';
import HeadModal from './Components/ModalComponents/HeadModal';
import SliderComponent from './Components/SliderTwoVersion/SliderComponent';
import code from "./assets/code.jpg"
import ship from "./assets/ship.jpg"
import OneWaterFool from './Components/OneWaterFool/OneWaterFool';
import TwoWaterFool from './Components/TwoWaterFool/TwoWaterFool';
import ThreeWaterFool from './Components/ThereeWaterFool/ThreeWaterFool';
function App() {
  return (
    <div className="App">
      <HeadModal />
      <OneWaterFool/>
      <TwoWaterFool/>
      <ThreeWaterFool/>
      {/* <SliderComponent ship={ship}  code={code}/> */}
      {/* <SliderComponent/> */}
    </div>
  );
}

export default App;
