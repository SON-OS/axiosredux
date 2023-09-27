import {Routes, Route} from 'react-router-dom'
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import { Provider } from "react-redux";
import './App.css';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
     {/* <Provider store={store}> */}
     <Routes >
      <Route path="/"  element={<Products />}/>
      <Route path="/productdetails/:id"  element={<ProductDetails />}/>

     </Routes>
     
     {/* </Provider> */}
     
    </div>
  );
}

export default App;
