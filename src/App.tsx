import Form from './components/Form';
import Header from './components/Header';
import CategoryProvider from './context/CategoryContext';

function App() {
  return (
    <CategoryProvider>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Form />
        </div>
      </div>
    </CategoryProvider>
  );
}

export default App;
