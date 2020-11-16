import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Dialogs from "./components/dialogs/Dialogs";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Nav/>
        <Route path='/profile' render={() => (
          <Content posts={props.posts}/>
        )}/>
        <Route path='/dialogs' render={() => (
          <Dialogs dialogs={props.dialogs} messages={props.messages}/>
        )}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
