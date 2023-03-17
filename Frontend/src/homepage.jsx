
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from './component/Tab';
import './App.css';



export default function Homepage({hidden}) {
  const [view, setView] = useState('home');
  const height = window.visualViewport.height - 80;

  return (
    <div className="Homepage" hidden={hidden}>
      <Navbar viewSelector={setView} />
      <Tabs hidden={view !== 'tabs'}></Tabs>
      <Contact hidden={view !== 'contact'} />

    </div>
  );
}


