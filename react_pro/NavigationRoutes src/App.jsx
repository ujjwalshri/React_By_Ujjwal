import { Route, Routes, Link , NavLink} from "react-router-dom";
import Home from './Home.jsx';
import Book from './Book.jsx';
import About from './About.jsx';
import UserInfo from "./UserInfo.jsx";
import Layout from "./Books/Layout.jsx";

function App() {
  return (
    <>
    


      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route path="/books" element={<Book />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/:User" element={<UserInfo />} />

        </Route>
       
      </Routes>
    </>
  );
}

export default App;
