import AppRouter from './app-router';
import Footer from './components/footer';
import Header from './components/header';
import Setting from './components/setting';

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <AppRouter/>
      </main>
      <Setting />
      <Footer/>
    </div>
  );
}

export default App;
