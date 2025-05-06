import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FooterList from './components/FooterList';
import ListComics from './components/ListComics';

function App() {

  return (
    <>
      <Header></Header>
      <ListComics></ListComics>
      <Main></Main>
      <Footer></Footer>
      <FooterList></FooterList>
    </>
  )
}

export default App;
