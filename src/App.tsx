import Form from './components/Form';
import Header from './components/Header';
import CategoryProvider from './context/CategoryContext';
import RecipesProvider from './context/RecipesContext';

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <Header />
        <div className='container mt-5'>
          <div className='row'>
            <Form />
          </div>
        </div>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
