import './App.css';
import './Components/Navbar/Navbar.css';
import N from './Components/Navbar/Navbar';
import P from "./Components/Profile/Profile";
import './Components/Profile/Profile.css';
import A from "./Components/About/About";
import "./Components/About/About.css";

function App() {
   const handleName  = fullname => alert(fullname);
  return (
    <div>
     <N/>
     <div className="aboutme">
     { <P  fullname="Mohamed Taki Eddine Mlaiki" bio="Degree in engineering from ENICARTHAGE" profession="Software developer"  handleName={handleName}>taki.jpg</P> }
     <A fullname="Mohamed Taki Eddine Mlaiki" location="Tunis,Tunisia" degree="ENICARTHAGE" phone="50526237" email="mlaikimed2014@gmail.com" dateOfBirth="31/07/1992" experience="3 Year" careerLevel="Mid-Level"/>
     </div>
    </div>
  );
}
fullName: "",
   bio:"Degree in engineering from ENICARTHAGE",
   imgSrc:"taki.jpg",
   profession:"Software developper",

export default App;
