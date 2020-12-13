import { useWindowSize } from "@react-hook/window-size/throttled";
import logo from './logo.svg';
import './App.css';

function App() {
  const [width, height] = useWindowSize ( { fps : 60 });
  return (
    <div>
      <iframe src="https://editor.p5js.org/buruya/embed/NRYhowiAG" width={width} height={height}></iframe>
    </div>
  );
}

export default App;
