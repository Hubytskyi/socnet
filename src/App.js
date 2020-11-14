import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Dialogs from "./components/dialogs/Dialogs";

const posts = [
  {id: 1, text: 'text text text 1', date: '07/10/2020', author: 'Joseph Ashraf1', like: 3},
  {id: 2, text: 'text text text 2', date: '08/10/2020', author: 'Joseph Ashraf2', like: 5},
  {id: 3, text: 'text text text 3', date: '09/10/2020', author: 'Joseph Ashraf3', like: 6},
  {id: 4, text: 'text text text 4', date: '10/10/2020', author: 'Joseph Ashraf4', like: 2},
  {id: 5, text: 'text text text 5', date: '11/10/2020', author: 'Joseph Ashraf5', like: 4},
  {id: 6, text: 'text text text 6', date: '12/10/2020', author: 'Joseph Ashraf6', like: 5},
];

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      {/*<Content posts={posts}/>*/}
      <Dialogs/>
      <Footer/>
    </div>
  );
}

export default App;
