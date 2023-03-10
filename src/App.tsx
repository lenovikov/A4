import './App.css';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './components/Navigation/AppRoutes';
import Footer from './components/Footer/Footer';
import BlockContainer from './components/BlockContainer/BlockContainer';

function App() {
  return (
    <>
      <Navigation />
      <BlockContainer containerType={'main'}>
        <AppRoutes />
      </BlockContainer>
      <Footer />
    </>
  );
}

export default App;
